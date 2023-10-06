const Email = document.getElementById("Eml");
const Password = document.getElementById("Pss");
const CheckBox = document.getElementById("Chk");
const Button = document.getElementById("Btn");

let isValid = false;
let User = {
    email: "",
    password: "",
}

// setTimeout(() => {
//     document.getElementById("GUIBox").style.display = "flex"
// }, 1000);

// ============= Error Function =============

const ErrorResolved = (isError = true) => {

    let RedColor = "#F81D1D"
    let Emtbox1 = document.getElementById("emptybox1").style;
    let Emtbox2 = document.getElementById("emptybox2").style;

    Emtbox1.border = "3px solid"+RedColor;
    Emtbox2.border = "3px solid"+RedColor;

    if (isError == false) {
        Emtbox1.border = "none"
        Emtbox2.border = "none"
        
    }
}

// <---------------- Validation ----------------> 

function validDate() {

    // Email

    if (User.email == "") {
        ErrorResolved();
        isValid = false;
    }
    if (User.password == "") {
        ErrorResolved();
        isValid = false;
    }
    if (User.email != "") {
        ErrorResolved(false)
        isValid = false;
    }
    if (User.password != "") {
        ErrorResolved(false)
        isValid = false;
    }
    if (User.email != "" && User.password != "" ) {
        isValid = true;
    }

}
setInterval(() => {
    validDate()
}, 1000);

// ============ main logic +=================


Email.addEventListener("input", (e) => {
    e.preventDefault();
    User.email = e.target.value
    console.log(User)
    validDate()
});
Password.addEventListener("input", (e) => {
    e.preventDefault();
    User.password = e.target.value
    console.log(User)
    validDate()
});
Button.addEventListener("click",(e) => {
    console.log(isValid)
    if (isValid == false) {
        console.log("hahah")
    }
    else if (isValid == true) {
        ErrorResolved(false)
        window.location.href = "/pages/page1.html"
    }
})