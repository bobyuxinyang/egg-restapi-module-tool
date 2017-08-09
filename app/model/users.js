'use strict'
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  return app.model.define('users', {
    username: {
      type: STRING(100),
      allowNull: false
    },
    password: {
      type: STRING(100),
      allowNull: false
    },
    type: {
      type: STRING(100),
      defaultValue: "admin",
      allowNull: false,
      comment: 'admin blocked'
    }
  }, {
    tableName: 'users',
    comment: 'blocks list'
  })
}
