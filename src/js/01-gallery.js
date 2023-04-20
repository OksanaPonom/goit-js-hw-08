// Add imports above this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryOfImages = document.querySelector('.gallery');

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
       <a class="gallery__link" href="${original}" >
      <img class="gallery__image" src="${preview}"  alt="${description}" />
   </a>
</li>`;
    })
    .join('');
}

galleryOfImages.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});