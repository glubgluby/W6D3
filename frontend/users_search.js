const api_util = require('./api_util.js')

class UsersSearch {
    constructor($el) {
        this.$el = $el;
        this.input = $el.find("input");
        this.ul = $el.find("ul");
        this.input.on('change', this.handleInput.bind(this));
    }

    handleInput(e) {
        api_util.searchUsers(this.input.val()).then(this.renderResults())
    }

    renderResults() {
        this.ul.empty();
        let users = this.ul.data('users');
        debugger
        for (let i=0; i<users.length;i++) {
            this.ul.append(`<li id="${i}"></li>`)
            $(`#${i}`).append(`<a href="users/${users[i].id}"></a>`)
        }
    }
}

module.exports = UsersSearch;