
import apiInstance from './api';
import createMarkup from './markupService';

import Notiflix from 'notiflix';

const searchForm = document.querySelector('.search-form');
const input = document.querySelector('input');
const gallery = document.querySelector('.gallery');


searchForm.addEventListener('submit', onSearch);
function onSearch(event) {
    event.preventDefault();
    console.log(event)
    gallery.innerHTML = '';

    const name = input.value.trim();
    console.log(name);

    if (name !== '') {
        getPicture(name);
    }

}
async function getPicture(name, pages) {
// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.
// safesearch - фільтр за віком. Постав значення true.
    const options = {
        params:{
        key: "33026063-434c5867dd29ef24b5f44b254",
        q: name,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: pages,
        per_page: 30
        }
        
    }
    const response = await apiInstance.get(baseUrl, options).then(resp=>console.log(resp))
    console.log(response)
}


