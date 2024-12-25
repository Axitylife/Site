/*CreateElements*/ 
const burgerMenu = document.querySelector(".burger");
const header = document.querySelector(".burgerMenuOpen");
let selecterBurger = false;



burgerMenu.onclick = function()
{
    if(!selecterBurger)
        {
            header.style.display = 'block';
            selecterBurger = true;
        }
    else
        {
            header.style.display = 'none';
            selecterBurger = false;
        }
};



