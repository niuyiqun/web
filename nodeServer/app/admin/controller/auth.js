function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('./base.js');
module.exports = class extends Base {
    loginAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            const username = _this.post('username');
            const password = _this.post('password');
            const admin = yield _this.model('admin').where({
                username: username
            }).find();
            if (think.isEmpty(admin)) {
                return _this.fail(401, '用户名或密码不正确!');
            }
            if (think.md5(password) !== admin.password) {
                return _this.fail(400, '用户名或密码不正确!!');
            }
            const TokenSerivce = _this.service('token', 'admin');
            const sessionKey = yield TokenSerivce.create({
                id: admin.id
            });
            if (think.isEmpty(sessionKey)) {
                return _this.fail('登录失败');
            }
            const userInfo = {
                id: admin.id,
                username: admin.username
            };
            return _this.success({
                token: sessionKey,
                userInfo: userInfo
            });
        })();
    }
};
//# sourceMappingURL=auth.js.map