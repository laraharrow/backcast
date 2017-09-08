var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.empty();
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.video-list').empty();
    this.collection.forEach(function(video) {
      var video = new VideoListEntryView({model: video});
      this.$('.video-list').prepend(video.render());
    }, this);
    
    //.videoListEntry = new VideoListEntryView();
    //this.videoListEntry.render();
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
