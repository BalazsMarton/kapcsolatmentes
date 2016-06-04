Turbolinks.enableProgressBar();



 $(document).on('page:update', function(){
      console.log('page updated');
      if ($('.ckeditor')[0]) {
          CKEDITOR.replace($('.ckeditor').attr('id'));
      }
  });

 jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 3000,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

jQuery(document).ready( function() {
	$(".newest-cover").hover(function() {
    $(this).find('.newest-info').toggleClass('active');
	});
});

jQuery(document).ready( function() {
	
var customizeForDevice = function(){
	var h = window.innerHeight;
    var ua = navigator.userAgent;
    var checker = {
      iphone: ua.match(/(iPhone|iPod|iPad)/),
      blackberry: ua.match(/BlackBerry/),
      android: ua.match(/Android/)
    };
    if (checker.android){
        $('.zoomground-wrap').css('height',h);
    }
    else if (checker.iphone){
        $('.zoomground-wrap').css('height',h);
    }
    else if (checker.blackberry){
        $('.zoomground-wrap').css('height',h);
    }
    else {
        $('.zoomground-wrap').css('height',h);
    }
}
});