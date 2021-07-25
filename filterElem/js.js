;(function(){
    var catalogSection = document.querySelector('.section-catalog');
    
    if(catalogSection === null) return;
    
    var removeChildren = function(item){
        while(item.firstChild){
            item.removeChild(item.firstChild); //удаляем все эл-ты с каталога
        }
    };
    
    var updateChildren = function(item, children){
        //console.log(children);
        removeChildren(item);
        for(var i = 0; i<children.length; i++){
            item.appendChild(children[i]);//добавляем в каталог эл-ты
        }
    };
    
    var catalog = document.querySelector('.catalog');
    var catalogNav = document.querySelector('.catalog-nav');
    var catalogItems = document.querySelectorAll('.catalog__item');
    
    catalogNav.addEventListener('click', function(e){
        var target = e.target; //попадают все эл-ты в catalogNav, но нам нужны только кнопки
  
        var item = myLib.closestItemByClass (target, 'catalog-nav__btn');// с помощью ф-ции выбираем только кнопки с классом catalog-nav__btn
        
        if(item === null || item.classList.contains('is-active')) {
           return; 
        }
        
        e.preventDefault();   
        var filterValue = item.getAttribute('data-filter');  //зн-е фильтра по кот нужно фильтровать
        var previousBtnActive = document.querySelector('.catalog-nav__btn.is-active'); //выбрали кнопку с активным классом
        
        previousBtnActive.classList.remove('is-active'); //удалили активный класс у пред эл-та
        item.classList.add('is-active'); //добавили активный класс текущему эл-ту
        
        if(filterValue === 'all'){ //если выбрана кнопка Все, то показываем все эл-ты и выходим
            updateChildren(catalog, catalogItems);
            return;
        }
        
        var filteredItems = [];
        //проходимся по всем детям, ищем нужную категорию и добавляем в массив
        for(var i = 0; i<catalogItems.length; i++){
            var strCurrent = catalogItems[i].getAttribute('data-category');
            var arrCurrent = strCurrent.split(',');
            for(var j = 0; j<arrCurrent.length; j++){
                if(arrCurrent[j] == filterValue){
                    filteredItems.push(catalogItems[i]);
                }
            }
        }
        updateChildren(catalog, filteredItems);//передаем массив с отобранными эл-ми для добавления в каталог
        
        
    })
    
})();