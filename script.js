
// HEADER TOOGLER

// let MenuBtn = document.getElementById('menuBtn');

// MenuBtn.addEventListener('click', function (e) {
//     document.querySelector('body').classList.toggle('mobile-nav-active');
//     this.classList.toggle('fa-xmark')
// })

// TYPING EFFECT
let typed = new Typed('.auto-input', {
    strings: ['',' Desarrolladora Web Front-end ', 'Artista ', ' Diseñadora Gráfica', ' Diseñadora UX/UI '],
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
const submit=document.getElementsByClassName('contact-form')[0];

submit.addEventListener('submit', (e)=>{
        e.preventDefault();
        console.log("Clicked");
        //Email body:
        let emailmessage=
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
            message => alert(message)
        );
})

// function sendEmail() {
  
//     console.log("clicked")
//     Email.send({
//         SecureToken: "dfe2bcc8-4256-4814-8662-65d6b2692bca",
//         To: 'hola.mariamelendez@gmail.com',
//         From: 'hola.mariamelendez@gmail.com',
//         Subject: "👋👋 Hello! New Enquiry From mtm website 👀",
//         Body: emailmessage
//     }).then(
//         message => alert(message)
//     );
// }

  // Email.send({
    //     Host: "",
    //     Username: "username",
    //     Passwword: "password",
    //     To: "hola.mariamelendez@gmail.com",
    //     From: document.getElementById('email').value,
    //     Subject: "New Contact Form Enquiry",
    //     Body: "Name: "+document.getElementById('name').value
    //     + "<br> Email: "+document.getElementById('email').value
    //     + "<br> Phone no: "+document.getElementById('phone').value
    //     + "<br> Message: "+document.getElementById('message').value


    // }).then(
    //     message => alert("Message sent succesfully")
    // );

    // submit.addEventListener('submitB', (e)=>{
//     e.preventDefault();
//     console.log("Clicked");
//     //Email code work...
//     // Email.send({
//     //     Host : "smtp.elasticemail.com",
//     //     Username : "hola.mariamelendez@gmail.com",
//     //     Password : "935039215D21FF789B7D3985CC5C050EE0B0",
//     //     To : 'hola.mariamelendez@gmail.com',
//     //     From : "you@isp.com",
//     //     Subject : "This is the subject",
//     //     Body : "And this is the body"
//     // }).then(
//     //   message => alert(message)
//     // );


//     Email.send({
//         SecureToken : "dfe2bcc8-4256-4814-8662-65d6b2692bca",
//         To : 'hola.mariamelendez@gmail.com',
//         From : 'hola.mariamelendez@gmail.com',
//         Subject : "Testing email",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );

// })