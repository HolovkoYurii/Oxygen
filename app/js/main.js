$(document).ready(function(){


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

   $(function(){
       let filter = $("[data-filter]");

       filter.on("click", function(event){
           event.preventDefault();

           let cat = $(this).data("filter");

           if(cat == "all"){
               $("[data-picture]").removeClass("hide");
           }else{
               $("[data-picture]").each(function(){
                   let workCat = $(this).data("picture");
                   if(workCat != cat){
                       $(this).addClass("hide");
                   }else{
                    $(this).removeClass("hide");
                   }
               })
           }
       })
   })



   $('.tabs__list-li').click(function() {  
    $(this).siblings().removeClass('tabs__list-li--active');
    $(this).addClass('tabs__list-li--active');
});

// 
  
});
