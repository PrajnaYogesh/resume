const volume = document.getElementById('vol')
const email = document.getElementById('email-click')
const phone = document.getElementById('phone-click')
const workExp = document.querySelector(".workArrow")
const company = document.querySelector('.companies')
let myWindow;
const projectDetails = document.querySelector(".projectArrow")
const pro = document.querySelector('.pros')

const switchM = document.querySelector('.switch-mode')
const mContainer = document.querySelector('.mainContainer')
const sec =  document.querySelector('.section1')
const pbar =  document.querySelectorAll('.progress-bar')



// function replaceElement() {
//     var newElement = document.createElement('div');
//     newElement.innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
//     var oldElement = document.getElementById('toggleElement"');
//     oldElement.replaceWith(newElement);
//     return;
// }

switchM.addEventListener('click',()=>{
    // replaceElement()
    mContainer.classList.toggle('darkMode');
    sec.classList.toggle('darkMode');

    pbar.forEach((bar)=>{
        bar.classList.toggle('darkMode');
    })
   
 
   
})

volume.addEventListener('click', ()=>{
    volume.style.color='#BED082'
    let mySound = new Audio('./voice/New Recording 2.m4a')
mySound.play()
setTimeout(() => {
    
    volume.style.color='white'
  }, "4000");

})


email.addEventListener('click',()=>{
    window.location.assign("mailto:prajna.yogish4@gmail.com");
})



phone.addEventListener('click',()=>{
    window.location.assign("tel:+tel:+123456789");
})



function newWindow() {
    myWindow = window.open(
      "https://prajna-yogesh.netlify.app/",
      "perscholas",
      "width=800, height=400, resizable=yes, scrollbars=yes, location=yes"
    );
    myWindow.focus();
  }

  workExp.addEventListener('click', ()=>{
company.classList.toggle('toggleDropdown')
  })


  projectDetails.addEventListener('click', ()=>{
    pro.classList.toggle('toggleDropdown')
      })