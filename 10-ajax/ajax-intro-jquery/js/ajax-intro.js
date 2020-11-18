const fetchFact = function () {

    // const xhr = new XMLHttpRequest();
    //
    // xhr.open('GET','http://numberapi.com/random/trivia?json');
    // xhr.send();
    // // console.log('here is response',);
    // // setTimeout(functioin(){
    // //     console.log('here is', xhr.responseText);
    // // },1000);
    const url = 'http://numberapi.com/random/trivia?json';
    $.ajax(url).done(function (data) {
         const $p = $('<p></p>');
         // $p.innerHTML = data.text;    错的。
         $p.html(data.text);
         // document.body.appendChild ( $p );
          $('body').append( $p );
    })

    // xhr.onreadystatechange = function () {
    // // console.log('onreadysatatechange',Math.random());
    // // console.log('onreadysatatechange',xhr.readyState, xhr.responseText());
    // // if (xhr.readyState !=== 4){
    // //     return;
    // // }
    //     if (xhr.readyState !== 4) return;

        // if (xhr.readyState === 4){
            // console.log( xhr.responseText );

            // display the result on the page
            // create a new Promise(function(resolve, reject) {
            // const $p = $('p');

          //  const data = JSON.parse( xhr.responseText );
            // console.log(xhr.responseText, data );

            // p.innerHTML = xhr.responseText;
            // $p.innerHTML = data.text;

            // document.body.appendChild ( p );

     };
$(document).ready(function (){
    $('#fetch').on('click', fetchFact);
    fetchFact();
});
