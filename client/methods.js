/* client methods */

client_methods = {
	calc_score: function(current_question) {
		return Math.ceil(current_question.score / current_question.votes);
	}
};