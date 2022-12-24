
// MODAL ///

document.addEventListener("click", function(e){
    if(e.target.classList.contains("productos-item")){
        const src = e.target.getAttribute("src");
    
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById("products-modal"))
        myModal.show();
    }
})




// MODAL ENDS//



// POPUP //

window.addEventListener("load", function(){
    this.setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        700
    )
})

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none"
});


// POPUP ENDS//