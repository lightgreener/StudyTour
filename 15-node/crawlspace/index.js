const Crawler = require('crawler');

//  predicate fn  to decide if we add urL to the queue
const isCrawlable = (url) =>{
    if (! url) return false;
    if (! url.startsWith('http')) return false;
    if (url.includes('archive.md')) return false;

    const terribleSite = ['archive.md', 'facebook.com','twitter.com'];

    let awfulSiteDetected = false;
    terribleSite.forEach((awfulSite) =>{
        if(url.includes(awfulSite)){
            awfulSiteDetected = true;
        }
    })

    if (awfulSiteDetected === true) {
        return false;
    }
    return true;
    };


const c = new Crawler({
    rateLimit: 1000,
    callback: function(err, res, done) {  // error first pattern
        //
        if (typeof res.$ === 'function') {
        const title = res.$('title').text();
        console.log( title);
        console.log( res.request.uri.href);
        console.log();

        const $links = res.$('a');

        $links.each(function () {
            const href = res.$(this).attr('href');
            if(isCrawlable(href)) {

                c.queue( href)
            }
        })
    }
        //
    done();
    }
})

c.queue( 'https://lobste.rs/');
