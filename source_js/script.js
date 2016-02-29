// Write any custom javascript functions here
$(window).load(function(){
    setTimeout(function(){
        $("#dvLoading").fadeOut(5000);
    }, 5000);
});

$(document).ready(function(){
    
    dragQuestionMark();
    eyebrowAnimate();
    iconAnimation();
    modal();
    typingEffect();
    customizeScroll();
    navbar();
    $("#last #modal #owl-example").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });
    
    horizNav();
    //navscrollfunc();
});

var navbar = function(){
    $("nav div").css("height", "60px");
    $("nav div ul").css("padding-top", "10px");
    var changed = 0;
    $(window).scroll(function() {
        if($(window).scrollTop() < $(window).height()) {
            $("nav div").css("height", "60px");
            $("nav div ul").css("padding-top", "10px");
            //$("nav").css("background-color", "transparent");
            //$("nav").css("color", "#323031");
            changed = 0;
        }else {
            $("nav div").css("height", "30px");
            $("nav div ul").css("padding-top", "0px");
            //$("nav").css("background-color", "#323031");
            //$("nav").css("color", "white");
            if(!changed){
                $("nav").css("opacity", "0");
                $("nav").animate({
                    opacity: "1"
                }, 1000);
                changed = 1;
            }
        }
   });
}


var horizNav = function(){
        
        //$(".nav").data('clicked', false);
        start = [0, $(window).height(), $(window).height()*2, $(window).height()*3, $(window).height()*4];
        $("nav div ul li").each(function(index){
           $(this).data('scroll_h', start[index]);    
        });

        $("nav div ul li").on("click",function(){
            //jumped = 1;
            $("nav div ul li").css("color", "white");
            $(this).css("color","grey");
            scroll_h = $(this).data('scroll_h');
            
            //$(window).scrollTop(scroll_h);
            
            $('html, body').animate({
                scrollTop: scroll_h
            }, 1000); //function(){
                //setTimeout(function(){
                    //jumped = 0;
                    //console.log("can jump");
                //}, 1000);
           // });
            
        });
    
}

var navscrollfunc = function(){
    //max = docHeight - winHeight;
    
    $(document).on('scroll', function(){
        value = $(window).scrollTop();
        
        if(jumped == 0){
            //console.log("here");
            height = [0, $(window).height(), $(window).height()*2, $(window).height()*3];
            $("nav div ul li").each(function(index){
                scroll_h = height[index];  
                console.log(scroll_h);
                if(value == scroll_h){
                    
                   $("nav div ul li").css("color", "white");
                   $(this).css("color","grey");
                    return false;
                }
            });
        }
        
    });
        
        
}



var dragQuestionMark = function(){
    $("#main #text").draggable({
        stop: function(){
            // When dragging stops, revert the draggable to its
            // original starting position.
            var $this = $(this);
            $this.stop().animate({
                top: 0,
                left: 0
            },1000,'easeOutBounce');
        }
    });
    
}

var eyebrowAnimate = function(){
    
    $("#main #eyebrow")
        .mouseenter(function(){
            
            $("#main .row #eyebrow").animate({
                    top: "-255px"
                }, 500);
        })
        .mouseleave(function() {
            $("#main .row #eyebrow").animate({
                top: "-240px"
            }, 500);
            
        });
    /*$("#main #questionMark")
        .mouseenter(function() {
            
            $("#main #questionMark").css("backgroundColor", "$orange");
        })
        .mouseleave(function() {
            $("#main #eyebrow").animate({
                top: "-300px"
            }, 500);
            $("#main #questionMark").css("color", "$darkgrey");
        });*/
}

var iconAnimation = function(){
      // get effect type from
      options = {};
        var notchanged;
        if(window.outerWidth <= 1024){
            notchanged = 1;
        }else{
            notchanged = 0
        }
       $(window).resize(function(){
           if(window.outerWidth >= 1025 &&  notchanged){

             
               //$(".icon").effect( "slide", options, 1000);
               notchanged = 0;
           }
           if(window.outerWidth <= 1024)
                notchanged = 1;
       });
      // run the effect
      //$( ".smalliconImg" ).show( "bounce", options, 500);
 /*setTimeout(function() {
        
        $( ".smalliconImg:visible" ).removeAttr( "style" ).fadeIn();
      }, 1000 , function(){
            $( ".smalliconImg" ).show( "bounce", options, 500);
        });
    //callback function to bring a hidden box back
    /*function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };*/  
}

var modal = function(){
    //var modal = $("#gallery #toplist #modal");
   // console.log(modal);
    //var btn = $("#gallery #toplist #button");
    //console.log(btn.html());
    //var close = $("#gallery #toplist #modal #close");
    $("#last #button").on("click", function(){
        //console.log("get here");
        //$("#topList ").css("background-color", "red");
        $("#last #modal").css("display", "block"); 
    });
    $("#last #modal #close").on("click", function(){
        $("#last #modal").css("display", "none"); 
    });
   
    if(window.outerWidth <= 640){
        $("#last #modal #carousel").css("display", "block");
    }else{
        $("#last #modal #carousel").css("display", "none");
    }
    $(window).resize(function(){
       if(window.outerWidth >= 641){
            $("#last #modal #carousel").css("display", "none");
       }
       if(window.outerWidth <= 640)
            $("#last #modal #carousel").css("display", "block");
    });
    
}

var typingEffect = function(){
    var inhere = 0;
   $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            console.log("get here");
            $("#last #btw").addClass('typed');
            inhere  = 1;
        }else if(inhere === 1){
            $("#last #btw").removeClass('typed');
            inhere = 0;
        }
   });
    
}

var scroller = function(scroll_h, num){
    options = {};
    
    $('html, body').animate({
                scrollTop: scroll_h
            }, 800);
}

var customizeScroll = function(){
    
    $(window).scroll(function() {
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            var curr = $(window).scrollTop();
            console.log(curr);
            $("nav div ul li").css("color", "white");
            if(curr< 1*$(window).height()){
                scroller(0, 0);
                $("nav div ul li:nth-child(1)").css("color", "grey");
            }else if(curr>=1*$(window).height() && curr < 2*$(window).height()){
                scroller($(window).height(), 1);
                $("nav div ul li:nth-child(2)").css("color", "grey");
            }else if(curr >=2*$(window).height() && curr < 3*$(window).height()){
                scroller(2*$(window).height(), 2);
                $("nav div ul li:nth-child(3)").css("color", "grey");
            }else if(curr >= 3*$(window).height() && curr < 4*$(window).height()){
                scroller(3*$(window).height(), 3);
                $("nav div ul li:nth-child(4)").css("color", "grey");
            } else if(curr >= 4*$(window).height() && curr < 5*$(window).height()){
                scroller(4*$(window).height(),0);
                $("nav div ul li:nth-child(5)").css("color", "grey");
            }
        }, 2000));
    });
    
     $("#main #questionMark ul li").each(function(index){
           
           $(this).data('scroll_h', $(window).height()*parseInt(index+1));
         
        });
        
        
         $("#main #questionMark ul li").on("click", function(){
                $('html, body').animate({
                    scrollTop: $(this).data('scroll_h')
                }, 400);
            });
}

$.stellar({
  verticalOffset: "-100",
  scrollProperty: "position"
});
