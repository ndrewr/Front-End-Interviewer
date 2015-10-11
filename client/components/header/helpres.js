Template.header.helpers({

	title: function(){
		return Session.get('title')
	},
	backBtn: function(){
		return Session.get('backBtn')
	}

})