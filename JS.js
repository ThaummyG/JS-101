// let dayOfweek = prompt("pls enter today");
// dayOfweek = dayOfweek.toLowerCase()

// if (dayOfweek == "monday") {
//     console.log("Today is Monday");
// } else if (dayOfweek == "sunday") {
//     console.log("Today is Sunday");
// } else if (dayOfweek == "friday") {
//     console.log("Today is Friday");
// } else {
//     console.log("Other day");
// }

// const type = "studen"

// if (type == 'studen') {
//     console.log("Free");
// } else if (type == "teacher") {
//     console.log("discount 40%");
// } else if (type == "baby") {
//     console.log("discount 90%");
// } else {
//     console.log("type invalid");
// }

// let input = prompt("pls enter somenumbar")

// let random = Math.random()

// let number = Math.floor(random * 10)
// console.log(number)

// if (input < number) {
//     console.log("น้อยเกินไปละ");
// } else if (input > number) {
//     console.log("เยอะไปนะ");
// } else {
//     console.log("กว่าจะได้เนอะ");
// }


let password = prompt("pla your paswrd")

if (password.length >= 8) {
    if (password.indexOf(' ') == -1) {
        alert("password valid!!")
    } else {
        alert("password can't include spaces")
    }
} else {
    alert("password too shot!")
}