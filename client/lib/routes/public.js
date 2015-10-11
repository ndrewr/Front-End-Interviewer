

// define routes pertaining to 'exposed' group
FlowRouter.route('/', {
  name: 'landing',
  action: function() {
    BlazeLayout.render('layout', { main: 'landing' });
  }
});

FlowRouter.route('/customize', {
  name: 'customize',
  action: function() {
    BlazeLayout.render('layout', { main: 'customize' });
  }
});

FlowRouter.route('/quiz', {
  name: 'quiz',
  action: function() {
    BlazeLayout.render('layout', { main: 'quiz' });
  }
});

FlowRouter.route('/add-question', {
  name: 'quiz',
  action: function() {
    BlazeLayout.render('layout', { main: 'add_question' });
  }
});