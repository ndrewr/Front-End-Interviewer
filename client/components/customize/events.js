Template.customize.events({

	'click .list-group-item': function(e) {
		Session.set('category', this.category)
		console.log(Session.get('category'))
	}

});