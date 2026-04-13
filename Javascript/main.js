function header() {
document.querySelector("header").classList.toggle("active");
document.getElementById("button").classList.toggle("active")
}

function burger() {
    let windowWidth = window.innerWidth;
    if(windowWidth < 951) {
        console.log(windowWidth)
        document.getElementById("header").classList.toggle("active")
    }
    else{
        console.log(windowWidth)
    }
}




function linkedIn() {
window.open("https://www.linkedin.com/in/camiel-samuels-1853392a3/")
}

function Github() {
window.open("https://github.com/SamuelsCamiel")
}

function Email() {
window.location.href = "mailto:samuelscamiel@gmail.com";
}
