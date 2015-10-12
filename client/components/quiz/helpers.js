/* quiz view helper definitions */

Template.quiz.helpers({

	questions: function() {
		var quizCategory = Session.get('category')
		// console.log(Session.get('category'))
		var data = Questions.find({ category: Session.get('category')}).fetch();
		// console.log(data)
		return data;
	},

	randomQuestions: function() {
		var question_list = Questions.find({}).fetch();
		var random_numbers = [];

		// get 10 random numbers
		for(var i=1; i <= 10; i++) {
			random_numbers.push(client_methods.randomizer());
		}

		// console.log(random_numbers);
		// get questions corresponding to the random numbers
		var random_questions = random_numbers.map(function(index) {
			return question_list[index];
		});

		// console.log(random_questions);
		return random_questions;
	},

	randomMode: function() {
		return FlowRouter.getRouteName() === 'random'

	}


});