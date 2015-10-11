/* Meteor methods for ratebar */
Meteor.methods({

 	// update global rank score for this question, increment vote count
	'updateRank': function (postId, value) {
		// fetch current rank score, vote count
		// increment vote count
		// add value to rank score (1 - 5)?
		// save
		console.log(postId);
		console.log(value);
			Questions.update(postId, {$inc: {score: parseInt(value,10), votes: 1}});
		},
		
});