var object = prompt("Add number to reverse")
function reverse_a_number(object) {
    object = object + "";
    return object.split("").reverse().join("");
}

alert(`reversed number  ${reverse_a_number(object)}`);
