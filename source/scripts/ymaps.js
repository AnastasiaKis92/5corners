const initMap = () => {
  ymaps.ready(init);
};

function init() {
  // Подключаем поисковые подсказки к полю ввода.
  const suggestView = new ymaps.SuggestView('address');

  const myMap = new ymaps.Map('map', {
    center: [55.75605914204847, 37.621106629579145],
    zoom: 9,
    controls: []
  });

  const searchControl = new ymaps.control.SearchControl({
    options: {
      provider: 'yandex#search',
      position: {
        top: -40 // убираем поисковую панель за край карты
      }
    }
  });

  myMap.controls.add(searchControl);

  suggestView.events.add('select', () => { // поиск по выбору саджеста
    Search();
  });

  $('#address').keyup((event)=> { // поиск по Enter
    if(event.keyCode === 13){
      Search();
    }
  });

  function Search () { // Непосредственно поиск в панели
    const request = $('#address').val();
    searchControl.search(request);
  }
}

export {initMap};
