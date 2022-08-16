const str = 'Hôm nay ngày thứ 7'
let a = str.charAt(0).toLowerCase(); 
let b = str.charAt(8).toUpperCase(); 
let c = str.slice(1, 8);
let d = str.slice(9, 18); 

let str1 = a.concat(c, b, d);
console.log("str1", str1);

let g = str.slice(1, 3);
let h = str.slice(4, 17);
let str2 = a.concat(g, h, "8");

console.log("str2", str2);

let greeting = "Hello. My name is John"
console.log("greeting", greeting.charAt(9))




