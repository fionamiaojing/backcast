var VideoPlayerView = Backbone.View.extend({
  
  
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;

  
    // this.$el.html('<div class="loading">Please wait...</div>');
    // return this;

    
  },

  template: templateURL('src/templates/videoPlayer.html')

});
