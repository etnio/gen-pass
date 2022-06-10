var random_num = new Uint32Array(8); // 2048 = number length in bits
window.crypto.getRandomValues(random_num);

console.log(String(random_num));



const characters = {
    default:  'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '~!@-#$'
}

console.log(characters);






// const generatePassword = () => {
//     const defaultCharacters = 'abcdefghijklmnopqrstuvwxyz'
//     const characters = {
//         uppercase: defaultCharacters.toUpperCase(),
//         numbers: '0123456789',
//         symbols: '~!@-#$'
//     }
// }





// self.crypto.getRandomValues(array);

// console.log("Your lucky numbers:");
// for (const num of array) {
//   console.log(num);
// }