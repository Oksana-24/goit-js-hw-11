import axios from 'axios';
import apiInstance from './api';
import createMarkup from './markupService';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const searchForm = document.querySelector('.search-form');
const input = document.querySelector('input');
const gallery = document.querySelector('.gallery');
const guard = document.querySelector('.js-guard');


//  опції для scroll
const options = {
    root: null,
    rootMargin: '300px',
    threshold: 1.0
}
// іншціалізуємо об'єкт класу для scroll
const observer = new IntersectionObserver(inInfinityLoad, options);

let page = 1;
// кількість картинок які знайдемо, на початок - 0
let searchItems = 0;
searchForm.addEventListener('submit', onSearch);
function onSearch(event) {
    event.preventDefault();

    gallery.innerHTML = '';

    const name = input.value.trim();
    console.log(name);

    if (name !== '') {
        getPicture(name);
        // input.value = '';
    }

    else {
        return Notify.failure('Sorry, but you have not entered anything. Please enter image name!',{timeout:2500})
    }

}

async function getPicture(name, page = 1) {
// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.
// safesearch - фільтр за віком. Постав значення true.
    const baseUrl = 'https://pixabay.com/api/';
    const options = {
        params: {
            key: "33026063-434c5867dd29ef24b5f44b254",
            q: name,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page: page,
            per_page: 30
        },
        
    };

    try {
        const response = await axios.get(baseUrl,options);

        console.log(response.data);
        console.log(response.data.hits);
        // searchItems += response.data.hits.length;

        if (!response.data.hits.length) {
            return Notify.failure('Sorry, there are no images matching your search query. Please try again.', { timeout: 2500 });
        }else if (response.data.hits.length >= searchItems) {
            Notify.success(`Hooray! We found ${response.data.total} images.`, { timeout: 1500 });
        }

        gallery.insertAdjacentHTML('beforeend', createMarkup(response.data.hits))
        observer.observe(guard);


    } catch (error) {
        console.log(error)
    }
}

function inInfinityLoad(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            page += 1;
            const maxPages = Math.round(
                resp.data.totalHits / resp.data.hits.length);
            
            getPicture(page).then(response => {
                createMarkup(response.data.hits);
                if (page === maxPages) {
                    observer.unobserver(guard);
                    Notify.info("We're sorry, but you've reached the end of search results.", { timeout: 1500 })
                }
            })
        }
    });
    
}



