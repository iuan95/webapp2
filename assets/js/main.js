const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close')
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

const scrollHeader =()=>{
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
                      
}
window.addEventListener('scroll', scrollHeader)

const sections = document.querySelectorAll('section[id]')
const scrollActive = ()=>{
    const scrollY = window.pageYOffset
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')
    
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');
        }
    })
    
}
window.addEventListener('scroll', scrollActive)

const scrollyUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll'): scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollyUp)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__data, .footer__container, .footer_group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})

const cf = document.getElementById('calculate-form'),
    cc = document.getElementById('calculate-cm'),
    ck = document.getElementById('calculate-kg'),
    cm =document.getElementById('calculate-message')

const outp = (e) =>{
    e.preventDefault();
    if(cc.value === '' || ck.value ===''){
        cm.classList.remove('color-green');
        cm.classList.add('color-red');
        cm.textContent = 'Fill in the Height and Weight 👏'

        setTimeout(()=>{
            cm.classList.remove('color-red');
            cm.textContent = '';
        }, 3000, false)

    }
    else{
        const ccm = cc.value / 100,
            ckg = ck.value,
            bmi = Math.round(ckg / (ccm * ccm ));

            if(bmi < 18.5){
                cm.classList.add('color-green');
                cm.textContent = `Your BMI is ${bmi} and you are skinny..+🤦‍♂️`;
            }
            else if(bmi < 25){
                cm.classList.add('color-green');
                cm.textContent = `Your BMI is ${bmi} and you are healthy ..😎😜🐱‍🏍`;
            }
            else{
                cm.classList.add('color-green');
                cm.textContent = `Your BMI is ${bmi} and you are OWERWEIGHT ..🤦‍♀️🤢`;
            }
            setTimeout(()=>{

                cm.textContent = '';
            }, 4000, false)
    }

}
cf.addEventListener('submit', outp)


const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user')
const sendEmail = (e)=>{
    e.preventDefault()
    if(contactUser.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.remove('color-red')
        contactMessage.textContent = "You must enter your email!"
        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 3000)

    }

    else{
        emailjs.sendForm('service_quu5yzx', 'template_elvx3br', '#contact-form', 'hzdn5f4eRU84QHblW')
        .then(()=>{
            contactMessage.classList.add('color-green')
            contactMessage.textContent = "You registered successfully "
            setTimeout(()=>{
                contactMessage.textContent = ''
            }, 3000)
        }, (error)=>{
            alert("OOPS")
        })
        contactUser.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)