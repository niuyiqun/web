const Base = require('./base.js');
module.exports = class extends Base {


    async getCourseListAction() {
        let courseList = await this.model('course').select();
        return this.success(courseList);
    }


};
