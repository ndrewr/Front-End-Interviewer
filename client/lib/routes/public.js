// create route group named 'exposed'
var publicRoutes = FlowRouter.group({
  name: 'publicRoutes',
  triggersEnter: [function(context, redirect) {
    console.log('running exposed group triggers');
  }]
});

// define routes pertaining to 'exposed' group
publicRoutes.route('/', {
  name: 'landing',
  action: function() {
    BlazeLayout.render('layout', { main: 'landing' })
  }
})