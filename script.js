// script.js
window.onload = function() {
    const tabBtn = document.querySelectorAll(".button");
    for (let i=0; i < tabBtn.length; i++) {
        tabBtn[i].addEventListener("click", function (event){  
            const monitor = document.querySelector(".monitor");
            monitor.innerHTML =  monitor.innerHTML + event.target.dataset.id;
        })
    }
    const btnEgal = document.querySelector(".btn-egal");
    btnEgal.addEventListener("click", function (event){
        const monitor =  document.querySelector(".monitor");
        monitor.innerHTML = eval(monitor.innerHTML);
        
    })
    
    
    
    
    
    
    
    // You can add more JavaScript code here
};

