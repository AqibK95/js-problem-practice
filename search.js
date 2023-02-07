const lyrics = 'Tumi bondhu klala pakhi ami jno ki, bosonto kal tomai bolte pari ni. kala kala sada sada rong jomese sada kala';

const searchString = 'PaKhi';
// const doesExist = lyrics.includes('pakhi');
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
console.log(doesExist);

const doesExistOneline = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistOneline);

//..............................
// indexof

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('sada') !== -1){
    console.log('exist inside the string');
}
else{
    console.log('cannot find it');
}

// starts with

console.log(lyrics.startsWith('Tumi'));

// ends with
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf');