/* quiz view helper definitions */

Template.quiz.helpers({

	questions: function() {
		var data = Questions.find({}).fetch();
		// console.log(data);
		return data;
	}	

});