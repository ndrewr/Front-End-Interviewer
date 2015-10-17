/* quiz view helper definitions */

Template.quiz.helpers({

	questions: function() {
		var quizCategory = Session.get('category')
		// console.log(Session.get('category'))
		var data = Questions.find({ category: Session.get('category')}).fetch();
		// console.log(data)

		Session.set('prev_url', '/quiz'); // used to set question view backBtn
		return data;
	},

	randomQuestions: function() {
		var question_list = Questions.find({}).fetch();
		var random_numbers = [];
		var existing_list = Session.get('random_list');
		
		if (existing_list.length !== 0) return existing_list;

		// get 10 random numbers
		for(var i=1; i <= 10; i++) {
			random_numbers.push(client_methods.randomizer());
		}

		// get questions corresponding to the random numbers
		var random_questions = random_numbers.map(function(index) {
			return question_list[index];
		});

		Session.set('random_list', random_questions); // save the list
		Session.set('prev_url', '/random'); // used to set question view backBtn
		// console.log(random_questions);
		return random_questions;
	},

	randomMode: function() {
		return FlowRouter.getRouteName() === 'random'
	}


});