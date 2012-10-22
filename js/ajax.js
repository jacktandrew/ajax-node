$(function(){
  var loadingPage = null;
  
  $('nav a').click(function(e) {
    e.preventDefault();
    $('nav a').removeClass('active');
    $(this).addClass('active');
    var page = $(this).data('page');
    $('.content').hide();
    if (loadingPage){
      loadingPage.abort();
    }
    loadingPage = $.ajax({
      url: '/pages/' + page + '.html',
      cache: false,
      timeout: 8000,
      beforeSend: function(){
        $('.error').hide();
        $('.loading').show();
      },
      complete: function(){
        $('.loading').hide();        
      },
      success: function(data){
        $('.content').html(data).show();
      },
      error: function(){
        if (result.statusText != 'abort'){
          $('.error').show();          
        }
      }
    });
  });
  
  $('.error a').click(function(e){
    e.preventDefault();
    loadPage($('nav a.active').data('page'))
  });
});