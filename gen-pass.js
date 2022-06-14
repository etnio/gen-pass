
const characters = {
    default:  'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '~!@-#$'
}

console.log(characters.symbols+characters.default);

let arr1 = characters.default + characters.uppercase + characters.numbers + characters.symbols;

console.log(arr1);

