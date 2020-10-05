// let mobile__menu_open = document.getElementById("mobile__menu_open_btn");
// console.log(mobile__menu_open);
//
//
//
// document.getElementById("mobile__menu_open_btn").onclick = function () {
//     document.getElementById("mobile__menu_open_btn").classList.add("active");
//     document.getElementById("mobile__menu").classList.add("active");
// }
//
// document.getElementById("mobile__menu_closed_btn").onclick = function (){
//     document.getElementById("mobile__menu_open_btn").classList.remove("active");
//     document.getElementById("mobile__menu").classList.remove("active");
// }

// var a;
// let b;

// console.log(a);
// console.log(b);

// a = 1;
// b = 2;

// let a = 1;
// let b = 9 % 3;
//
// console.log(a);
// console.log(b);

// let a = "1";
// let b = 2;
// let c = a + b;
//
// let x = 21 / "2";
//
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(x);

// let a = '1';
// let a = "1";


// let a = true;
// let a = false;
// console.log(a);


// let a = Infinity;
// console.log(a);


// let a = "Hello";
// let b = null;
// let c = a / b;
//
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);


// let name = "Ilya";
//
// console.log( `hello ${1}` ); // ?
//
// console.log( `hello ${"name"}` ); // ?
//
// console.log( `hello ${name}` ); // ?console.log


//
// let a = document.querySelector(".container").clientWidth;
// console.log(a);
// console.log(typeof a); // boolean


// document.getElementById("mobile__menu_open_btn").onclick = function () {
//     document.getElementById("mobile__menu_open_btn").classList.add("active");
//     document.getElementById("mobile__menu").classList.add("active");
// }

// let a = 2 + 1;
// console.log(a);
//
// if ( a == 4) {
//     console.log("Результат подсчета равен 4");
// } else if (a < 4){
//     console.log("Результат подсчета меньше 4");
// } else if (hgjhghj){
//     console.log("Результат подсчета больше 4");
// }


// let a = "1";
// let b = 2;
// console.log(Number(a) + b);

// let a = ( Number("   123   ") ); // 123
// console.log( typeof a); // 123
// console.log( Number("123z") );      // NaN (ошибка чтения числа в "z")
// console.log( Number(true) );        // 1
// console.log( Number(false) );       // 0

// let a = {};
// console.log(a);
// let b = [];
// console.log(b);

// let user = {
//     name: "Roman",
//     age: 30,
//     is_admin: true
// }
//
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.is_admin);
//
// let let = 123;
// console.log(let);

// let a = [];
// console.log(a);


// let f = ["Яблоко", "Апельсин", "Слива"];
//
// console.log( f )
//
// console.log( f[0] ); // Яблоко
// console.log( f[1] ); // Апельсин
// console.log( f[2] ); // Слива


// console.log( f.length); // Длинна массива

// let a = document.querySelectorAll("*");

// let a = document.querySelectorAll(".container");

// let a = document.getElementById('container-1');
// console.log(a);

// let b = document.getElementById("container-3");
// console.log(b);
//
// let a = document.getElementById("container-3").innerHTML = "Hello world!";
// console.log(a);

// let a = document.querySelector(".container").innerText;
// let b = document.querySelector(".container").innerHTML;
// console.log(a);
// console.log(b);

// let a = document.querySelector(".container").innerText;
// console.log(a);


// let a = document.querySelector(".container").innerText = "Good";
// console.log(a);


// let a = document.querySelector(".container");
// a.classList.add("my-custom-class");
// a.classList.remove("container");
// a.style.color = "green";
// a.style.textAlign = "center"
// console.log(a);


// let a = document.querySelector("body").childNodes[1];
// console.log(a);


// function имя(параметры) {
// ...тело...
// }

// function showMessage() {
//     console.log("Hello World!");
// }
//
// showMessage();
// showMessage();
// showMessage();
// showMessage();

// function showHello(){
//     console.log("Hello World!");
// }
// showHello();
// showHello();
// showHello();
// showHello();
// showHello();
// showHello();
// showHello();
// showHello();
// showHello();
// showHello();

// let userName = 'Вася';

// function showMessage(a) {
//     let message = 'Привет, ' + a;
//     console.log(message)
// }
//
// showMessage("Vasia"); // Привет, Вася
// showMessage("Petia"); // Привет, Вася
// showMessage("Dima"); // Привет, Вася

// let c = 444;

// function maths(abracadabra, cadabraabra) {
//     let result = abracadabra + cadabraabra;
//     console.log(result);
// }
//
// maths(111, 222, c);
// maths(111, "222", 666);
// maths(222, 333);
// maths(333, 444,);


// function maths(a,b){return a+b;}
// function maths(a, b) {
//     // let result = a + b;
//     // return result;
//     return a + b;
// }

// let sum = maths(123, 321);
// console.log(sum);


// let sum2 = maths(222, 333);
// console.log(sum2);

//
// let a = document.getElementById("container-0");
// console.log(a);
//
// a.onclick = function (){
//     console.log("123")
// }
//
// a.mouseenter = function (){
//     console.log("5555")
// }

// document.querySelector("#container-0").onclick = function (){
//     console.log(document.querySelector("#container-0"));
//     document.querySelector("#container-0").classList.toggle("blue");
// }

// document.querySelector("#container-0").onclick = function (){
//     console.log(document.querySelector("#container-0"));
//     document.querySelector("#container-0").style.backgroundColor = ("blue");
// }

// document.querySelector("#container-0").oncontextmenu = function (e){
//     e.preventDefault();
//     console.log(document.querySelector("#container-0"));
//     document.querySelector("#container-0").classList.toggle("blue");
// }

// function foo (){
//     console.log(document.querySelector("#container-0"));
//     document.querySelector("#container-0").classList.toggle("blue");
// }

// let a = document.querySelector("#container-0");
// console.log(a);
//
// document.querySelector("#container-0").onclick = function () {
//     document.querySelector("#container-0").classList.add("active");
// }
//
// document.getElementById("container-1").onmouseover = function (){
//     console.log(document.getElementById("container-1"));
//     document.getElementById("container-1").classList.add("blue");
// }

// document.getElementById("container-1").onmousemove = function (){
//     console.log(document.getElementById("container-1"));
//     document.getElementById("container-1").classList.toggle("blue");
// }

// document.getElementById("container-1").onclick = function (){
//     console.log(document.getElementById("container-1"));
//     this.classList.toggle("active");
// }
//
// for (let i = 92; i < 100; i++) { // выведет 0, затем 1, затем 2
//     console.log(i);
// }

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//     console.log( i );
//     i++;
// }


// for (let a = 0; a < 1000; a++){
//     console.log(a);
// }

// let a = 900;
// while (a < 1000){
//     console.log(a);
//     a++;
// }
//
// let a = 0;
// do {
//     console.log("Ничего не найдено");
//     a++;
// } while (a > 10);


// document.querySelector("#link_1").onclick = function (){
//     document.querySelector("#link_1").classList.add("active");
//     document.querySelector("#link_2").classList.remove("active");
//     document.querySelector("#link_3").classList.remove("active");
//     document.querySelector("#link_4").classList.remove("active");
//
//
//     document.querySelector(".tabs__content_1").classList.add("active");
//     document.querySelector(".tabs__content_2").classList.remove("active");
//     document.querySelector(".tabs__content_3").classList.remove("active");
//     document.querySelector(".tabs__content_4").classList.remove("active");
// }
//
// document.querySelector("#link_2").onclick = function (){
//     document.querySelector("#link_1").classList.remove("active");
//     document.querySelector("#link_2").classList.add("active");
//     document.querySelector("#link_3").classList.remove("active");
//     document.querySelector("#link_4").classList.remove("active");
//
//     document.querySelector(".tabs__content_1").classList.remove("active");
//     document.querySelector(".tabs__content_2").classList.add("active");
//     document.querySelector(".tabs__content_3").classList.remove("active");
//     document.querySelector(".tabs__content_4").classList.remove("active");
// }
// document.querySelector("#link_3").onclick = function (){
//     document.querySelector("#link_1").classList.remove("active");
//     document.querySelector("#link_2").classList.remove("active");
//     document.querySelector("#link_3").classList.add("active");
//     document.querySelector("#link_4").classList.remove("active");
//
//     document.querySelector(".tabs__content_1").classList.remove("active");
//     document.querySelector(".tabs__content_2").classList.remove("active");
//     document.querySelector(".tabs__content_3").classList.add("active");
//     document.querySelector(".tabs__content_4").classList.remove("active");
// }
// document.querySelector("#link_4").onclick = function (){
//     document.querySelector("#link_1").classList.remove("active");
//     document.querySelector("#link_2").classList.remove("active");
//     document.querySelector("#link_3").classList.remove("active");
//     document.querySelector("#link_4").classList.add("active");
//
//     document.querySelector(".tabs__content_1").classList.remove("active");
//     document.querySelector(".tabs__content_2").classList.remove("active");
//     document.querySelector(".tabs__content_3").classList.remove("active");
//     document.querySelector(".tabs__content_4").classList.add("active");
// }


// for ( i<=document.querySelectorAll(".tab_link").length; i++){
//     console.log(i);
//     //this.classList.add("active");
// }
// document.querySelectorAll(".tab_link").onclick = function () {
//     document.querySelectorAll(".tab_link").classList.remove("active");
// }

// for (let i = 0; i < document.querySelectorAll(".tab_link").length; i++) {
//     document.querySelectorAll(".tab_link")[i].onclick = function () {
//         // if (document.querySelectorAll(".tab_link")[i].hasClass("active")){
//         //     document.querySelectorAll(".tab_link").classList.remove("active");
//         // } else {
//         //
//         // }
//
//         document.querySelectorAll(".tab_link").classList.remove("active");
//         console.log(a);
//         this.classList.add("active");
//
//     }
// }

// let topLinks = document.querySelectorAll(".tab_link");
//
// for (let i = 0; i < topLinks.length; i++) {
//     topLinks[i].addEventListener("click", function() {
//         let activeClass = document.querySelector(".active");
//         activeClass.className = activeClass.className.replace(" active", "");
//         this.className += " active";
//     });
// }

// $("#tabs").tabs(
//     {
//         hide: {effect: "clip", duration: 3000}
//     },
//     {
//         show: {effect: "clip", duration: 3000}
//     },
//     {
//         active: 1
//     },
//     {
//         classes: {
//             "ui-tabs-tab": "my_custom_link_active_red"
//         }
//     }
// );

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:30,
//     nav:true,
//     dots:false,
//     mouseDrag:false,
//     autoplay:true,
//     autoplayTimeout: 1000,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
// })

let inputSubmit = document.querySelector(".button-form");
//console.log(inputSubmit);

inputSubmit.onclick = function () {
    //e.preventDefault();
    //console.log(inputName.value);

    let inputName = document.getElementById("in_name");
    let inputEmail = document.getElementById("in_email");


    if (inputName.value.length == 0) {
        inputName.classList.add("red");
        return false;
    } else {
        inputName.classList.add("green");
    }

    if (inputEmail.value.length == 0) {
        inputEmail.classList.add("red");
        document.getElementById("emailf").innerHTML = "*введите email";
        return false;
    } else if (inputEmail.value.indexOf('@', 0) == -1){
        inputEmail.classList.add("red");
        document.getElementById("emailf").innerHTML = "*email введен не верно";
        return false;
    } else {
        inputEmail.classList.add("green");
    }

    //console.log(inputEmail.value);


    // if (at < 1) {
    //     document.getElementById("emailf").innerHTML = "*email введен не верно";
    //     return false;
    // }
}


document.getElementById("sendHello").onclick = function (e){
    e.preventDefault();
    $.ajax({
        url: 'test.html',
        success: function (data){
            $('#result').html(data);
        }
    })
}