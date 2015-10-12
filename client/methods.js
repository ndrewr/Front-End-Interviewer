/* client methods */

client_methods = {
	calc_score: function(current_question) {
		return Math.ceil(current_question.score / current_question.votes);
	},

	randomizer: function() {
		var min = 0;
		var max = Questions.find({}).count() - 1;
    return Math.floor(Math.random()*(max-min+1)+min);
   }
};