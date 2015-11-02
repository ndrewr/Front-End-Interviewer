Template.question.events({
	
	// updates quiz index for next question link
	'click #next': function(e){
		var quiz_length = parseInt(Session.get('quiz_length'), 10),
				current_index = parseInt(Session.get('quiz_index'), 10),
				next_index = (current_index + 1) >= quiz_length ? 0 : (current_index + 1);

		// console.log('HI the vals are %d and %d and %d', quiz_length, current_index, next_index);
    Session.set("quiz_index", next_index);
	}

})