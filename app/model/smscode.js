'use strict'
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  return app.model.define('smscode', {
    code: {
      type: STRING(100),
      allowNull: false
    },
    status: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '[0, 1, 2]' 
    },
    phone: {
      type: STRING(100),
      allowNull: false,
      comment: 'phone'
    },
    expiredAt: {
      type: DATE,
      allowNull: false,
      comment: 'expiredAt'
    },

  }, {
    tableName: 'smscode',
    comment: 'smscode',
  })
}
