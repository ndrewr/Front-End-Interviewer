 Meteor.methods({

	addQuestion: function(question, answer, category) {


		var doc = {
			question: question,
			answer: answer,
			category: category
		}
		console.log(doc)
		Questions.insert(doc);
		return doc;
  }

});