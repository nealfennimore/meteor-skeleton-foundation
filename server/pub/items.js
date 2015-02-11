Meteor.publish('items', function (){
  return Item.find();
});

Meteor.methods({
  'addItem': function (name) {
    Item.insert({name: name});
    console.log('Item added: ' + name);
  }
})