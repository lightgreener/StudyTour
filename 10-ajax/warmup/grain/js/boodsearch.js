const fetchCover = function (event){
    event.preventDefault();   // dont leave this page

    // console.log('fetching cover');
    // get the title
    const title = $('#title').val();
    // console.log(title);
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`;

    // $.ajax(url).done(function (data) {
    //     console.log('data', data);
    // }).done (function (data) {
    //     console.warn(data);
    // }).fail(function (){
    //     console.error('there is error');
    // })

    $.ajax(url).done(function (data) {
        const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
        $('#cover').attr('src', cover)
    });
    // });



    // $.ajax(url, {
    //     success: function (data) {
    //         console.log('success',data);
    //     }
    //
    // });


    // // fetch the book via AJAX
    // const xhr = new XMLHttpRequest();
    // const url = 'https://www.googleapis.com/books/v1/volumes?q=title:${ title }';
    // xhr.open('GET', url);     // step 1
    // xhr.send();   //async   step 2    (3, 4)
    //
    // // console.log(xhr.responseText);
    //
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState !== 4) return;   // not ready yet
    //     // console.log(xhr.responseText);
    //     // convert the response to a js object
    //     const data = JSON.parse(xhr.responseText );
    //     // console.log( data.items );
    //     const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    //     document.getElenmentById('cover').setAttribute('src',cover);
        // document.getElenmentById('cover').src = cover;

        // extract the book convert
    // };
    // display the cover

};


$(document).ready(function () {
    // const form = document.getElenmentById('searh-form');
    // form.addEventListener('submit',fetchCover);
    const $form = $('#search-form');
    $form.on('submit',fetchCover);

});
// find the button
// const button = document.getElenmentById('searh');
// const form = document.getElenmentById('searh-form');

// attach fetchCover to the button on click
// button.addEventListener('click',fetchCover);
// form.addEventListener('submit',fetchCover);
