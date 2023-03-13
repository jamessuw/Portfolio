$(".list li a").hover(function () {
  // Changes the .image-holder's img src to the src defined in .list a's data attribute.
  var value = $(this).attr("data-src");
  $(".image-holder img").attr("src", value);
});


//============================== Header Section ================================//
$( document ).ready(function() {

  
    
    var opcionesnav = $('.navoption').length;
    var clickhamb=0;

    $("#hamburger").click(function(){
        clickhamb = 1;
        var header = $("#myTopnav");
        if (header[0].classList.length == 1) {
            header.addClass ("responsive");
            $("header").height((opcionesnav+1)*48);
            $(".navlist a:not(.icon)").css("display", "block");
           
            setTimeout(
                function()
                {
                    $(".navlist a:not(.icon)").css("transform", "translateX(0px)");
                }, 50);

        } else {
            $(".navlist a:not(.icon)").css("transform", "translateX(600px)");
            header.height(48);
            setTimeout(
                function()
                {
                    header.removeClass("responsive");
                    header.height(48);
                    $(".navlist a:not(.icon)").css("display", "none");
                }, 1600);
        }
    });


    $(window).on('resize', function(){
      
        console.log(clickhamb);
        if (($(window).width() > 600) && (clickhamb==1)){
            console.log(clickhamb + "     " + $(window).width());
            $("#myTopnav").height(48);
            $(".navlist a:not(.icon)").css("display", "block");
            setTimeout(
                function()
                {
                    $(".navlist a:not(.icon)").css("transform", "translateX(0px)");
                }, 500);
        }
    });

});

//=============================== Header Section =============================//


function bgChanger() {
    if (this.scrollY > this.innerHeight / 2) {
      document.body.classList.add("bg-active");
    }          else {
      document.body.classList.remove("bg-active");
    }
  }
 
  //============================ SQUARE ===================================///
  (function($){ 

    // get collections
    var $c = $('.list-container');
    var $lis = $('.left-side-list li', $c);
    var $imgs = $('.right-side-img img', $c);
    
    $('.left-side-list li').hover(
      function() {
        var index = $lis.index(this);
        $imgs.removeClass('active');
        $imgs.eq(index).addClass('active');
      },
      function() {
        $imgs.removeClass('active');
        $imgs.eq(0).addClass('active');
      }
    );
    
    })(jQuery); 

    //=====================================================================//
    const simpleParallax = require('simple-parallax-js');

    var image = document.getElementsByClassName('thumbnail2');
    new simpleParallax(image, {
      overflow: true
    });


//=====================================================================//



let typed = new Typed(".typing", {
strings: ["FRONT-END"],
typeSpeed: 100,
backSpeed: 60,
loop: true,
});
document.querySelectorAll(".mobile-menu li a").forEach(function(elem) {
  elem.addEventListener('click', function(ev) {
    document.getElementById("check").checked = false;
  });

});

//====================================================================//

//=============================Custom cursor========================//
splt({
  reveal: true
});

anime({
  targets: '.reveal',
  translateY: [0, 20],
  direction: 'alternate',
  loop: 1,
  delay: anime.stagger(25),
  easing: 'cubicBezier(.71,-0.77,.43,1.67)'
});


gsap.registerPlugin(SplitText);

var tl = gsap.timeline(),
  mySplitText = new SplitText("#quote", {
    type: "lines, words",
    linesClass: "line"
  }),
  words = mySplitText.words; //an array of all the divs that wrap each character

tl.from(words, {
  duration: 8,
  opacity: 0,
  yPercent: 120,
  ease: "power",
  stagger: 0.02
});

document.getElementById("animate").onclick = function () {
  tl.restart();
};