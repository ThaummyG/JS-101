function checkEvenNumber(number) {
    if (number % 2 === 0) {
        console.log("even");
    }
}

let input = prompt("fill number");


if (!isNaN(input)) {
    input = parseInt(input);
    checkEvenNumber(input);
} else {
    console.log("Please enter a valid number.");
}
