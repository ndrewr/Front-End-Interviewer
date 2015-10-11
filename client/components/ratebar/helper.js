/* helper definitions for the ratings bar */
Template.ratebar.helpers({
	// one helper to style each 'life unit'
	

	firstHeart: function () {
		return true;
	},
	secondHeart: function () {

		return client_methods.calc_score(this) > 1;
	},
	thirdHeart: function () {

		return client_methods.calc_score(this) > 2;
	},
	fourthHeart: function () {

		return client_methods.calc_score(this) > 3;
	},
	fifthHeart: function () {

		return client_methods.calc_score(this) > 4;
	},
	voteCount: function () {
		// console.log(this);
		// console.log(this.votes);
		return this.votes;
	}

	// the helpers below determine if the rank btns display to user
	// disables if score too high/too low or post's prev ranker is current user
	// upButtonDisable: function () {
	// 	if (this.hp > 2 | Meteor.user().profile.firstName === this.lastUpdatedBy) return "disabled";
	// },
	// downButtonDisable: function () {
	// 	if (this.hp < 1 | Meteor.user().profile.firstName === this.lastUpdatedBy) return "disabled";
	// }

});