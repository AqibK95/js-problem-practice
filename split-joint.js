const lyrics = 'Tumi bondhu klala pakhi ami jno ki, bosonto kal tomai bolte pari ni. kala kala sada sada rong jomese sada kala';
const parts = lyrics.split(' ');
console.log(parts);

const sentences = lyrics.split('.');
console.log(sentences);

const chars = lyrics.split('');
console.log(chars);

console.log(lyrics);

// slice
const partial = lyrics.slice(5, 8);
console.log(partial);

const partial2 = lyrics.substring(5, 8);
console.log(partial2);


const lines = ['Tumi bondhu klala pakhi ami jno ki', 
'bosonto kal tomai bolte pari ni.',
 'kala kala sada sada rong jomese sada kala'];
const newSong = lines.join(':');
console.log(newSong);