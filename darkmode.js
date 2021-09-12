const body = document.querySelector("body");
const header = document.querySelector("header");
// const buttondark = document.getElementById("buttondark");
// const buttonlight = document.getElementById("buttonlight");
// const edu = document.getElementsByClassName("education")
// const container = document.queryselector("container")

const button = {
    dark: buttondark,
    light: buttonlight
}

// body.className = "light";
// header.className = "light";

function darkmod() {
    body.className = "dark";
    header.className = "dark";
    // edu.style.backgroundColor = "green";
    // container.className = "dark";
    button.dark.style.display = "none";
    button.light.style.display = "block";
}

function lightmod() {
    body.className = "";
    header.className = "";
    // container.className = "";
    button.dark.style.display = "block";
    button.light.style.display = "none";
}

// saya mau ganti warna dari class "education" di html nya dengan menggantinya
// dengan class baru "education.dark" seperti mengganti "body" menjadi "body.dark"
// tapi gak bisa, confused