(function(){

    let cities = [
        'Анапа',
        'Артём',
        'Астрахань',
        'Бакал',
        'Белгород',
        'Брянск',
        'Великий Новгород',
        'Владивосток',
        'Волгоград',
        'Горно-Алтайск',
        'Гурьевск',
        'Гусев',
        'Дальнереченск',
        'Данилов',
        'Дзержинск',
        'Екатеринбург',
        'Елизово',
        'Ершов',
        'Железноводск',
        'Жигулёвск',
        'Жиздра',
        'Заволжье',
        'Заозёрск',
        'Заречный',
        'Иваново',
        'Ижевск',
        'Иркутск',
        'Йошкар-Ола',
        'Казань',
        'Калининград',
        'Калуга',
        'Липецк',
        'Липки',
        'Лукоянов',
        'Магадан',
        'Магас',
        'Майкоп',
        'Находка',
        'Нижневартовск',
        'Нижний Новгород',
        'Озёрск',
        'Омск',
        'Орёл',
        'Пенза',
        'Первоуральск',
        'Пермь',
        'Ростов-на-Дону',
        'Ростов',
        'Рязань',
        'Санкт-Петербург',
        'Саратов',
        'Светлогорск',
        'Тамбов',
        'Тверь',
        'Томск',
        'Ульяновск',
        'Урай',
        'Уфа',
        'Фролово',
        'Фрязино',
        'Фурманов',
        'Хабаровск',
        'Хадыженск',
        'Ханты-Мансийск',
        'Цивильск',
        'Цимлянск',
        'Чадан',
        'Чапаевск',
        'Чебоксары',
        'Шадринск',
        'Шали',
        'Шарыпово',
        'Электрогорск',
        'Электросталь',
        'Электроугли',
        'Югорск',
        'Южно-Сахалинск',
        'Южноуральск',
        'Якутск',
        'Ярославль',
        'Ясный'
    ];

    let computerSelectedCities = [];
    let userSelectedCities = [];
    let robotSelectedCities = [];

    let cityList = document.getElementById('js-cities');
    
    updateCities();

    let form = document.getElementById('js-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let input = event.target['js-city'];
        
        if( cities.includes(input.value) ) {
            userSelectedCities.push(input.value);
            cities.splice(cities.indexOf(input.value), 1);
            alert('Супер!');
            robotInsert();
        } else {
            alert('Город не найден');
        }

        updateCities();
        console.log(userSelectedCities);
        console.log(robotSelectedCities);
        input.value = '';
    });

    function robotInsert() {
        let lastWord = userSelectedCities[userSelectedCities.length - 1];
        let symbol = lastWord.slice(-1).toLowerCase();

        let newCity = cities.find((item) => {
            if( item.toLowerCase().startsWith(symbol) ) {
                cities.splice(cities.indexOf(item), 1);
                robotSelectedCities.push(item);
                return item;
            }
        });

        if(!newCity) alert('Computer looser!');
    }
    
    function updateCities() {
        cityList.innerHTML = '';
        cities.forEach((item) => {
            let node = document.createElement('option');
            node.value = item;
            cityList.appendChild(node);
        });
    }
    
})();