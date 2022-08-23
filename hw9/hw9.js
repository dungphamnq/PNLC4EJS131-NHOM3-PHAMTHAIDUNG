// 1. output -> [1,4,5,7,8,10,20]
let A = [5, 4, 7, 8, 10, 20, 1];

function sapxepgt(A) {
  A.sort((a, b) => a - b);
}

sapxepgt(A);
console.log("1.",A);

// console.log(A.sort((a, b) => a - b));

//2. B = [1,2,'a',{}, 'b', 'c', 2,4,5], output -> mảng C = [1,2,2,4,5]

let B = [1, 2, "a", {}, "b", "c", 2, 4, 5];

let C = [];
function locso(B) {
  for (let i = 0; i < B.length; i++) {
    if (typeof B[i] === "number") {
      C.push(B[i]);
    }
  }
}
locso(B);
console.log("2.",C);


//3. D = [1,4,10,100,50,69, 96], output -> số lớn nhất trong mảng, số nhỏ nhất trong mảng

let D = [1, 4, 10, 100, 50, 69, 96];

// max = Math.max.apply(Math, D);
// min = Math.min.apply(Math , D);
function timmaxmin(D) { max = Math.max.apply(Math, D);
    min = Math.min.apply(Math , D);

}
timmaxmin(D);
console.log("3.", max, min);



// 4. E = [1,2,'a', 'b', 'c', 2,4,5], không sử dụng thêm mảng mới, đưa các số về đầu mảng và các chữ về cuối mảng, sử dụng các hàm pop, push, shift, unshift

let E = [1, 2, "a", "b", "c", 2, 4, 5];


// 5. F = [1,23,41,5,6,1,14,66,1124,1,1,55,15,0], tìm ra vị trí thứ 4 của số 1 trong mảng (hint: dùng findIndex)

let F = [1, 23, 41, 5, 6, 1, 14, 66, 1124, 1, 1, 55, 15, 0];
