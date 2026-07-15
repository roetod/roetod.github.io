const words=[

"Software Developer",
"Web Designer",
"C# Programmer",
"Security Enthusiast",
"Filmmaker"

];


let i=0;
let j=0;
let current="";
let deleting=false;


function type(){

current=words[i];


if(!deleting){

document.getElementById("typing").textContent=
current.substring(0,j++);

if(j>current.length){

deleting=true;

}

}

else{

document.getElementById("typing").textContent=
current.substring(0,j--);


if(j==0){

deleting=false;
i++;

if(i>=words.length)
i=0;

}

}


setTimeout(type,100);

}


type();







const btn=document.getElementById("theme");


btn.onclick=function(){

document.body.classList.toggle("dark");


if(document.body.classList.contains("dark"))
btn.textContent="☀️";

else
btn.textContent="🌙";


};








const reveal=document.querySelectorAll(".reveal");


function scrollAnimation(){


reveal.forEach(item=>{


let top=item.getBoundingClientRect().top;


if(top < window.innerHeight-100){

item.classList.add("active");

}


});


}


window.addEventListener(
"scroll",
scrollAnimation
);


scrollAnimation();