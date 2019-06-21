document.addEventListener('DOMContentLoaded', () => {

  console.log('Connected')
  const typeWriter = document.getElementById('type-writer')
  const dataText = typeWriter.getAttribute('data-text')
  const mainNavLinks = document.querySelectorAll('nav div.buttons a')

  let count = 0
  const dataTextLength = dataText.length

  function setText(){
    setTimeout(() => {
      typeWriter.textContent +=dataText.charAt(count)
      count++
      if(count <=dataTextLength){
        setText()
      }
    },100)
  }
  setText()
  
  window.addEventListener('scroll', function () {
    const fromTop = window.scrollY
    mainNavLinks.forEach(link => {
      const section = document.querySelector(link.hash)

      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('current')
      } else {
        link.classList.remove('current')
      }
    })
  })














})
