module.exports = app => {
  return {
    schedule: {
      cron: '0 0 1 * * *',
      // cron: '*/20 * * * * *',
      type: 'worker',
    },
    * task(ctx) {
      yield ctx.service.data.dumpLog()
    },
  };
};
