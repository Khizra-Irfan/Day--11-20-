//Question 40:

function music_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title } as { artist: string; title: string; tracks?: number };
    if (tracks !== undefined) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(music_album("First Artist", "Album 01"));
console.log(music_album("Second Artist", "Album 02"));
console.log(music_album("Third Artist", "Album 03", 16));


//Question 41:
let magicians: string[] = ['charles', 'david', 'michael'];
function magicians_name(magicians : string[]){
    magicians.forEach(magician => {
    console.log(magician);
    
    })
};
magicians_name(magicians);


//Question 42:
function modifyNames(magicians: string[]){
    for(let i = 0; i< magicians.length; i ++){
        magicians[i] =  "The Great" + " " + magicians[i];
    }
};
modifyNames(magicians);               //modifies the original array. modification only applied on original array like in ques 41 'magicians' this array is original.
magicians_name(magicians);            //shows modified names.