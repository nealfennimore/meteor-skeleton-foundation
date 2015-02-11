Meteor.subscribe('items');

Template.home.helpers({
  'items': function() {
    return Item.find();
  }
});

Template.home.events({
  'submit form': function (e) {
    e.preventDefault();
    Meteor.call('addItem', e.target[0].value);
    e.target[0].value = '';
  }
});