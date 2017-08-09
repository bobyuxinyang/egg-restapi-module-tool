'use strict'
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  return app.model.define('groupvrscenes', {
    sceneId: {
      type: STRING(100),
      allowNull: false
    },
    username: {
      type: STRING(100),
      allowNull: false
    },
    groupIds: {
      type: STRING(1024),
      allowNull: true
    },
    username: {
      type: STRING(100),
      allowNull: false
    },
    title: {
      type: STRING(100),
      allowNull: false
    },
  }, {
    tableName: 'groupvrscenes',
    comment: 'groupvrscenes',
  })
}
