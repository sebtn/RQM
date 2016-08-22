$(document).ready(function() {
                  
  $('#change-quote').on('click', function() {
    $.ajax({ 
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); 
        var someObj = {
          title: post.content,
          autor: post.title,
        }
        $('#text-quote').html(post.content);
        $('#autor').html(post.title);
        // Changes the attr 'href' to 'url + string'
        $('#tweet').attr('href', 'http://twitter.com/intent/tweet?text=' + $('#text-quote').text() + $('#autor').text());
      },
      cache:false    
    })
  }); 
  
});
