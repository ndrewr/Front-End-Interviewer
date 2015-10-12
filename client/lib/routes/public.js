

// define routes pertaining to 'exposed' group
FlowRouter.route('/', {
  triggersEnter: [function(context) {
    Session.set('title', 'The Interview'),
    Session.set('backBtn', '/')
  }],
  name: 'landing',
  action: function() {
    BlazeLayout.render('layout', { main: 'landing' });
  }
});

FlowRouter.route('/customize', {
  triggersEnter: [function(context) {
    Session.set('title', 'Customize'),
    Session.set('backBtn', '/')
  }],
  name: 'customize',
  action: function() {
    BlazeLayout.render('layout', { main: 'customize' });
  }
});

FlowRouter.route('/quiz', {
  triggersEnter: [function(context) {
    Session.set('title', 'Quiz'),
    Session.set('backBtn', '/customize')
  }],
  name: 'quiz',
  action: function() {
    BlazeLayout.render('layout', { main: 'quiz' });
  }
});

FlowRouter.route('/random', {
  triggersEnter: [function(context) {
    Session.set('title', 'Random Quiz'),
    Session.set('backBtn', '/')
  }],
  name: 'random',
  action: function() {
    BlazeLayout.render('layout', { main: 'quiz' });
  }
});

FlowRouter.route('/question/:questionId', {
  triggersEnter: [function(context) {
    Session.set('questionId', context.params.questionId)
    Session.set('title', 'Question'),
    Session.set('backBtn', '/quiz')
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('layout', { main: 'question' })
  }
})

FlowRouter.route('/add-question', {
  triggersEnter: [function(context) {
    Session.set('title', 'New Question'),
    Session.set('backBtn', '/')
  }],
  name: 'quiz',
  action: function() {
    BlazeLayout.render('layout', { main: 'add_question' });
  }
});