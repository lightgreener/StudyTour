const fetchFact = function () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET','http://numberapi.com/random/trivia?json');
    xhr.send();
    // console.log('here is response',);
    // setTimeout(functioin(){
    //     console.log('here is', xhr.responseText);
    // },1000);

    xhr.onreadystatechange = function () {
    // console.log('onreadysatatechange',Math.random());
    // console.log('onreadysatatechange',xhr.readyState, xhr.responseText());
    // if (xhr.readyState !=== 4){
    //     return;
    // }
        if (xhr.readyState !== 4) return;

        // if (xhr.readyState === 4){
            // console.log( xhr.responseText );

            // display the result on the page
            // create a new Promise(function(resolve, reject) {
            const p = document.createElement('p');

            const data = JSON.parse( xhr.responseText );
            // console.log(xhr.responseText, data );

            // p.innerHTML = xhr.responseText;
            p.innerHTML = data.text;

            document.body.appendChild ( p );

     };
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact();
