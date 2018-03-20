'use strict';

module.exports = app => {
    class sysController extends app.Controller {

        async userInfo (ctx) {
            if (!ctx.isAuthenticated()) {
                ctx.body = {
                    code: "-1",
                    msg: '账号未登录',
                    result: ctx.user,
                };

                return false;
            }

            ctx.body = {
                "code": "0",
                "msg": "OK",
                "result": ctx.isAuthenticated()
            }
            ctx.realStatus = 200;
        }
    }
    return sysController;
};