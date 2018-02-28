const _service = require('../service');
const dreamSequelize = require('../models/index').dreams;

module.exports = {
  getDreamsGraphql: async ({current_page = 1, page_size = 10, sort = 'last'} = {}) => {
    let body = {code: '01', result: ''};
    try {
      let condition = {
        limit: [(current_page - 1) * page_size, +page_size]
      };
      if (sort) {
        (sort === 'pop') && (condition.order = [['watcher_nums', 'DESC']]);
        (sort === 'last') && (condition.order = [['created_on', 'DESC']]);
      }
      let result = await _service.findAndCountAll(dreamSequelize, condition);
      body.result = result;
    } catch (e) {
      body.code = '02';
      body.result = e.message;
    } finally {
      return body;
    }
  }
}
