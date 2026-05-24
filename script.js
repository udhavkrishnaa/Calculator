let display = document.getElementById("display");
display.innerText = "0";

function UpdateDisplay(val) {
    let op = ['+', '-', '*', '/'];
    let LastChar = display.innerText.slice(-1);

    if (op.includes(val) && op.includes(LastChar)) {
        return;
    }

    if (display.innerText == "0") {
        display.innerText = val;
    } else {
        display.innerText += val;
    }
}
function Equal() {
    display.innerText = eval(display.innerText);
}

function Delete() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText == "") {
        display.innerText = "0";
    }
}

function ClearDisplay() {
    display.innerText = "0";
}