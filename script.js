function palindrome(str) {
    let newStr = str.toLowerCase().replace(/[\W_]/g, "");
    let reverseStr = newStr.split("").reverse().join("");
    return (reverseStr === newStr);
}

document.addEventListener('DOMContentLoaded', (event) => {

    let input = document.getElementById("input")
    let submit = document.getElementById("submit")

    submit.addEventListener('click', (event) => {
        event.preventDefault()
        if (input.value === "") {
            alert("You did not enter any text. Please try again.");
        } else {
            printAnswer(input.value, palindrome(input.value));
            input.value = '';
        }
    });
});

function printAnswer(yourStr, answer) {
    let result = document.getElementById("result");
    if (answer === true) {
        result.innerText = `${yourStr} is a palindrome.`;
        result.style.color = "green";
    } else {
        result.innerText = `Sorry, ${yourStr} is NOT a palindrome.`;
        result.style.color = "red";
    }
}