/* code to run on client on load */
Meteor.startup(function () {
// default set to avoid NaN/undefined errors
	Session.setDefault('quiz_index', 0);
	Session.setDefault('quiz_length', 0);
	Session.setDefault('saved_list', []);

});