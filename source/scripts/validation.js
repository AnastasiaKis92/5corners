import Inputmask from 'inputmask';

//Маска для номера телефона
const initTelVal = () => {
  $('#tel').inputmask({
    mask: '+7 (999)999-99-99',
    showMaskOnHover: false,
    inputmode: 'tel',
    onincomplete: function () {
      const tel = $(this).val();
      if(tel.length > 0) {
        $('.cart__label--tel').html('Ошибка ввода').addClass('invalid');
        $('#tel').addClass('invalid');
      }
    },
    oncomplete: function () {
      $('.cart__label--tel').html('Номер телефона').removeClass('invalid');
      $('#tel').removeClass('invalid');
    }
  });
};

const initEmailVal = () => {
  $('#email').on('blur', function () {
    const email = $(this).val();
    const pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/i;

    if (email.length > 0 && (!pattern.test(email))) {
      $('.cart__label--email').html('Ошибка ввода').addClass('invalid');
      $('#email').addClass('invalid');
    } else {
      $('.cart__label--email').html('Ваш Email').removeClass('invalid');
      $('#email').removeClass('invalid');
    }
  });
};

export {initTelVal, initEmailVal};
