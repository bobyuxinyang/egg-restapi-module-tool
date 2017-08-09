'use strict'
module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  return app.model.define('species', {
    chiScienceName: {
      type: STRING(200),
      allowNull: false,
      comment: 'Chinese Science Name'
    },
    alias: {
      type: TEXT,
      allowNull: true,
      comment: 'all alias'
    },
    schedule: {
      type: STRING,
      allowNull: false,
      comment: 'species schedule: T or S or G'
    },
    type: {
      type: STRING,
      allowNull: true,
      comment: 'species type: deciduous, evergreen, semi-deciduous, semi-evergreen'
    },
    group: {
      type: STRING,
      allowNull: true,
      comment: 'species group: coni-deci, deciduous, deci-flower, deci-fruit, bamboo, coni-ever, ever-flower, ever-fruit, evergreen, palm, semi-ever, climber, deciduous, deci-flower, deci-fruit, shrubball, aquatic, ever-flower, ever-fruit, evergreen, grass, groundcover, topiary, semi-ever'
    },
    DBH: {
      type: INTEGER,
      allowNull: false,
      comment: '0: 胸径, 1: 地径'
    },
    diamensions: {
      type: TEXT,
      allowNull: true,
      comment: 'optional diamensions'
    },
    remarks: {
      type: TEXT,
      allowNull: true,
      comment: 'remarks'
    },
    pinyin: {
      type: TEXT,
      allowNull: true,
      comment: 'pinyin'
    },
    cadType: {
      type: TEXT,
      allowNull: false,
      defaultValue: 'block',
      comment: 'cadType, now "block" or "polyline"'
    },
    defaultPlanBlockId: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 277
    },
    defaultShapeBlockId: {
      type: INTEGER,
      allowNull: true
    },
    defaultShapeImageId: {
      type: INTEGER,
      allowNull: true
    },
    foliageColorIndex: {
      type: INTEGER,
      allowNull: true
    },
    imageName: {
      type: STRING(200),
      allowNull: true
    },
    isTest: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0
    },    
  }, {
    tableName: 'species',
    comment: 'species info',
    createAt: true,
    indexes: [],
  })
}
