/* quiz view helper definitions */

Template.quiz.helpers({

	questions: function() {
		var quizCategory = Session.get('category')
		// var data = Questions.find({ category: Session.get('category')}).fetch();
		// console.log(data)

		var data = Session.get('combo_list') // get the questions set in customize

		Session.set('prev_url', '/quiz'); // used to set question view backBtn
		Session.set('quiz_length', data.length);

		Session.set('random', false);

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
		Session.set('quiz_length', 10);


		Session.set('random', true);


		return random_questions;
	},

	randomMode: function() {
		return FlowRouter.getRouteName() === 'random'
	}


});