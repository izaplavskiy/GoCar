'use strict';


$(document).ready(function() {

  // hover on classes_calc

  $('.classes_calc').hover(

    function(){
      $( this).parent().children('.pointer').show("fast");
      
    },
    function(){
      $( this).parent().children('.pointer').hide();
    }

   
  );





// delete class active on Standart++

  $(".view_choise-items").mouseenter(

    function() {
      $(".standart++").removeClass("active");
    }

    );



  


  // view different car variants 

  $(".min").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/минимальный.jpg"),
      $(".icon_img1").css("background", "url(img/icons/пороги.png) no-repeat center"),
      $(".icon_title1").text("пороги внутренние"),

      $(".icon_img2").css("background", "url(img/icons/дверь.png) no-repeat center"),
      $(".icon_title2").text("торцы дверей"),

      $(".icon_img3").css("background", "url(img/icons/бампер-зад.png) no-repeat center"),
      $(".icon_title3").text("полка заднего бампера"),

      $(".icon_img4").css("background", "url(img/icons/зеркало.png) no-repeat center"),
      $(".icon_title4").text("зеркало"),

      $(".icon_img5").css("background", "url(img/icons/фара.png) no-repeat center"),
      $(".icon_title5").text("фара"),

      $(".icon_img6").css("background", "url(img/icons/ручки.png) no-repeat center"),
      $(".icon_title6").text("ручки"),

      $(".icon_img7,.icon_img8").css("background", "none"),
      $(".icon_title7,.icon_title8").text("");
      }
    );

  $(".standart").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/стандарт.jpg"),
      $(".icon_img1").css("background", "url(img/icons/часть-капота.png) no-repeat center"),
      $(".icon_title1").text("часть капота"),
      $(".icon_img2").css("background", "url(img/icons/часть-крыла.png) no-repeat center"),
      $(".icon_title2").text("часть крыльев"),
      $(".icon_img3").css("background", "url(img/icons/бампер-перед.png) no-repeat center"),
      $(".icon_title3").text("передний бампер"),
      $(".icon_img4").css("background", "url(img/icons/зеркало.png) no-repeat center"),
      $(".icon_title4").text("зеркало"),
      $(".icon_img5").css("background", "url(img/icons/фара.png) no-repeat center"),
      $(".icon_title5").text("фара"),
      $(".icon_img6").css("background", "url(img/icons/ручки.png) no-repeat center"),
      $(".icon_title6").text("ручки"),
      $(".icon_img7").css("background", "url(img/icons/птф.png) no-repeat center"),
      $(".icon_title7").text("противотуманки"),
      $(".icon_img8").css("background", "none"),
      $(".icon_title8").text("");
      }
    );

  $(".standart+").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/стандарт+.jpg"),
      $(".icon_img1").css("background", "url(img/icons/капот.png) no-repeat center"),
      $(".icon_title1").text("капот полностью"),
      $(".icon_img2").css("background", "url(img/icons/часть-крыла.png) no-repeat center"),
      $(".icon_title2").text("часть крыльев"),
      $(".icon_img3").css("background", "url(img/icons/бампер-перед.png) no-repeat center"),
      $(".icon_title3").text("передний бампер"),
      $(".icon_img4").css("background", "url(img/icons/зеркало.png) no-repeat center"),
      $(".icon_title4").text("зеркало"),
      $(".icon_img5").css("background", "url(img/icons/фара.png) no-repeat center"),
      $(".icon_title5").text("фара"),
      $(".icon_img6").css("background", "url(img/icons/ручки.png) no-repeat center"),
      $(".icon_title6").text("ручки"),
      $(".icon_img7").css("background", "url(img/icons/птф.png) no-repeat center"),
      $(".icon_title7").text("противотуманки"),
      $(".icon_img8").css("background", "none"),
      $(".icon_title8").text("");
      }
    );

  $(".standart++").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/стандарт++.jpg"),
      $(".icon_img1").css("background", "url(img/icons/капот.png) no-repeat center"),
      $(".icon_title1").text("капот полностью"),
      $(".icon_img2").css("background", "url(img/icons/крыло-полностью.png) no-repeat center"),
      $(".icon_title2").text("крылья полностью"),
      $(".icon_img3").css("background", "url(img/icons/бампер-перед.png) no-repeat center"),
      $(".icon_title3").text("передний бампер"),
      $(".icon_img4").css("background", "url(img/icons/зеркало.png) no-repeat center"),
      $(".icon_title4").text("зеркало"),
      $(".icon_img5").css("background", "url(img/icons/фара.png) no-repeat center"),
      $(".icon_title5").text("фара"),
      $(".icon_img6").css("background", "url(img/icons/ручки.png) no-repeat center"),
      $(".icon_title6").text("ручки"),
      $(".icon_img7").css("background", "url(img/icons/птф.png) no-repeat center"),
      $(".icon_title7").text("противотуманки"),
      $(".icon_img8").css("background", "none"),
      $(".icon_title8").text("");
      }
    );

  $(".standart+++").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/стандарт+++.jpg"),
      $(".icon_img1").css("background", "url(img/icons/капот.png) no-repeat center"),
      $(".icon_title1").text("капот полностью"),
      $(".icon_img2").css("background", "url(img/icons/крыло-полностью.png) no-repeat center"),
      $(".icon_title2").text("крылья полностью"),
      $(".icon_img3").css("background", "url(img/icons/бампер-зад.png) no-repeat center"),
      $(".icon_title3").text("задний бампер"),
      $(".icon_img4").css("background", "url(img/icons/зеркало.png) no-repeat center"),
      $(".icon_title4").text("зеркало"),
      $(".icon_img5").css("background", "url(img/icons/фара.png) no-repeat center"),
      $(".icon_title5").text("фара"),
      $(".icon_img6").css("background", "url(img/icons/ручки.png) no-repeat center"),
      $(".icon_title6").text("ручки"),
      $(".icon_img7").css("background", "url(img/icons/птф.png) no-repeat center"),
      $(".icon_title7").text("противотуманки"),
      $(".icon_img8").css("background", "url(img/icons/бампер-перед.png) no-repeat center"),
      $(".icon_title8").text("передний бампер") 
      }
    );

  $(".all").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/целиком.jpg"),
      $(".icon_img").css("background", "none"),
      $(".icon_title").text("");
      }
    );



  // view parts on click


  $("#parts").click(

    function(){
      $(".parts-items").toggle();  
      });

   


  // // switch dark-bgr part and 

  $("#parts").click(

    function(){
    $(this).toggleClass("selected"),
    $(".icon_img").css("background", "none"),
    $(".icon_title").text("");
  });




  

  // view different car parts


  $(".lights").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/оптика.jpg"),
      $(".icon_img").css("background", "none"),
      $(".icon_title").text("");
      
      }
    );


  $(".threshold-in").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/пороги-внутренние.jpg"),
      $(".icon_img").css("background", "none"),
      $(".icon_title").text("");
      
      }
    );


  $(".threshold-out").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/пороги-наружные.jpg"),
      $(".icon_img").css("background", "none"),
      $(".icon_title").text("");
     
      }
    );


  $(".doors").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/двери.jpg"),
      $(".icon_img").css("background", "none"),
      $(".icon_title").text("");
     
      }
    );


  $(".fenders-rear").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/задние-крылья.jpg"),
      $(".icon_img").css("background", "none"),
      $(".icon_title").text("");
      
      }
    );


  $(".hood").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/капот.jpg"),
      $(".icon_img").css("background", "none"),
      $(".icon_title").text("");      
      }
    );


  $(".front-bumper").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/передний-бампер.jpg"),
      $(".icon_img").css("background", "none"),
      $(".icon_title").text("");
      
      }
    );


  $(".rear-bumper").hover(

    function(){
      $(".view_img").attr("src", "img/мерседес/задний-бампер.jpg"),
      $(".icon_img").css("background", "none"),
      $(".icon_title").text("");
      
      }
    );


	
})
