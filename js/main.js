
const btns = document.querySelectorAll(".home .btns button");
const sec = document.querySelectorAll(".sec");

// console.log(sec[0])
btns.forEach((e,i)=>{
e.addEventListener("click",()=>{
    sec.forEach((e)=>{
        e.setAttribute("hidden","true");
    })
    console.log(i);
    document.querySelector(".home").setAttribute("hidden","true")
    sec[i].removeAttribute("hidden");
});
});


let qots = [
    ["بطاطا مسلوقة","بطاطا مشوية","بطاطا مذبوحة","بطاطزاية"],
    ["ليمون","ليموناضة","ليمونهاضة","لايم"],

];
                // ضيف على كيفك لاوييي
let tiger = qots[0].concat(qots[1]); 

qots.push(tiger);


const btn_sec = document.querySelectorAll(".btn_sec");
const save_content = document.getElementById("save_content");

btn_sec.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        let rand = Math.floor(Math.random() * qots[i].length)
        sec.forEach((e)=>{
            e.setAttribute("hidden","true");
        });

        document.getElementById("save").removeAttribute("hidden");
        save_content.innerHTML = qots[i][rand];
    });
});

const next = document.getElementById("next");
const castum_content = document.getElementById("castum_content");
const castum = document.getElementById("castum");
next.addEventListener("click",()=>{
    next.parentElement.parentElement.parentElement.setAttribute("hidden","true");
    castum.removeAttribute("hidden");
    castum_content.innerHTML = save_content.innerHTML;
});

const cards = document.querySelectorAll(".card");

const castums_btns = document.querySelectorAll(".castums button");

castums_btns.forEach((e)=>{
    e.addEventListener("click",()=>{

        document.getElementById("items").style.display = "flex";
    });
});


document.getElementById("close").addEventListener("click",()=>{document.getElementById("items").style.display = "none"});

const btn_mode = document.getElementById("btn_mode");
const back_mode = document.getElementById("back_mode");
const sun = document.getElementById("sun"); 
const moon = document.getElementById("moon"); 
let check = true;
btn_mode.addEventListener("click",()=>{
  if(check)
  {
        back_mode.style.translate = "40px 0";
        sun.style.color = "#e5f1fb";
        moon.style.color = "#2f4e6b";
        check = false;
  }
  else{
      back_mode.style.translate = "0 0";
    sun.style.color = "#2f4e6b";
    moon.style.color = "#e5f1fb";
    check = true;
  }
});


