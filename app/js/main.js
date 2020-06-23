$(document).ready(function(){

    new WOW().init();

$(function(){
    let header = $(".header"),
        introH = $("#start-screen").innerHeight(),
        scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){
    if(scrollOffset >= introH){
        header.addClass("fixed");
    } else {
        header.removeClass("fixed")
    }
    };



    var time = 2, cc = 1;
$(window).scroll(function(){
  $('#wrapp-advantages').each(function(){
    var
    cPos = $(this).offset().top,
    topWindow = $(window).scrollTop();
    if(cPos < topWindow + 200){
      $(".number").addClass("viz");
      if(cc < 2){
             $('div').each(function(){
      var 
      i = 1,
      num = $(this).data('num'),
      step = 1000 * time / num,
      that = $(this),
      int = setInterval(function(){
        if (i <= num) {
          that.html(i);
        }
        else {
          cc = cc + 2
          clearInterval(int);
        }
        i++;
      },step);
    });
      }
  
    }
  });
});
}),




  $(".header__menu-list,.decor-mouse").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
       
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 500);
  });

  

  $(function() {
    $.fn.scrollToTop = function() {
     $(this).hide().removeAttr("href");
     if ($(window).scrollTop() >= "720") $(this).fadeIn("slow")
     var scrollDiv = $(this);
     $(window).scroll(function() {
      if ($(window).scrollTop() <= "720") $(scrollDiv).fadeOut("slow")
      else $(scrollDiv).fadeIn("slow")
     });
     $(this).click(function() {
      $("html, body").animate({scrollTop: 0}, "slow")
     })
    }
   });
   
   $(function() {
    $("#go-top").scrollToTop();
   });


//    let tab = function () {
//     let tabNav = document.querySelectorAll('.tabs__item'),
//         tabContent = document.querySelectorAll('.tab__content'),
//         tabName;

//     tabNav.forEach(item => {
//         item.addEventListener('click', selectTabNav)
//     });

//     function selectTabNav() {
//         tabNav.forEach(item => {
//             item.classList.remove('tabs__item-active');
//         });
//         this.classList.add('tabs__item-active');
//         tabName = this.getAttribute('data-tab-name');
//         selectTabContent(tabName);
//     }

//     function selectTabContent(tabName) {
//         tabContent.forEach(item => {
//             item.classList.contains(tabName) ? item.classList.add('tab-active') : item.classList.remove('tab-active');
//         })
//     }

// };



// tab();

   var $div=$('#about-us'),//Блок, доскроллив до которого анимация должна стартовать.
       inited=false;
    
   $(window).scroll(function(){
       if(inited) return;
        
       var $t=$(this),
           s_top=$t.scrollTop();
        
       if(s_top+$t.height()+2000<$div.offset().top)
           return;
        
      
        
       inited=true

   });



   /* Фильтры */
//    $(function(){
//        let filter = $("[data-filter]");

//        filter.on("click", function(event){
//            event.preventDefault();

//            let cat = $(this).data("filter");

//            if(cat == "all"){
//                $("[data-picture]").removeClass("hide");
//            }else{
//                $("[data-picture]").each(function(){
//                    let workCat = $(this).data("picture");
//                    if(workCat != cat){
//                        $(this).addClass("hide");
//                    }else{
//                     $(this).removeClass("hide");
//                    }
//                })
//            }
//        })
//    })



   $('.tabs__list-li').click(function() {  
    $(this).siblings().removeClass('tabs__list-li--active');
    $(this).addClass('tabs__list-li--active');
});

// 
  















$(function() {
	var tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('#tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
	});
});

});
