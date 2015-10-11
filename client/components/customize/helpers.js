
Template.quiz.helpers({

	questions: function() {
		var data = Questions.find({}).fetch();
		return data;
	}
});