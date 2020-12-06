$(function(){

    let filter = $("[data-filter]");

    filter.on("click", function(event){
        event.preventDefault();
        
        let cat = $(this).data('filter');

        if(cat == "all"){
            $("[data-cat]").removeClass('hide');
        } else{
            $("[data-cat]").each(function(){

                let workCat = $(this).data('cat');
                
                if(workCat != cat){
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                   
                }
    
            });
        }
        
    });


    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on('click', function(event){
            event.preventDefault();
            let $this = $(this);
            let modalId = $this.data('modal');
            
            $(modalId).addClass('show');
            $("body").addClass('no-scroll');

            setTimeout(function(){
                $(modalId).find(".modal__dialog").css({
                    transform: "rotate(0) scale(1)"
                });
            }, 100); 
            $('#worksSlider').slick('setPosition');   
        });

    modalClose.on('click', function(event){
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');

         modalParent.find(".modal__dialog").css({
                transform: "rotateX(90deg) scale(0)"
            });

        setTimeout(function(){
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 300);  
    });

    $(".modal").on('click', function(event){
        
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $(".modal__dialog").on('click', function(event){
        event.stopPropagation();
    });

  const navToggle = $("#navToggle");
  const nav = $("#nav");

  navToggle.on("click", function(event){
      event.preventDefault();

      nav.toggleClass("brg");
  });
  


});

function slowScroll(id){
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 1000);
}

jQuery('a').on('click', function (e) {
    e.preventDefault();
});

$(function(){

    $( document ).ready(function() {
    
        $('form').submit(function( event ) {
      alert('I check your answer. \nThank you! \n\n\n\nP.S. Агай, 10 баллов плз');
    });
    });
});

(function slider () {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());

$('[data-slider="slick"]').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });

  $(".slickPrev").on("click", function(event){
      event.preventDefault();
      let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
      currentSlider.slick("slickPrev");
  })

  $(".slickNext").on("click", function(event){
    event.preventDefault();
    let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
    currentSlider.slick("slickNext");
})
