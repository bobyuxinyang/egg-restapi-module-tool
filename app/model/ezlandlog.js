'use strict'
module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  return app.model.define('ezlandlog', {
    type: {
      type: STRING(20),
      allowNull: false
    },
    userinfo: {
      type: TEXT,
      allowNull: false
    },
  }, {
    tableName: 'ezlandlog',
    comment: 'ezlandlog',
  })
}
