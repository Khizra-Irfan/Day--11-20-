"use strict";
//Question 40:
Object.defineProperty(exports, "__esModule", { value: true });
function music_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks !== undefined) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(music_album("First Artist", "Album 01"));
console.log(music_album("Second Artist", "Album 02"));
console.log(music_album("Third Artist", "Album 03", 16));
//Question 41:
let magicians = ['charles', 'david', 'michael'];
function magicians_name(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
;
magicians_name(magicians);
//Question 42:
function modifyNames(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great" + " " + magicians[i];
    }
}
;
modifyNames(magicians);
magicians_name(magicians);
