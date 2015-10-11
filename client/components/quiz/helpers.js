/* quiz view helper definitions */

Template.quiz.helpers({

	questions: function() {
	var quizCategory = Session.get('category')
	console.log(Session.get('category'))
		var data = Questions.find({ category: Session.get('category')}).fetch();
		console.log(data)
		return data;
	}	

});