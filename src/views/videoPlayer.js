var VideoPlayerView = Backbone.View.extend({


  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
    this.model = this.collection.at(0);
    //  console.log('init' + this.model);
    this.render();
  },

  selectVideo: function(video) {
    this.model = video;
    this.render();
  },

  render: function() {
    //console.log('render' + this.model);
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
    // this.$el.html('<div class="loading">Please wait...</div>');
    // return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
