var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    // console.log(this);
    //this.videos.forEach(this.render, this);

    this.videoList = new VideoListView({
      el: this.$('.list'),
      collection: this.videos,
    });  
    
    this.firstVideo = new Video(window.exampleVideoData[0]);
    this.renderSelectedVideo(this.firstVideo);

    this.listenTo(videoSelected, 'change', this.renderSelectedVideo);
   
  },

  

  renderSelectedVideo: function(videoSelected) {
    console.log('called');
    new VideoPlayerView({
      el: this.$('.player'),
      model: this.firstVideo,
    });

  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
