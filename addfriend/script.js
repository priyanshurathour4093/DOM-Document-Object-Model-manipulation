var istatus= document.querySelector("h5")
var addfriend = document.querySelector("#add")
// var removefriend =document.querySelector("#remove")
var check=0

add.addEventListener("click",function(){
   if(check==0){
    istatus.innerHTML="Friends"
    istatus.style.color= "green"
    addfriend.innerHTML="Remove Friend"
    check= 1
   }
   else{
    istatus.innerHTML="Stranger"
    istatus.style.color= "red"
    addfriend.innerHTML="Add Friend"
    check= 0
   }
   
})
// removefriend.addEventListener("click",function(){
//     istatus.innerHTML= "Stranger"
//     istatus.style.color= "red"
// })
