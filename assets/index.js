//counter effect
let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.sottrai');
let counterPlusElem = document.querySelector('.aggiungi');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

//Parallax effect
document.addEventListener("pointermove", prallax);
function prallax(e){
  this.querySelectorAll('.parallax').forEach(parallax => {
    const speed= parallax.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX*speed)/100;
    const y = (window.innerHeight - e.pageY*speed)/100;

    parallax.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

//Typewrite effect
var i = 0;
    function scrivi()
    {
        var ID = document.getElementById("testo");
        ID.insertAdjacentText("beforeEnd", temp.charAt(i));
        if (i < temp.length - 80)
        {
            i++;
            setTimeout("scrivi()", 20);
        }
    }
     function inizio()
    {
        var ID = document.getElementById("testo");
        temp = ID.innerHTML;
        ID.innerHTML = "";
        scrivi();
    };
