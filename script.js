
var outlay=document.querySelector(".lay-outsaid")
var insaid=document.querySelector(".lay-insaid")
var but=document.getElementById("add-popup")
but.addEventListener("click",function(){
    outlay.style.display="block"
    insaid.style.display="block"
})
 var cance=document.getElementById("can")
 cance.addEventListener( "click",function(event){
    event.preventDefault()
    outlay.style.display="none"
    insaid.style.display="none"
 })
 var popone=document.querySelector(".popup-one")
 var add=document.getElementById("add-book")
 var title=document.getElementById("book-title")
 var bookauthor=document.getElementById("book-author")
 var text=document.getElementById("book-textarea")

 add.addEventListener("click",function(event){
       event.preventDefault()
       var div=document.createElement("div")
       div.setAttribute("class","popup-two")
       div.innerHTML=`<h2>${title.value}</h2>
       <h5>${bookauthor.value}</h5>
       <p>${text.value}</p>
       <button onclick="bookdelet(event)">Delete</button>`
       popone.append(div)
        outlay.style.display="none"
        insaid.style.display="none"

 })
 function bookdelet(event){
   event.target.parentElement.remove()
 }