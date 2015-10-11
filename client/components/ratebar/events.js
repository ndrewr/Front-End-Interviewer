/* event handlers for ratebar component */
Template.ratebar.events({
	'click .ratebar__wrapper .ratebar__unit': function (event) {
		// update target post's HP value in minimongo
		// console.log(this);
		console.log(event.currentTarget.dataset.rank);
		var rank = event.currentTarget.dataset.rank,
				current_score = this.score,
				current_votes = this.votes,
				new_score = current_score + parseInt(rank,10);

		console.log("score is %s and vote count is %s", current_score, current_votes);

		// 		current_user = Meteor.user().profile.firstName;
		// 	if(control === 'up') {
		Meteor.call('updateRank', this._id, new_score);
		// 	}

		// 	else {
		// 		Meteor.call('updateRank', this._id, -1, current_user);
		// 	}
	}
});