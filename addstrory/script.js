var arr= [
    {dp:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww",story:"https://media.istockphoto.com/id/840712470/photo/orient-fashion.jpg?s=612x612&w=0&k=20&c=jRUIec0jC9HvyUAUP2zOJDRll27-yDkRy4jPQkRRiHM="},
    {dp:"https://media.istockphoto.com/id/1350431068/photo/young-beautiful-woman-wearing-beige-sweater.jpg?s=612x612&w=0&k=20&c=JWEa1yJzbmZ-Vdj4CKXZPcVWuw5jBA8L4b0Twck8cZk=",story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://media.istockphoto.com/id/1283895174/photo/beautiful-indian-young-hindu-bride.jpg?s=612x612&w=0&k=20&c=IzzYJcrvQSKudQmAq4u_or7vPURsFr-ij0U4O6-01OQ=",story:"https://media.istockphoto.com/id/1420497987/photo/portrait-of-caucasian-millennial-woman-in-autumn-fashion-clothes-standing-with-coffee-paper.jpg?s=612x612&w=0&k=20&c=qVAgFx5NDx_ldeCQ2sloL9rZ8fQNmMMQw9LyrZ_xKSc="},
    {dp:"https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww"}
]

var stories = document.querySelector("#stories")
var clutter = ""

arr.forEach(function(elem,idx){
   clutter += `<div class="story">
   <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})


stories.innerHTML= clutter;

stories.addEventListener("click",function(dets){
   document.querySelector("#fullscreen").style.display = "block"      //target story-popup
   document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`

  setTimeout(function(){
    document.querySelector("#fullscreen").style.display = "none" 
  },3000)

});
