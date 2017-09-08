var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.data = window.exampleVideoData;
    this.videos = new Videos(this.data);
    this.render();
    this.view = new VideoPlayerView({el: $('.player'), collection: this.videos});
    this.view.render();
    this.list = new VideoListView({el: $('.list'), collection: this.videos});
    this.list.render();
  
    
    
    
    console.log('this.list: ', this.list);
    if (!this.videos) {
      throw new Error('must have videos model');
    }
    
    /*this.list.forEach(video => {
      this[video.id.videoId] = new Video(video);
    }); 
    */
    this.listenTo(this.videos, 'change', this.render);
    //testing
    //console.log('testing');
  },

  render: function() {
    //console.log('this el', this.el);
    //console.log('this $el', this.$el);
    this.$el.html(this.template());
    return this;
  },
  /*render: function() {
    console.log('inside render');
    //this.$el.html(this.template(this).preppend(this.videos.render));
    return this.$el;
  },
  */

  template: templateURL('src/templates/app.html'),

});

// $(function() {
//   window.videos = new AppView();
// });
