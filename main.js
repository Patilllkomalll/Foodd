const menuBTN = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav_links");

const menuBTNIcon = menuBTN.querySelector("i");

menuBTN.addEventListener("click", (e) => {

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBTNIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

});     

document.querySelectorAll('.order_card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('selected');
    });
});
