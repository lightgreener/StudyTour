// ## Text Soup:

// Using HTML, CSS, JavaScript + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.

// **Hints:**
// - Grab some plain text (~400 words should do) from one the top 100 novels in the public domain at [Project Gutenberg](https://www.gutenberg.org/browse/scores/top); paste the text into a hidden ```<div>``` element in your HTML file, and use jQuery to get the contents of the div.

// **Bonus:**
// - Fade the text in to make it appear, and then fade it out to disappear
// - Try random colours, random font sizes, rotation, whatever floats your boat

$(document).ready(function(){

    $('p').hide();

    // let words = $('.text').split(' ');
    // const wordArray =[];
    // for (let i = 0; i < words.length; i++) {
    //     const element = words[i];
    //     if(element.endWith(',')){

    //     }
    // }    


    // // random word from this array.
    // const indexWord = Math.floor(Math.random()*words.length);

    //setInterval

    window.setInterval('showWord()', 500);

    showWord(){

        let words = $('.text').split(' ');
        const wordArray =[];
        for (let i = 0; i < words.length; i++) {
            const element = words[i];
            if(element.endWith(',')){  
                  newElement = element.substr(0, element.length -1);
                  wordArray.push(newElement);
            }

            wordArray.push(element);

        }    

          // random word from this array.
        const indexWord = Math.floor(Math.random()*wordArry.length);

        return indexWord;
        

    }








})