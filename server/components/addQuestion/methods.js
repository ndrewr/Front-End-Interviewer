 Meteor.methods({

	addQuestion: function(question, answer, category) {


		var doc = {
			question: question,
			answer: answer,
			category: category,
			score: 0,
			votes: 0
		}
		console.log(doc)
		Questions.insert(doc);
		return doc;
  }

});