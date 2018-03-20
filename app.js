const LocalStrategy = require('passport-local').Strategy;

const crypto = require('crypto');

module.exports = app => {
    // 挂载 strategy
    app.passport.use('local', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true,
    }, (req, username, password, done) => {

        // format user
        const user = {
            provider: 'local',
            username,
            password,
        };
        if (!username) {
            return done(null, false, { message: '请输入用户名' });
        }
        if (!password) {
            return done(null, false, { message: '请输入密码' });
        }
        done(null, user);
        app.passport.doVerify(req, user, done);
    }));

    // 验证用户信息
    app.passport.verify(async (ctx, user) => {
        let list = await ctx.app.mysql.get('back').select('back_user', {
            where: {
                user_account: user.username,
                user_password: crypto.createHash('md5').update(user.password).digest('hex'),
            },
        });

        if (list.length) {
            return 8887878;
        } else {
            return false;
        }
    });
    app.passport.serializeUser(async (ctx, user) => { });
    app.passport.deserializeUser(async (ctx, user) => { });
};
