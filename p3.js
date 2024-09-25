var addnotes = document.querySelector(".addnotes")
var overlay = document.querySelector(".overlay")
var popbox = document.querySelector(".popbox")
var closebtn = document.getElementById("close")
var contianer = document.querySelector(".container")
addnotes.addEventListener("click",function(){
    overlay.style.display="block"
    popbox.style.display="block"
    overlay.style.transition="1s"
    popbox.style.transition="1s"
})
closebtn.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popbox.style.display="none"
})
var detail = document.getElementById("notesdetail")
var notesheading= document.getElementById("heading-note")
var addbtn = document.getElementById("Addbtn")
addbtn.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","notes")
    div.innerHTML=`<h1>${notesheading.value}</h1>
    <p>${detail.value}</p>
    <button onclick="deleted(event)">close</button>`
    contianer.append(div)
    overlay.style.display="none"
    popbox.style.display="none"
    notesheading.value=""
    detail.value=""
}
)
function deleted(event)
{
    event.target.parentElement.remove()
}
