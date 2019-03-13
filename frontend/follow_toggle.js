const api_util = require('./api_util.js');

class FollowToggle {
    constructor($el) {
        this.$el = $el;
        this.userId = $el.data("user-id");
        this.followState = $el.data("follow-state");
        this.render()
        this.$el.on('click', this.handleClick.bind(this));
    }

    render() {
        if (this.followState === "unfollowed") {
            this.$el.text('Follow!');
        } else {
            this.$el.text('Unfollow!');
        }
        this.$el.prop('disabled', false);
    };

    handleClick(e) {
        e.preventDefault();
        this.$el.prop('disabled', true);
        if (this.followState === "unfollowed") {
            api_util.followUser(this.userId).then( () => {
                this.followState = 'followed';
                this.render();
            })
        } else {
            api_util.unfollowUser(this.userId).then( () => {
                this.followState = 'unfollowed';
                this.render();
            });
        }
    }

}

module.exports = FollowToggle;