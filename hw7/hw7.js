const str = 'Hôm nay ngày thứ 7'
let a = str.charAt(0).toLowerCase(); // "h"
let b = str.charAt(8).toUpperCase(); // "N"
let c = str.slice(1, 8); // "ôm nay "
let d = str.slice(9, 18); // "gày thứ 7"

let str1 = a.concat(c, b, d);
console.log("str1", str1);

let g = str.slice(1, 3);
let h = str.slice(4, 17);
let str2 = a.concat(g, h, "8");

console.log("str2", str2);





