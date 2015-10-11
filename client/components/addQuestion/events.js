Template.add_question.events({
	
	'click #submitQuestionAnswer': function(e){
		console.log('i was clicked')
		var question = document.getElementById('questionText').value
		var answer = document.getElementById('answerText').value
		var catEl = document.getElementById('categoryText')
		var category = catEl.options[catEl.selectedIndex].value

		Meteor.call('addQuestion', question, answer, category, function(error, results){
			if(error){
				console.log(error)
			} else {
				console.log(success)
			}
		})
	}

})