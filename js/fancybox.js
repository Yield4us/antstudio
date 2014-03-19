
  jQuery(document).ready(function() {
    jQuery("a").fancybox();
  });
</script>

<script>
(function ($) {
var hwSlideSpeed = 700;
var hwTimeOut = 3000;
var hwNeedLinks = true;

$(document).ready(function(e) {
  $('.slide').css(
    {"position" : "absolute",
     "top":'0', "left": '0'}).hide().eq(0).show();
  var slideNum = 0;
  var slideTime;
  slideCount = $("#slider .slide").size();
  var animSlide = function(arrow){
    clearTimeout(slideTime);
    $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
    if(arrow == "next"){
      if(slideNum == (slideCount-1)){slideNum=0;}
      else{slideNum++}
      }
    else if(arrow == "prew")
    {
      if(slideNum == 0){slideNum=slideCount-1;}
      else{slideNum-=1}
    }
    else{
      slideNum = arrow;
      }
    $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
    $(".control-slide.active").removeClass("active");
    $('.control-slide').eq(slideNum).addClass('active');
    }
if(hwNeedLinks){
var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
  .prependTo('#slider');    
  $('#nextbutton').click(function(){
    animSlide("next");
    return false;
    })
  $('#prewbutton').click(function(){
    animSlide("prew");
    return false;
    })
}
  var $adderSpan = '';
  $('.slide').each(function(index) {
      $adderSpan += '<span class = "control-slide">' + index + '</span>';
    });
  $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
  $(".control-slide:first").addClass("active");
  $('.control-slide').click(function(){
  var goToNum = parseFloat($(this).text());
  animSlide(goToNum);
  });
  var pause = false;
  var rotator = function(){
      if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
      }
  $('#slider-wrap').hover(  
    function(){clearTimeout(slideTime); pause = true;},
    function(){pause = false; rotator();
    });
  rotator();
});
})(jQuery);

</script>
<script type="text/javascript">
    $(document).ready(function() {
      /*
      *   Examples - images
      */

      $("a#example1").fancybox();

      $("a#example2").fancybox({
        'overlayShow' : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic'
      });

      $("a#example3").fancybox({
        'transitionIn'  : 'none',
        'transitionOut' : 'none'  
      });

      $("a#example4").fancybox({
        'opacity'   : true,
        'overlayShow' : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'none'
      });

      $("a#example5").fancybox();

      $("a#example6").fancybox({
        'titlePosition'   : 'outside',
        'overlayColor'    : '#000',
        'overlayOpacity'  : 0.9
      });

      $("a#example7").fancybox({
        'titlePosition' : 'inside'
      });

      $("a#example8").fancybox({
        'titlePosition' : 'over'
      });

      $("a[rel=example_group]").fancybox({
        'transitionIn'    : 'none',
        'transitionOut'   : 'none',
        'titlePosition'   : 'over',
        'titleFormat'   : function(title, currentArray, currentIndex, currentOpts) {
          return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
      });

      /*
      *   Examples - various
      */

      $("#various1").fancybox({
        'titlePosition'   : 'inside',
        'transitionIn'    : 'none',
        'transitionOut'   : 'none'
      });

      $("#various2").fancybox();

      $("#various3").fancybox({
        'width'       : '75%',
        'height'      : '75%',
        'autoScale'     : false,
        'transitionIn'    : 'none',
        'transitionOut'   : 'none',
        'type'        : 'iframe'
      });

      $("#various4").fancybox({
        'padding'     : 0,
        'autoScale'     : false,
        'transitionIn'    : 'none',
        'transitionOut'   : 'none'
      });
    });
