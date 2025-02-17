var con= document.querySelector("#cover")
var like= document.querySelector("i")

con.addEventListener("dblclick",function(){
    like.style.transform= "translate(-50%,-50%) scale(1.5)";
    like.style.opacity= 0.7

    // setTimeout(function(){
    //     like.style.opacity=0;
    // },1000);
    setTimeout(function(){
        like.style.transform= "translate(-50%,-50%) scale(0)";
    },800);
});

