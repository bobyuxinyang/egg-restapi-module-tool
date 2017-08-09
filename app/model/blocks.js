'use strict'
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  return app.model.define('blocks', {
    blockName: {
      type: STRING(100),
      allowNull: true
    },
    title: {
      type: STRING(100),
      allowNull: true
    },
    previewImageName: {
      type: STRING(200),
      allowNull: true
    },
    dwgName: {
      type: STRING(200),
      allowNull: true
    },
    dwgMd5: {  // [no use any more]
      type: STRING(200),
      allowNull: true
    },
    blockColor: {
      type: INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    blockDescription: {
      type: STRING(100),
      defaultValue: "",
      allowNull: true
    },
    type: {
      type: STRING(100),
      defaultValue: "plan",
      allowNull: true,
      comment: 'block type: plan, shape, shapeImage'        // 平面，立面，立面手绘三种
    }
  }, {
    tableName: 'blocks',
    comment: 'blocks list',
    createAt: true,
    indexes: [{
      unique: true,
      fields: ['blockName']
    }],
  })
}
