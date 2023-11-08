// let navName = document.querySelectorAll(".nav-name");
// let navIcon = document.querySelectorAll('.nav-link');



// for(icon of navIcon){

//     icon.addEventListener('mouseover',function(e){

//        e.target.nextElementSibling.classList.add('show');

//     });

// }



// for(icon of navIcon){

//     icon.addEventListener('mouseout',function(e){

//        e.target.nextElementSibling.classList.remove('show');

//     });

// }

// document.querySelector("#resume-link-1").addEventListener("click", ()=>{
//     window.open(
//        "https://drive.google.com/file/d/1oz6iAYLQFGl9ZkMi67-BbOBjtJouPi2s/view?usp=sharing"
//     );
// })

 const resumedown2 = () => {
    window.open(
      "https://drive.google.com/file/d/1UBgt4cfEWrtO6DkeT8boJlXNJqLDL3kG/view?usp=sharing",
      "_blank"
      
    );
  };


function resumeDownload() {

    window.open(
        "https://drive.google.com/file/d/1oz6iAYLQFGl9ZkMi67-BbOBjtJouPi2s/view?usp=sharing"
    );
}

// document.querySelector("#resume-link-2").addEventListener("click", ()=>{
//     window.open(
//        "https://drive.google.com/file/d/1oz6iAYLQFGl9ZkMi67-BbOBjtJouPi2s/view?usp=sharing",
//       "_blank"
//     );
// })


let githubBtn = document.querySelector("#contact-github");

githubBtn.addEventListener('click', function () {

    window.open(
        "https://github.com/amolkpatil22",
        "_blank"
    );

})

let linkedinBtn = document.querySelector(".fa-linkedin");

linkedinBtn.addEventListener('click', function () {

    window.open(
        "https://linkedin.com/in/amol-patil-73b82926a",
        "_blank"
    );

})

let githubBtn2 = document.querySelector("#footer-github");

githubBtn2.addEventListener('click', function () {

    window.open(
        "https://github.com/amolkpatil22",
        "_blank"
    );


})

let linkedinBtn2 = document.querySelector("#footer-linkedin");

linkedinBtn2.addEventListener('click', function () {

    window.open(
        "https://linkedin.com/in/amol-patil-73b82926a",
        "_blank"
    );

})


let contactBtn = document.querySelector("#contact-btn");

contactBtn.addEventListener('click', function () {

    window.location.href = '#contact';

})





let closeBtn = document.querySelector(".closebtn");
let openBtn = document.querySelector(".openbtn");

openBtn.addEventListener("click", function () {
    document.querySelector("#side-window").style.width = "250px";
})

closeBtn.addEventListener("click", function () {
    document.querySelector("#side-window").style.width = "0";
})


// let btnform = document.querySelector("#form-submit");

// btnform.addEventListener('click', function () {

//     window.location.href = "https://amolkpatil22.github.io/"

// })


let navbarColor = document.querySelectorAll(".nav-link");

console.log(navbarColor);
for (let nav of navbarColor) {

    nav.addEventListener("click", function () {

        let curr = document.querySelector("#nav-bar a.home");
        curr.classList.remove('home');
        nav.classList.add("home");

    })

}

function shopCartGithub() {

    window.location.href = "https://github.com/amolkpatil22/stoic-sack-3017";

}

function shopCartVideo() {

    window.location.href = "https://shopcartrct211.netlify.app/";

}

function icacGithub() {

    window.location.href = "https://github.com/amolkpatil22/gutsy-sheet-7629";

}

function icacVideo() {

    window.location.href = "https://icachealthcare.netlify.app/";

}


function edukinGithub() {

    window.location.href = "https://github.com/ashishsen003/remarkable-ice-6564";

}

function edukinLive() {

    window.location.href = "https://zingy-heliotrope-1fffbb.netlify.app/";

}

function wordWiseGithub() {

    window.location.href = "https://github.com/amolkpatil22/high-fruit-9045";

}

function wordWiseLive() {

    window.location.href = "https://venerable-dodol-cb93c5.netlify.app/";

}




