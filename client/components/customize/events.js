Template.customize.events({

	'click .list-group-item': function(e) {
		var el = e.target
		var items = document.getElementsByClassName('selected')
		var len = items.length
		for(i=0; i<len; i++) {
			item = items[i]
			item.classList.remove('selected')
		}
		if(!el.classList.contains('selected')){
			el.classList.add('selected')
		}

		Session.set('category', this.category)
		console.log(Session.get('category'))
	}

});