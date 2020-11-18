// let nextPage = 1;
// let lastPageReached = false;

const state = {
  nextPage: 1,
  lastPageReached: false,
  requestInProgress: false
};

const searchFlickr = function ( keywords ) {
    // if (state.lastPageReached === true) {
    if (state.lastPageReached || state.requestInProgress) {
        return;
    }

    state.requestInProgress = true;

    console.log("searching ", keywords);

    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',  //
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: state.nextPage++
    }).done( showImages).done(function (info){
        console.log( info );
        state.requestInProgress = false;
        if ( info.photos.page >= info.photos.pages){
            state.lastPageReached = true;
        }
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
    // if ( results.page >= results.pages){
    //     state.lastPageReached = true;
    // }

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

        state.nextPage = 1;
        state.lastPageReached = false;
        $('#image').empty();

        const searchTerms= $('#query').val();
        searchFlickr(searchTerms);
    });

    // 用 debounce 解决 下拉时， 重复加载的问题
    // const chillSearchFlickr = _.debounce( searchFlickr, 4000,true);

    $(window).on('scroll',function (){
        // console.log('scroll detected', Math.random());
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 400) {
            // console.log( scrollBottom);
            const searchTerms = $('#query').val();
            searchFlickr (searchTerms);
            // chillSearchFlickr (searchTerms);
        }
    });
});
