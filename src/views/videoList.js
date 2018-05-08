var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.children().detach();
    //this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    //return this;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
