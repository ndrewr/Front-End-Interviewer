Template.quiz.events({
	
	// establishes quiz index for next question link
	'click .list-group-item': function(e){
		var quiz_length = parseInt(Session.get('quiz_length'), 10),
				clicked_index = parseInt(e.currentTarget.dataset.index, 10),
				next_index = (clicked_index + 1) >= quiz_length ? 0 : (clicked_index + 1);
		
    Session.set("quiz_index", next_index);
	}

})