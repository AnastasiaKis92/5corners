const initSelect = () => {
  $('.cart__select').each(function() {
    $('.cart__select option[value=""]').remove();
    const $this = $(this),
      selectOption = $this.find('option'),
      selectOptionLength = selectOption.length,
      dur = 150;
    $this.hide();
    $this.wrap('<div class="select"></div>');
    $('<div>', {
      class: 'select__gap',
      text: 'Тип упаковки'
    }).insertAfter($this);

    const selectGap = $this.next('.select__gap');
    $('<ul>', {
      class: 'select__list'
    }).insertAfter(selectGap);

    const selectList = selectGap.next('.select__list');
    // Add li - option items
    for (let i = 0; i < selectOptionLength; i++) {
      $('<li>', {
        class: 'select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }
    const selectItem = selectList.find('li');

    selectList.slideUp(0);
    selectGap.on('click', function() {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on');
        selectList.slideDown(dur);

        selectItem.on('click', function() {
          const chooseItem = $(this).data('value');

          $('select').val(chooseItem).attr('selected', 'selected');
          selectGap.text($(this).find('span').text());
          selectGap.css('color', 'black');
          selectList.slideUp(dur);
          selectGap.removeClass('on');
        });

      } else {
        $(this).removeClass('on');
        selectList.slideUp(dur);
      }
    });
  });
};

export {initSelect};
