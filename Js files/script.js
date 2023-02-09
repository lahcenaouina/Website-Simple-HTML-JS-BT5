function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
let introduction = "HI ! Im Lahcen 😊 Im Web Developer";
let slpited_intro = introduction.split("")
console.log(slpited_intro)

let placeholder_intro = document.querySelector(".intro")
let intro_r =[]
let i = 0 ;
let timeprint = 100;
setInterval(function(){
    if ( i == (introduction.length)){
        timeprint =0
    }
    intro_r.push(slpited_intro[i])
    placeholder_intro.innerHTML = intro_r.join('')
    i++
},timeprint)
placeholder_intro.innerHTML = intro_r.join('')


let card_holder = document.querySelector(".card_holder")

window.onscroll = function () {
    console.log(window.scrollY)
    if ( window.scrollY  >= 0 & window.scrollY < 70)
    {
        card_holder.classList.remove("active")
        card_holder.classList.add("disactive")
    }
    if ( window.scrollY  >= 180 & window.scrollY < 450) {
        card_holder.classList.add("active")
        card_holder.classList.remove("disactive")
    }
    if ( window.scrollY  >= 450){
        card_holder.classList.remove("active")
        card_holder.classList.add("disactive")
    }
  };