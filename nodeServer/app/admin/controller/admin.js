function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('./base.js');
module.exports = class extends Base {
    /**
     * index action
     * @return {Promise} []
     */

    adminDetailAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            let id = _this.getLoginUserId();
            let info = yield _this.model('admin').where({
                id: id
            }).find();
            return _this.success(info);
        })();
    }

    adminEditAction() {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            let id = _this2.getLoginUserId();
            let mobilePhone = _this2.post('mobilePhone');
            let gender = _this2.post('gender');
            let email = _this2.post('email');
            let upData = {
                mobilePhone: mobilePhone,
                gender: gender,
                email: email
            };
            yield _this2.model('admin').where({
                id: id
            }).update(upData);
            return _this2.success();
        })();
    }
};
//# sourceMappingURL=admin.js.map