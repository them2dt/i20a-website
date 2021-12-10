//Übergang wird ausgeführt wenn das Fenster geladen wird
document.addEventListener("DOMContentLoaded", function() {

    //Get verschiedene HTML-Elemente
    const transitionElement = document.querySelector('.transition');
    const anchors = document.querySelectorAll('.transitionbutton'); 

    //Entfernt den default Status "is-active", Animation dauert 500ms lang (0.5s)
    setTimeout(() => {
        transitionElement.classList.remove('is-active');
    }, 500);

    //Geht jeden Link durch mit ID "trans"
    for(let i = 0; i < anchors.length; i++){
        const anchor = anchors[i];
        
        //EventListener für jeden Link
        anchor.addEventListener('click', e => {

            //Verhindert das Laden einer Seite
            e.preventDefault();

            //Gibt eine Referenz auf die HTML-Seite, auf die der Link zeigt
            let target = e.target.href;

            //Aktiviert die Animation
            transitionElement.classList.add('is-active');
            
            //Nachdem die Animation fertig ist (500ms), wird die nächste Seite angezeigt
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    }
});