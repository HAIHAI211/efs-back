/*
 * @Author: Harrison
 * @Date: 2020-08-11 16:27:55
 * @LastEditors: Harrison
 * @LastEditTime: 2020-08-11 16:41:41
 * @Description: home
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'enterprise financial statement';
  }
}

module.exports = HomeController;
