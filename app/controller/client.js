
'use strict';

module.exports = app => {
  class ClientController extends app.Controller {
    * index() {
      const ctx = this.ctx;
      // yield ctx.service.data.dumpLog()
      ctx.body = yield ctx.renderView('public/index.html');
    }
  }
  return ClientController;
};