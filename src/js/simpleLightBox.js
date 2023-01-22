function showGallary() {
    const gallery = document.querySelector('.gallery');

    gallery.addEventListener('click', onClickGallery);

    function onClickGallery(event) {
        event.preventDefault();

        new SimpleLightbox('.gallery a', { 
        enableKeyboard: true,
        showCounter: false,
        captionsData: 'alt',
        captionDelay: 250
    });
    }
}
export {
    showGallary
 }