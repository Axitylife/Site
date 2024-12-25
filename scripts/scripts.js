/*CreateElements*/ 
const burgerMenu = document.querySelector(".burger");
const header = document.querySelector(".burgerMenuOpen");
let selecterBurger = false;

let newElement = document.createElement('div');
newElement.textContent = 'Set Text';


burgerMenu.onclick = function()
{
    if(!selecterBurger)
        {
            header.classList.add('test');
            selecterBurger = true;
            header.append(newElement);
        }
    else
        {
            header.classList.remove('test');
            selecterBurger = false;
            header.removeChild(newElement);
        }
};



