// default set to 0 to avoid NaN error
Session.setDefault('quiz_index', 0);
Session.setDefault('quiz_length', 0);

Template.question.helpers({

	question: function(){
		var questionId = Session.get('questionId')
		var question = Questions.findOne({ _id: questionId })
		return question
	},

	nextQuestionID: function() {
		var current_index = parseInt(Session.get('quiz_index'), 10);
				next_index = (current_index + 1) === Session.get('quiz_length') ? 0 : (current_index + 1);
				next_question = Session.get('combo_list')[next_index];

		// update the current question index
		Session.set('quiz_index', next_index);
		// return next_question._id;
		return next_index
	}

})