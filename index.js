function display(val) {
    document.getElementById("text").value += val
}

text.addEventListener("keydown", calc);
    function calc(e) {
        if(e.key=="Enter")
        {
            cal();
        }
        if(e.key=="backspace")
        {
            del();
        }
    }
function clr() {
    document.getElementById("text").value = ""
}
function cal() {
    let x = document.getElementById("text").value
    let y = eval(x)
    document.getElementById("text").value = y
}
function del() {

    let a = document.getElementById("text").value;
    let len = a.length;
    let b = a.split("");
    b.pop();
    var disp = "";
    for (i = 0; i < len - 1; i++) {

        disp = disp + b[i];

    }
    document.getElementById("text").value = disp;

}