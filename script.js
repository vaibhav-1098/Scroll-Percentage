const bar=document.getElementById("bar");
const pieChart=document.getElementById("pieChart");
let percentage;

document.addEventListener('scroll',( )=>{

    const N = window.scrollY; // scrolled height 
    const D = document.body.scrollHeight - window.innerHeight; // total height 

    if (N<=D){
        percentage=(N/D) * 100
    } else{
        percentage=100;
    }

    // show
    bar.style.width=`${percentage}%`;
    pieChart.innerHTML=percentage.toFixed(0) + "%";
})
