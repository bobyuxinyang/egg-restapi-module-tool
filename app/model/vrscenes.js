'use strict'
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  return app.model.define('vrscenes', {
    status: {
      type: STRING(100),
      allowNull: false
    },
    qiniuUrl: {
      type: STRING(100),
      allowNull: false
    },
    sceneId: {
      type: STRING(100),
      allowNull: false
    },
    username: {
      type: STRING(100),
      allowNull: false
    },
    title: {
      type: STRING(100),
      allowNull: false
    },
    info: {
      type: STRING(100),
      allowNull: false
    },
  }, {
    tableName: 'vrscenes',
    comment: 'blocks list',
  })
}
