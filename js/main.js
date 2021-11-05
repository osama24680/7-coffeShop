navbar = document.querySelector(".navbar");
menuBtn=document.querySelector("#menu-btn");
cartBtn=document.querySelector("#cart-btn");
searchBtn=document.querySelector("#search-btn");


menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active")
    searchForm.classList.remove("active")
    cartItem.classList.remove("active")
})
    


searchForm =document.querySelector(".search-form")
searchBtn.addEventListener("click", () =>{
    searchForm.classList.toggle("active")
    navbar.classList.remove("active")
    cartItem.classList.remove("active")
})



cartItem =document.querySelector(".cart-items-container")
cartBtn.addEventListener("click", () =>{
    cartItem.classList.toggle("active")
    navbar.classList.remove("active")
    searchForm.classList.remove("active")
})
 


window.onscroll =() =>{
    navbar.classList.remove("active")
    searchForm.classList.remove("active")
    cartItem.classList.remove("active")
}
