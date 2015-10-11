Template.question.helpers({

	question: function(){
		var questionId = Session.get('questionId')
		var question = Questions.findOne({ _id: questionId })
		console.log(question)
		return question
	}

})