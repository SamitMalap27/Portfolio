function setProgress(id, percent) {
  const progressBar = document.getElementById(id);
  progressBar.style.width = percent + '%';
}
setProgress("sbox1", 70)
setProgress("sbox2", 60)
setProgress("sbox3", 60)
setProgress("sbox4", 70)
setProgress("sbox5", 85)
setProgress("sbox6", 65)


const scriptURL = 'https://script.google.com/macros/s/AKfycbwTrBLg42vh1OTg9B-TnI1hak5puOzmz-r00T2m_8xp9ygwoqU4uszwOKsDmwhe11Jxog/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML=" Message sent successfully";
      setTimeout(()=>{
        msg.innerHTML="";
      },5000)
      form.reset()
    })
    .catch(error => {
      msg.innerHTML=" Message not sent";
      setTimeout(()=>{
        msg.innerHTML="";
      },5000)
      form.reset()
    })
})
let logo=document.querySelector(".logo")
let menu=document.getElementById("hiddenmenu");
function closemenu(){
  menu.style.display="none"
  // logo.style.display="inline"
}
function showmenu(){
  menu.style.display="block"
}