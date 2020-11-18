// const links = document.querySelectorAll('li a');
//
// for (let i = 0; i < links.length; i++) {
//   const link = links[i];
//   const href = link.getAttribute('href');
//
//   const thumbnailURL = youtube.generateThumbnailUrl( href );
//   const image = document.createElement('img'); // detached DOM node
//   image.setAttribute('src', thumbnailURL);
//
//   link.appendChild( image );
// }



// const links = document.querySelectorAll('li a');
const $links = $('li a');

for (let i = 0; i < $links.length; i++) {

  const href = $links[i].attr('href');
  console.log(href);

  const thumbnailURL = youtube.generateThumbnailUrl( href );
  const image = $('<img>'); // detached DOM node
  image.css({'src': 'thumbnailURL'});
  console.log(image);

  $('li a').prepend( image );
}
