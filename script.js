const featureBtn = document.getElementById('feature-btn')
const featureParent = document.querySelector('.features')
const companyBtn = document.getElementById('company-btn')
const companyParent = document.querySelector('.company')
const icon = document.querySelector('.icon')
const nav = document.querySelector('nav')

featureBtn.addEventListener('click', () => {
   featureParent.classList.toggle('active')
})

companyBtn.addEventListener('click', () => {
   companyParent.classList.toggle('active') 
})

icon.addEventListener('click', () => {
   nav.classList.toggle('show')
   icon.classList.toggle('cancel')
})