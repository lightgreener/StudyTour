const say = require('say');
const fs = require('fs');
const _ = require('underscore');

if ( fs.existsSync('./martin.json')) {    // if ti is true , has this file
    const sounds = require('./martin.json');
    const randomSound = _(sounds).sample();
    console.log(randomSound.description);
    console.log(randomSound.sound);
    say.speak( randomSound.sound);
}else {
    console.log('please run: npm run start');
}
