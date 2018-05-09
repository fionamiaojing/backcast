var Videos = Backbone.Collection.extend({

  model: Video,


  search: function(query) {
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {part: 'snippet',
        q: query,
        maxResults: 5,
        key: 'AIzaSyDxw3HRgrPFjBZXY5-muPEVs6hee1xMCgU',
        type: 'video',
        videoEmbeddable: true,
      },
      success: function (data) {
        window.exampleVideoData = data.items;
        new AppView();
        console.log('search: succeed to receive message');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('search: Failed to receive message');
      }
    });
  },

});
