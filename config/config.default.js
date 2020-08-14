/*
 * @Author: Harrison
 * @Date: 2020-08-11 16:27:55
 * @LastEditors: Harrison
 * @LastEditTime: 2020-08-14 10:15:00
 * @Description: 默认配置
 */

/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // config.cluster = {
  //   listen: {
  //     path: '',
  //     port: 8000,
  //     hostname: '0.0.0.0', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
  //     // path: '/var/run/egg.sock',
  //   },
  // };

  // config.cluster = {
  //   listen: {
  //     path: '',
  //     port: 7001,
  //     hostname: '127.0.0.1',
  //   },
  // };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1597134361488_6029';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
