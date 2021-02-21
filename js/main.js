$(document).ready(function () {
    var hotelSlider = new Swiper('.hotel-slider', {
      // Optional parameters
      loop: true,
  
      // Navigation arrows
      navigation: {
        nextEl: '.hotel-slider__button--next',
        prevEl: '.hotel-slider__button--prev',
      },
       // Перелистывать слайдер с помощью клавиатуры
       keyboard: {
        enabled: true,
    },  
      // Effect
      effect: 'slide',
  });
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    // Перелистывать слайдер с помощью клавиатуры
    keyboard: {
      enabled: true,
    }   
  
  });
  
  var menuButton = $('.menu-button');
  menuButton.on('click', function(){
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  });
  
  
  
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  
  function openModal () {
      var targetModal = $(this).attr('data-href');
      $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
      $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
  }
  
  function closeModal (event) {
      event.preventDefault()
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
  }
  
  // Закрытие модального окна при нажатии ESC
  $(document).keyup(function(e) { 
     if (e.keyCode == 27) {
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
     }   
  })
  
  //Обработка форм
  $('.form').each(function(){
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please enter a name",
          minlength: 'Name must be at least 2 letters long',
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: 'Phone is required',
        },
      },
    });
  });
  //номер телефона формате: +7 (999) 999-99-99, где 9 это любая цифра.
  $('.tel').mask('+7(000) 000-00-00');
  AOS.init();
  });