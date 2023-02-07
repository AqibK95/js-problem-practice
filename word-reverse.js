// function reverseWords(str){
//     const words = str.split(' ');
//     console.log(words);
// }

// const mystring = ' I am a good boy';
// reverseWords(mystring);

// reverse way
function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    for(let i = words.length - 1; i >=0; i--){
        const element = words[i];
        result.push(element);
    }
    // console.log(result);
    const reversed = result.join(' ');
    return reversed;
}

const mystring = ' I am a good boy';
reverseWords(mystring);