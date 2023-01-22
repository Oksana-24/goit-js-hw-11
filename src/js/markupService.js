import showGallary from './simpleLightBox'
export default function createMarkup(arrImages) {
    // console.log(arrImages)
//webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.
    return markup =  arrImages.map((
        { webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads }) =>
        `
    <a class="photo-link" href="${largeImageURL}">
        <div class="photo-card">
        <img  src="${webformatURL}" alt="${tags}" loading="lazy" width="200"/>
    <div class="info">
        <p class="info-item">
        <b>Likes:</b><span class="info-item-details">${likes}</span>
        </p>
        <p class="info-item">
        <b>Views</b><span class="info-item-details">${views}</span>
        </p>
        <p class="info-item">
        <b>Comments</b><span class="info-item-details">${comments}</span>
        </p>
        <p class="info-item">
        <b>Downloads</b><span class="info-item-details">${downloads}</span>
        </p>
    </div>
    </div>
</a>`).join('');
    showGallary.refresh();
}

// export {
//     createMarkup
// }