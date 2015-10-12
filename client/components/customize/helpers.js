Template.customize.helpers({

	categories: function(){
		return categories = [
			{
				category: 'general'
			},
			{
				category: 'HTML'
			},
			{
				category: 'CSS'
			},
			{
				category: 'JavaScript'
			}
		];
	},

	// if the list exists return question ID, else redirect
	firstQuestionID: function() {
		var list = Session.get("combo_list");
		if(list) return Session.get("combo_list")[0]._id;
		// else FlowRouter.go("/");
	}
	
});