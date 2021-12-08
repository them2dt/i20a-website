//Gibt den grossen Container mit den Inhalten zu den einzelnen Generationen zurück
const allGenerationTextElements = document.getElementById('contgen');

// Funktion wird ausgelöst durch Klicken von Zeitstrahl-Containern
function redirect(ident){

    //Erstellt ein Array mit den einzelnen Generation-Contents und führt eine forEach-Schleife aus
    Array.from(allGenerationTextElements.children).forEach(text => {

        //Fügt allen Gen-Contents die Klasse "hide hinzu", damit der Content verschwindet
        text.classList.add('hide');

        //Falls die mitgegebene ID gleich der ID des Elements ist wird der Content angezeigt
        if(text = document.getElementById(ident)){
            text.classList.remove('hide');
        }
    });

    //Scrollt zur Position des Contents
    window.scrollTo({
        top: 1000,
        behavior: 'smooth'
    });
}

//Wird ausgeführt bei Klicken des "Zeitstrahl" Buttons und scrollt bis zum Anfang des Zeitstrahls
function jumpTimeLine(){

    //Scrollt zur Position des Zeitstrahls
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//Wird ausgeführt bei Klicken des "Nächste Generation" Buttons und entfernt den ursprünglichen Content und zeigt den neuen an
function jumpNext(obj){

    //Scrollt zur Position des Contents
    window.scrollTo({
        top: 1000,
        behavior: 'smooth'
    });

    //Array mit allen Contents
    const array = Array.from(allGenerationTextElements.children);

    //Verstecke den ursprünglichen Content
    obj.parentNode.parentNode.classList.add('hide');

    //Get ID des ursprünglichen Contents und Erhöhung der ID um 1
    let objid = obj.parentNode.parentNode.id;
    objid++;

    //Checkt jedes Element im Array und falls gefunden zeigt Content am Bildschirm an
    for(let i = 0; i < array.length; i++){
        if(array[i].id == objid){
            array[i].classList.remove('hide');
        }
    }
}

function jumpPrevious(obj){

    //Scrollt zur Position des Contents
    window.scrollTo({
        top: 1000,
        behavior: 'smooth'
    });

    //Array mit allen Contents
    const array = Array.from(allGenerationTextElements.children);

    //Verstecke den ursprünglichen Content
    obj.parentNode.parentNode.classList.add('hide');

    //Get ID des ursprünglichen Contents und Erhöhung der ID um 1
    let objid = obj.parentNode.parentNode.id;
    objid--;

    //Checkt jedes Element im Array und falls gefunden zeigt Content am Bildschirm an
    for(let i = 0; i < array.length; i++){
        if(array[i].id == objid){
            array[i].classList.remove('hide');
        }
    }
}