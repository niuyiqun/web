const Base = require('./base.js');
module.exports = class extends Base {
    async loginAction() {
        const username = this.post('username');
        const password = this.post('password');
        const admin = await this.model('admin').where({
            username: username
        }).find();
        if (think.isEmpty(admin)) {
            return this.fail(401, '用户名或密码不正确!');
        }
        if (think.md5(password) !== admin.password) {
            return this.fail(400, '用户名或密码不正确!!');
        }
        const TokenSerivce = this.service('token', 'admin');
        const sessionKey = await TokenSerivce.create({
            id: admin.id
        });
        if (think.isEmpty(sessionKey)) {
            return this.fail('登录失败');
        }
        const userInfo = {
            id: admin.id,
            username: admin.username,
        };
        return this.success({
            token: sessionKey,
            userInfo: userInfo
        });
    }
};
