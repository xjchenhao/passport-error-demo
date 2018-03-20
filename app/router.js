'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  app.get('sysUserInfo', '/nodeApi/sys/userInfo', 'sys.main.userInfo');     // 获取用户信息

  app.get('/nodeApi/sys/login', app.passport.authenticate('local', {              // 登录
    successRedirect: '/nodeApi/passport/success',
    failureRedirect: '/nodeApi/passport/failure'
  }));
  app.get('sysLogout', '/nodeApi/sys/logout', 'sys.passport.logout');           // 退出登录  
  app.get('/nodeApi/passport/success', 'sys.passport.success');
  app.get('/nodeApi/passport/failure', 'sys.passport.failure');
};
