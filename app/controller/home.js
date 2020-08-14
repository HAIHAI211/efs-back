/*
 * @Author: Harrison
 * @Date: 2020-08-11 16:27:55
 * @LastEditors: Harrison
 * @LastEditTime: 2020-08-14 15:03:29
 * @Description: home
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '企业财报评分工具';
  }
}

module.exports = HomeController;
