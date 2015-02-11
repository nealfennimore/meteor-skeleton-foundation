Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.onAfterAction(function () {
  $(document).foundation();
});