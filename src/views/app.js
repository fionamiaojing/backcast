var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos,
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos,
    });

    new SearchView({
      el: this.$('.navbar'),
      collection: this.videos,
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
