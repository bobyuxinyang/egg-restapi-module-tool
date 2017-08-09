'use strict'
var Sequelize = require('sequelize')
var path = require('path')

module.exports = app => {
  let config = app.config.localDatabase
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
  const LocalModel = {
    EZlandLog: sequelize.define('ezlandlog', {
      type: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      userinfo: {
        type: Sequelize.TEXT,
        allowNull: false
      },
    }, {
      tableName: 'ezlandlog',
    }),
    Statistic: sequelize.define('statistic', {
      type: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      mobile: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      dateCount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      info: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
    }, {
      tableName: 'statistic',
    }),
    Plantlist: sequelize.define('plantlist', {
      plantListId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      infoStr: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      tableName: 'plantlist',
    })      
  }  

  class LocalDataService extends app.Service {
    * saveRawEZlandLogs(logs) {
      let dataToSave = logs.map(function (item) {
        return {
          type: item.type,
          userinfo: item.userinfo,
          gmt_modified: item.gmt_modified
        }
      })
      yield LocalModel.EZlandLog.sync()
      console.log('----3')
      while (dataToSave.length > 0) {
        const list = dataToSave.splice(0, 100)
        yield LocalModel.EZlandLog.bulkCreate(list)
      }
    }
    * savePlantList(logs) {
      let dataToSave = logs.map(function (item) {
        return {
          plantListId: item.plantListId,
          infoStr: item.infoStr,
          username: item.username,
          gmt_modified: item.gmt_modified
        }
      })
      yield LocalModel.Plantlist.sync()
      while (dataToSave.length > 0) {
        const list = dataToSave.splice(0, 100)
        yield LocalModel.Plantlist.bulkCreate(list)
      }
    }       

    * saveStatistics(statistics) {
      const { ctx } = this
      let dataToSave = []
      yield LocalModel.Statistic.sync()
      for (let key in statistics) {
        let values = key.split(',')
        var item = {
          type: values[0],
          mobile: values[1],
          dateCount: values[2],
          count: statistics[key],
          info: ''
        }
        dataToSave.push(item)
      }
      while (dataToSave.length > 0) {
        const list = dataToSave.splice(0, 100)
        yield LocalModel.Statistic.bulkCreate(list)
      }      
      yield LocalModel.Statistic.create({
        type: 'save_sataistic',
        mobile: 'admin',
        dateCount: ctx.helper.getDateCount(new Date()),
        count: -1
      })
    }
  }
  return LocalDataService
}