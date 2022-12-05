
function validate() {
    var box1 = document.getElementById("fname");
    var error= false;
    if (box1.value == "") {
        console.log(box1.value);
        document.getElementById("p1").innerHTML = "* A firstname is required *";
        error= false;
    }
    else {
        document.getElementById("p1").innerHTML = "";
        error= true;

    }
    var box2 = document.getElementById("lname");
    if (box2.value == "") {
        console.log(box2.value);
        document.getElementById("p2").innerHTML = "* A lastname is required * ";
       error= false;
    }
    else {
        document.getElementById("p2").innerHTML = "";
        error= true;
    }
    var box3 = document.getElementById("phone");
    if (box3.value == "") {
        console.log(box3.value);
        document.getElementById("p3").innerHTML = "* A phone number is required *";
         error= false;
    }
    else {
        document.getElementById("p3").innerHTML = "";
        error= true;
    }
    var box3 = document.getElementById("phone");
    if (box3.value.length > 10) {
        document.getElementById("p3").innerHTML = "* Please Enter only 10 characters *";
        error= false;
    }
    else {
        document.getElementById("p3").innerHTML = "";
        error= true;
    }
    var box3 = document.getElementById("phone");
    if (box3.value.length < 10) {
        document.getElementById("p3").innerHTML = "* Please Enter minimum 10 characters *";
         error= false;
    }
    else {
        document.getElementById("p3").innerHTML = "";
        error= true;
    }
    return error= true;
    window.location.href="script.html";
}

