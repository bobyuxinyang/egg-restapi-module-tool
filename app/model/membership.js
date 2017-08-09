'use strict'
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  return app.model.define('membership', {
    userId: {
      type: INTEGER,
      allowNull: false
    },
    type: {
      type: STRING(20),
      defaultValue: "normal",
      allowNull: false,
      comment: 'normal, paid, blocked'
    },
    expiredAt: {
      type: DATE,
      allowNull: false,
      comment: '会员过期时间，如果会员状态是paid使用'
    },
    remark: {
      type: STRING(200),
      allowNull: true,
      comment: '会员信息备注'
    }
  }, {
    tableName: 'membership',
    comment: 'membership',
  })
}
