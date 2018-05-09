var SearchView = Backbone.View.extend({

  events: {
    'click button': 'handleClick',
  },
  
  handleClick: function() {
    var data = this.$('input').val();
    this.collection.search(data);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
