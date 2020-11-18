const searchFlickr = function ( keywords ) {
    console.log("searching ", keywords);

    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',  //
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json'
    }).done( showImages).done(function (info){
        console.log( info );
    });
    // showImages intead of below
    //     function(info){
    //     console.log(info);
    // });
};

const showImages = function (results) {
    // iterate throgh photos
    _(results.photos.photo).each(function( photo ){
        // console.log( photo );
        const thumbnailURL = generateURL (photo);
        // console.log( thumbnailURL );
        const $img = $('<img>',{src: thumbnailURL});
        // console.log($img);    // detached
        $img.appendTo('#images');
    })
    // figure out the url
    //  display that url in an images
};

const generateURL = function (p) {
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg'  // change 'q' to sth else for diff size
    ].join('');
}

$(document).ready(function (){
    $('#search').on('submit',function (event){
        event.preventDefault();
        const searchTerms= $('#query').val();
        searchFlickr(searchTerms);
    });

    $(window).on('scroll',function (){
        // console.log('scroll detected', Math.random());
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 400) {
            // console.log( scrollBottom);
            const searchTerms = $('#query').val();
            searchFlickr (searchTerms);
        }
    });
});
