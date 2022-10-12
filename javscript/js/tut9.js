console.log("this is tut 9");

// for (a = 0; a < 10; a++) {
//   console.log(a);
// }

// let j = 10;
// while (j < 10) {
//   console.log(j);
//   j++;
// }

// let k = 0;
// do {
//   if(k===5){
//     k++;
//     continue;
//   }
//   console.log(k + 1);
//   k++;
// } while (k < 10);

// let arr =[1,2,4,8,7,5];

// // for(i=0; i<arr.length; i++){
// //   let element= arr[i];
// //   console.log(element);
// // }

// arr.forEach(element => {
//   console.log(element);
// });

let obj ={
  name: "Hamza",
  age: 22,
  profession: "Web developer",

}

for(let key in obj){
  console.log(`The ${key} of object is ${obj[key]}`);
}



console.log("Done");
