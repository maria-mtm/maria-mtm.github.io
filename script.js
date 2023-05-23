
// HEADER TOOGLER

// let MenuBtn = document.getElementById('menuBtn');

// MenuBtn.addEventListener('click', function (e) {
//     document.querySelector('body').classList.toggle('mobile-nav-active');
//     this.classList.toggle('fa-xmark')
// })

// TYPING EFFECT
let typed = new Typed('.auto-input', {
    strings: ['', 'Full Stack Developer ' ,'Front-end Developer ', ' Graphic Designer', ' UX/UI Designer '],
    typeSpeed: 120,
    backSpeed: 110,
    backdelay: 2000,
    loop: true,
})

//CONTACT - SEND EMAIL
const fname = document.getElementById('name')
const femail = document.getElementById('email')
const fphone = document.getElementById('phone')
const fmessage = document.getElementById('message')
const submit = document.getElementsByClassName('contact-form')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Clicked");
    //Email body:
    let emailmessage =
        `<b>Name: </b>${fname.value}
         <br>
        <b>Email: </b>${femail.value}
        <br>
        <b>Phone No: </b>${fphone.value}
        <br>
        <b>Message: </b>${fmessage.value}
        <br>
        <br>
        <br>
       -🌼`
    // Email code work:
    Email.send({
        SecureToken: "dfe2bcc8-4256-4814-8662-65d6b2692bca",
        To: 'hola.mariamelendez@gmail.com',
        From: 'hola.mariamelendez@gmail.com',
        Subject: "👋👋 Hello! New Enquiry From mtm Website 👀",
        Body: emailmessage
    }).then(
        alert("Thank you!")
    );
})

// LANGUAGES SWITCHER

const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]")

const changeLang = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    // console.log(texts)
    for (const textToChange of textsToChange){
        // console.log(textsToChange)
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        // console.log(section, value)

        textToChange.innerHTML=texts[section][value]
    }


}

flagsElement.addEventListener("click", (e) => {
    // console.log(e.target.parentElement.dataset.language);
    changeLang(e.target.parentElement.dataset.language);
})