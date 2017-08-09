// should change to your own
exports.keys = '_15017331231121_208'

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
// mount middleware
exports.middleware = [
  'robot','errorHandler','apiWrapper'
];
exports.errorHandler = {
  match: '/api',
},
// middleware config
exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ],
};


exports.security = {
  ignore: '/api/',
  domainWhiteList: ['http://127.0.0.1:8080','http://10.180.144.212:8080','http://localhost:8080'],
  methodnoallow: {enable: false },
  csrf: {
    enable: false,
    ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
  },
};

exports.cors = {
  allowMethods: 'GET,HEAD,PUT,OPTIONS,POST,DELETE,PATCH'
};


exports.multipart = {
  fileExtensions: ['.xls', '.doc','.ppt','.docx','.xlsx','.pptx' ],
};


// add your config here
exports.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  // host
  host: process.env.MYSQL_HOST || '106.14.61.22',
  // 端口号
  port: process.env.MYSQL_PORT || '33060',
  // 用户名
  username: process.env.MYSQL_USERNAME || 'root',
  // 密码
  password: process.env.MYSQL_PASSWORD || 'hZLfUDaA7g6',
  // 数据库名
  database: process.env.MYSQL_DB || 'ezland',

  define: {
    timestamps: true,
    createdAt: 'gmt_create',
    updatedAt: 'gmt_modified',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
  logging: console
}

exports.localDatabase = {
  dialect: 'mysql',
  // host
  host: process.env.LOCAL_MYSQL_HOST || '192.168.1.49',
  // 端口号
  port: process.env.LOCAL_MYSQL_PORT || '33060',
  // 用户名
  username: process.env.LOCAL_MYSQL_USERNAME || 'root',
  // 密码
  password: process.env.LOCAL_MYSQL_PASSWORD || 'ezland',
  // 数据库名
  database: process.env.LOCAL_MYSQL_DB || 'ezlandlocal',

  define: {
    timestamps: true,
    createdAt: 'gmt_create',
    updatedAt: 'gmt_modified',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },

}