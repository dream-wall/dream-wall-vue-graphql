const _service = require('../service');
const userSequelize = require('../models/index').users;

module.exports = {
  addUserGraphql: async ({username, password} = {}) => {
    let body = {code: '01', result: ''};
    try {
      let userModel = {
        username, password
      };
      let result = await _service.create(userSequelize, userModel);
      body.result = result;
    } catch (e) {
      body.code = '02';
      body.result = e.message;
    } finally {
      return body;
    }
  },
  findUserGraphql: async ({username, password} = {}) => {
    let body = {code: '01', result: ''};
    try {
      let condition = {
        attributes: ['username', 'password'],
        where: {username}
      };
      let user = await _service.findOne(userSequelize, condition);
      console.log(user);
      if (user) {
        if (user.password === password) {
          body.result = user;
        } else {
          body.code = '02';
          body.result = '密码输入有误';
        }
      } else {
        body.code = '02';
        body.result = '用户不存在,请先注册';
      }
    } catch (e) {
      body.code = '02';
      body.result = e.message;
    } finally {
      return body;
    }
  },
  getUsersGraphql: async ({current_page = 1, page_size = 10} = {}) => {
    let body = {code: '01', result: ''};
    try {
      let condition = {
        limit: [(current_page - 1) * page_size, +page_size]
      };
      let result = await _service.findAndCountAll(userSequelize, condition);
      body.result = result;
    } catch (e) {
      body.code = '02';
      body.result = e.message;
    } finally {
      return body;
    }
  },
  destoryUser: async ({username} = {}) => {
    let body = {code: '01', result: ''};
    try {
      let condition = {
        where: {username}
      };
      let result = await _service.deleteAll(userSequelize, condition);
      body.result = result;
    } catch (e) {
      body.code = '02';
      body.result = e.message;
    } finally {
      return body;
    }
  }
}
