let face = document.querySelector("#facebook_img");

face.addEventListener("click", () => {
  window.open("https://me-qr.com/lePHfBQo");
});

let ins = document.querySelector("#instagram_img");

ins.addEventListener("click", () => {
  window.open("https://me-qr.com/fnIJKGbg");
});

let tel = document.querySelector("#telegram_img");

tel.addEventListener("click", () => {
  window.open("https://me-qr.com/BuESNvNX");
});

let what = document.querySelector("#whats_img");

what.addEventListener("click", () => {
  window.open("https://me-qr.com/vsrvpoJW");
});

//  function dev(userName,age){
//     return userName + age

//  }

// console.log( dev("mosfata ",20))

// // let fn = ()=>{
// //     alert("asdasd")
// // }

// // fn()

// (function name(){
//     alert("asdasd")
// })()
document
      .getElementById("btnperfume")
      .addEventListener("click", function () {
        window.location.href = "./perfume.html"; // Make sure index.html is in the same directory
      });
document
      .getElementById("btnbody")
      .addEventListener("click", function () {
        window.location.href = "./body_care.html"; // Make sure index.html is in the same directory
      });
document
      .getElementById("btnoffers")
      .addEventListener("click", function () {
        window.location.href = "./offers.html"; // Make sure index.html is in the same directory
      });