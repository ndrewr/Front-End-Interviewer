
questions: function() {
		var data = Questions.find({}).fetch();
		// console.log(data);
		return data;
}