new WOW().init();

$(function () {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true
  });
});

$('.label-checkbox').click(function(){
  var s = $(this).find('input[name="accept_rules"]')
  if (s.is(':checked')){
    s.prop('checked', true);
    s.parent().find('.checkbox-img').css('opacity', '100')
  } else {
    s.prop('checked', false);
    s.parent().find('.checkbox-img').css('opacity', '0')
  }
});

$('.popup-modal').click(function () {
  var email_out = $('.form').find('#email_out').val(),
      email = $('.js-form-register').find('input[name="email"]')
  email.text(email_out)
  email.val(email_out)
})