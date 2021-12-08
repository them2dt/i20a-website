const navSlide = () => {

    //Get verschiedene HTML-Elemente
    const burgerElement = document.querySelector('.burger');
    const navElement = document.querySelector('.links');
    const navLinksElement = document.querySelectorAll('.links li');

    //Animation Navigationsleiste
    burgerElement.addEventListener('click', () => {
        navElement.classList.toggle('nav-active');
        
        //Animation einzelne Links
        navLinksElement.forEach((link, index) => {

            //Falls eine Animation bereits existiert
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.55}s`;
            }
        });

        //Animation Burger
        burgerElement.classList.toggle('toggle');
    });
}

//Startet die Funktion
navSlide();