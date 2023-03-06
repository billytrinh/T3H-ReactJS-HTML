// var arr = [];
// arr[0] = 9;
// arr[1] = "hello";
// arr[2] = true;

// arr[3] = 21;
// arr.push(9);
// arr.push("world");
// arr.push("Hello");
// arr.push(21);

// for(var i=0;i<arr.length;i++){ // duyệt mảng
//     // arr[i]
//     console.log(arr[i]);
// }

// jackpot
// sinh ra 6 so ngau nhien 1->55
// var rd = [];
// while(rd.length < 6){
//     var x = parseInt(Math.random()*54+1);
//     if(!rd.includes(x)){
//         rd.push(x);
//     }
// }
// console.log(rd);

var min=10;
var sec = 0;
var t = setInterval(function(){
   console.log(min+":"+sec);
   sec--;
   if(sec < 0){
    sec = 59;
    min--;
   }
   if(min < 0){
    clearInterval(t);
   }
},1000);