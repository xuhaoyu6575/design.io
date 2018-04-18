//图片显示模块
$(function() {

    var scrollTop = 0;

	$('.card-box01').click(function(){

		scrollTop = $(window).scrollTop(); 
		var bodyH=$('.clearfix').height()//4783
		var contImgH=$(this).find('.contentImg01').height()
        $(this).find('.contentImg01').show(); 
		if(contImgH<bodyH){
			$(window).scrollTop(0);
			$('.shadowa').show();  
			}
			else{
			$(window).scrollTop(0);
			$('.shadowa').show();  
			$('.shadowa').height($(this).find('.contentImg01').height()+150+'px')
				}
		})
	$('.contentImg01').click(function(event){

       event.stopPropagation();
       $(window).scrollTop(scrollTop);
        $('.contentImg01').hide();
        $('.shadowa').hide();
		})
});


//导航平滑滚动
$(function(){  
  $('a[href*=#],area[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset-60+'px'
        },
        1000);
        return false;
      }
    }
  });
})

//导航滚动对应模块变亮
/*	
console.log($('#d1').offset().top);
console.log($('#d2').offset().top);
console.log($('#d3').offset().top);
console.log($('#d4').offset().top);
console.log($('#d5').offset().top);
console.log($('#d6').offset().top);
#d1 44
#d2 660
#d3 1664
#d4 2668
#d5 3232
#d6 3796
*/
$( window ).scroll(function() {

	if($('.shadowa').css("display") == 'none'){
		 //console.log("滚动的高度："+$(document).scrollTop())
		  if($(this).scrollTop() <600&&$(this).scrollTop() >=0) {
		    $(".personLeft ul li").removeClass("nav_list")
		    $(".personLeft ul li.li1").addClass("nav_list")
		  } else if($(this).scrollTop() <1604&&$(this).scrollTop() >=600) {
		    $(".personLeft ul li").removeClass("nav_list")
		    $(".personLeft ul li.li2").addClass("nav_list")
		  } else if($(this).scrollTop() <2168&&$(this).scrollTop() >=1604) {
		    $(".personLeft ul li").removeClass("nav_list")
		    $(".personLeft ul li.li3").addClass("nav_list")
		  } else if($(this).scrollTop() <2732&&$(this).scrollTop() >=2168) {
		    $(".personLeft ul li").removeClass("nav_list")
		    $(".personLeft ul li.li4").addClass("nav_list")
		  } else if($(this).scrollTop() <3296&&$(this).scrollTop() >=2732) {
		    $(".personLeft ul li").removeClass("nav_list")
		    $(".personLeft ul li.li5").addClass("nav_list")
		  } else if($(this).scrollTop() >=3296) {
		    $(".personLeft ul li").removeClass("nav_list")
		    $(".personLeft ul li.li6").addClass("nav_list")
		  }else{
		    $(".personLeft ul >li").removeClass("nav_list")
		  }
	}
 

}); 


