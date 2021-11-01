// let num1 = 10;
// let num2 = 11;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(19 % 4);

// let str1 = "string";
// let str2 = "20";
// console.log(str1 + str2);

// let bool1 = true;
// console.log(bool1);
// console.log(!bool1);
// console.log(!!bool1);

// let obj1 = {
//     name: "Ivan",
//     surname: "Petrov",
//     middlename: "Aleksandrovich",
//     age: 42,
//     isMale: true
// }

// console.log(obj1);

// const val10 = 10;


// num1 = 10;
// num2 = 10;
// str1 = "new string";
// console.log(str1);
// if (num1 > num2) {
//     console.log("Num1 is bigger");
// } else {
//     console.log("Num1 is less or equal");
// }

// if (num1 == num2) {
//     console.log("Num1 is exactly num2");
//     let perimeter = 1000.099;
// } else if (num1 > num2) {
//     console.log("Num1 is bigger");
// } else {
//     console.log("Num1 is less");
// }

// // <=, >=, !=, ==, >, <

function perimeter_of_triangle(side1, side2, side3) {
    console.log("Мы внутри функции");
    return side1 + side2 + side3;
    console.log("Это сообщение мы никогда не увидим");
}

// let perimeter = perimeter_of_triangle(10, 20, 30);
// console.log(perimeter);

function some_function_name() {
    console.log("Это просто инфо функция");
}

// some_function_name();

function func1() {
    return 100 * 80 / 7 % 5 + 109;
}

// console.log(func1);

function func2() {
    let div = document.getElementById("superid");
    console.log(div);
    let div_attr = div.getAttribute("class");
    if (div_attr == "base") {
        div.setAttribute("class", "base1");
    } else {
        div.setAttribute("class", "base");
    }
}

function some_function_name2(val) {
    console.log(val);
}
