'use strict'
module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  return app.model.define('plantlist', {
    plantListId: {
      type: STRING,
      allowNull: false
    },
    infoStr: {
      type: TEXT,
      allowNull: false,
    },
    username: {
      type: STRING,
      allowNull: false,
    },
  }, {
    tableName: 'plantlist',
    comment: 'plantlist',
  })
}
