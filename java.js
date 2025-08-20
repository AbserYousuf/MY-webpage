let content=document.querySelector(".content-filler")
let boxwidth=content.querySelector(".box1").offsetWidth
function scrolleft(){
  content.scrollBy({
    left:-boxwidth*2,
    top:0,
    behavior:"smooth"
  })
}
function scrollright(){
  content.scrollBy({
    left:boxwidth*2,
    top:0,
    behavior:"smooth"
  })
}
let decideTotoggle1=document.body.querySelector(".question1")
let activeToggle1=document.body.querySelector(".question1-content")
function Activetoggle(){
    if (activeToggle1.style.display=="none" || activeToggle1.style.display==""){
        activeToggle1.style.display="block"
    }
    else {
        activeToggle1.style.display="none"
    }
}
let decideTotoggle2=document.body.querySelector(".question2")
let activeToggle2=document.body.querySelector(".question2-content")
function CheckAnother(){
  if (activeToggle2.style.display=="none" || activeToggle2.style.display==""){
    activeToggle2.style.display="block"
}
else {
    activeToggle2.style.display="none"
}
}
let decideTotoggle3=document.body.querySelector(".question3")
let activeToggle3=document.body.querySelector(".question3-content")
function Check1(){
  if (activeToggle3.style.display=="none" || activeToggle3.style.display==""){
    activeToggle3.style.display="block"
}
else {
    activeToggle3.style.display="none"
}
}
let decideTotoggle4=document.body.querySelector(".question4")
let activeToggle4=document.body.querySelector(".question4-content")
function Check2(){
  if (activeToggle4.style.display=="none" || activeToggle4.style.display==""){
    activeToggle4.style.display="block"
}
else {
    activeToggle4.style.display="none"
}
}
decideTotoggle1.addEventListener("click",Activetoggle)
decideTotoggle2.addEventListener("click",CheckAnother)
decideTotoggle3.addEventListener("click",Check1)
decideTotoggle4.addEventListener("click",Check2)
let checkEmail=document.body.querySelector(".Email")
let togglebutton=document.body.querySelector(".get-started a ")

togglebutton.addEventListener("click",function (event) {
 
  if(checkEmail.value.trim()==""){
    event.preventDefault()
     checkEmail.focus()
  }

});
let checkEmail1=document.body.querySelector(".work2 ")
let togglebutton1=document.body.querySelector(".get-started1 a") 
togglebutton1.addEventListener("click",function (event) {
 
  if(checkEmail1.value.trim()==""){
    event.preventDefault()
     checkEmail1.focus()
  }
});
