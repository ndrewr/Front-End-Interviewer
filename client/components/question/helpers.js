
Template.question.helpers({

	question: function(){
		var questionId = Session.get('questionId')
		var question = Questions.findOne({ _id: questionId })
		return question
	},

	nextQuestionID: function() {
	// works for random quiz only (10 question)
		var next_index = Session.get('quiz_index'),
				list_type = Session.get('random') ? 'random_list' : 'combo_list'
				next_question_id = Session.get(list_type)[next_index]._id 

		return next_question_id;
	}

})