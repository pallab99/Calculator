function DeleteMe() {
    document.getElementById("Myresult").value = "";
}

function calculator(val) {
    document.getElementById("Myresult").value += val;
}

function result() {
    let a = document.getElementById("Myresult").value;
    let b = eval(a);
    document.getElementById("Myresult").value = b;
}