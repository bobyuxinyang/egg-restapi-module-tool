'use strict'
module.exports = app => {
  class DataService extends app.Service {
    * dumpLog() {
      console.log('start dump log...')
      const { ctx } = this
      const now = new Date()
      let timestamp = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0, 0, 0)
      let condition = {
        gmt_modified: {
          $lt: timestamp
        }
      }
      // 今天00:00:00作为时间点
      // 拉取ezlandLog
      const logList = yield ctx.model.Ezlandlog.findAll({
        where: condition
      })
      // 拉取plantlist
      const plantlists = yield ctx.model.Plantlist.findAll({
        where: condition
      })

      // 注册人数统计
      let statistics = {
      }
      // 把原始数据保存到本地
      for (let ezlandLog of logList) {
        // 首先保存原始数据    
        let saveLog = (type, fetchMobileFromLog) => {
          return (ezlandLog) => {
            if (ezlandLog.type === type) {
              let info = JSON.parse(ezlandLog.userinfo)
              let mobilephone = fetchMobileFromLog(info)
              if (!mobilephone) {
                return
              }
              let date = ctx.helper.getDateCount(ezlandLog.gmt_modified)
              let key = `${type},${mobilephone},${date}`
              if (statistics[key]) {
                statistics[key] += 1
              } else {
                statistics[key] = 1
              }
            }
          }      
        }

        saveLog('register', function (info) {
          return info['u']
        })(ezlandLog)

        saveLog('client_login', function (info) {
          if (info.u.status === 'passed') {
            return info.u.user.username
          }
          return null
        })(ezlandLog)

        saveLog('web_login', function (info) {
          return info.u.username
        })(ezlandLog)      

        saveLog('load_sketchup', function (info) {
          return info.u
        })(ezlandLog)

        saveLog('generate_vr', function (info) {
          return info.u
        })(ezlandLog)
      }
      // 保存到本地，原始ezland logs
      yield ctx.service.localdata.saveRawEZlandLogs(logList)

      // 保存到本地，统计结果
      yield ctx.service.localdata.saveStatistics(statistics)

      // 保存到本地，植物列表 
      yield ctx.service.localdata.savePlantList(plantlists)

      // 删除服务器端的原始数据
      yield ctx.model.Ezlandlog.destroy({
        where: condition
      })
      // 删除plantlist
      yield ctx.model.Plantlist.destroy({
        where: condition
      })

      yield ctx.model.Ezlandlog.create({
        type: 'dump_log',
        userinfo: JSON.stringify({})
      })      

      return statistics
    }
  }
  return DataService
}
