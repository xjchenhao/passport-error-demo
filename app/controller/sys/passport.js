'use strict';

module.exports = app => {
    class sysController extends app.Controller {

        async success (ctx) {
            // await ctx.login({
            //     'username': 111
            // }, {
            //         session: true
            //     })
            ctx.body = {
                "code": "0",
                "msg": "登录成功",
                "result": {}
            }
        }

        async failure (ctx) {
            ctx.body = {
                "code": '1',
                "msg": "账号或密码错误",
                "result": {}
            }

            return false;
        }

        async logout (ctx) {
            ctx.logout();

            ctx.body = {
                "code": "0",
                "msg": "退出登录成功",
                "result": {}
            }
        }
    }
    return sysController;
};