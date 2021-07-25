const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".icon-close")
const openBtn = document.querySelector(".icon-open");

closeBtn.addEventListener("click", function (){
    sidebar.classList.add("sidebar--closed");
    sidebar.classList.remove("sidebar--opened");
    closeBtn.style.display="none"
    openBtn.style.display="block"
});
openBtn.addEventListener("click", function (){
    sidebar.classList.add("sidebar--opened")
    sidebar.classList.remove("sidebar--closed")
    openBtn.style.display="none"
    closeBtn.style.display="block"
});
