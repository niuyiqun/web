const Base = require('./base.js');
module.exports = class extends Base {
    /**
     * index action
     * @return {Promise} []
     */

    async adminDetailAction() {
        let id = this.getLoginUserId()
        let info = await this.model('admin').where({
            id: id
        }).find();
        return this.success(info);
    }

    async adminEditAction() {
        let id = this.getLoginUserId()
        let mobilePhone = this.post('mobilePhone');
        let gender = this.post('gender');
        let email = this.post('email');
        let upData = {
            mobilePhone: mobilePhone,
            gender: gender,
            email: email,
        };
        await this.model('admin').where({
            id: id
        }).update(upData);
        return this.success();
    }
};
