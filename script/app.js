//Get verschiedene HTML-Elemente
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultBoardElement = document.getElementById('result');
const againButtonElement = document.getElementById('again-btn');
const homeButtonElement = document.getElementById('home-btn');
const introductionElement = document.getElementById('einleit');
const correctTextElement = document.getElementById('correct')
const wrongTextElement = document.getElementById('wrong');

//Counter, der die Anzahl Versuche zählt
let attemptsCounter = 0;

//Counter, der die richtigen Antworten zählt
let correctQuestionCounter = 0;

//shuffledQuestions wird eine zufällige Frage sein, currentQuestionIndex ist der curIndex vom questions Arrays
let shuffledQuestions, currentQuestionIndex;

//Verschiedene EventListener für die Buttons
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {

    resetText();

    //Entfernt wieder die Klasse "no-click" damit man die Buttons wieder anklicken kann
    document.getElementById('answer-buttons').classList.remove('no-click');

    currentQuestionIndex++;
    setNextQuestion();
});
againButtonElement.addEventListener('click', resetGame);
homeButtonElement.addEventListener('click', home)

//startGame startet das Spiel und wird durch den "Start" Button ausgelöst
function startGame(){

    //Erhöht die Anzahl Versuche
    attemptsCounter++;

    //Versteckt die Einleitung beim Start des Spiels
    introductionElement.classList.add('hidden');

    //Bei Spielstart wird der Counter auf 0 gesetzt
    correctQuestionCounter = 0;
    startButton.classList.add('hide');

    //Gibt eine zufällige Frage zurück und speichert sie in shuffledQuestions
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    questionElement.classList.remove('hide');
    setNextQuestion()
}

//Bereitet alles für das Anzeigen einer Frage vor
function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

//Entfernt alle Items im Container
function resetState(){

    //Versteckt den "Next" Button
    nextButton.classList.add('hide');

    //Entfernt Buttons aus dem Container, solange welche existieren
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

//Zeigt die Frage an der Website an
function showQuestion(question){

    //Ersetzt den default Text durch die Frage
    questionElement.innerText = question.question;

    //Erstellt so viele Buttons wie es Antworten gibt
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        //Erstellt für jeden Button einen EventListener falls er angeklickt wird
        button.addEventListener('click', selectAnswer);

        //Fügt jeden Button in den Container hinzu
        answerButtonsElement.appendChild(button);
    })
}

//Reagiert auf den EventListener eines Antwort-Buttons, Parameter "e" ist der angeklickte Button
function selectAnswer(e){

    //Verhindert das mehrmalige Anklicken einer Antwort
    document.getElementById('answer-buttons').classList.add('no-click');

    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    /*
    Erstellt ein Array, da die Buttons vorher nicht in einem Array gespeichert werden 
    und führt für jeden Button die Funktion setStatusClass aus
    */
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    //Falls die Antwort richtig war wird der Counter erhöht und der dementsprechende Text wird angezeigt
    if(selectedButton.dataset = correct){
        correctQuestionCounter++;
        correctTextElement.classList.remove('hide');
    } else {
        wrongTextElement.classList.remove('hide');
    }

    //Kontrolliert ob noch Fragen übrig sind, falls nicht zeigt es das Resultat-Board an
    if(shuffledQuestions.length > currentQuestionIndex+1){
        nextButton.classList.remove('hide');
    } else {

        //Setzt Timeout damit Richtig/Falsch Text kurz angezeigt wird und nachher wird das Resultat-Board angezeigt
        setTimeout(() => {
            resetText();
            questionContainerElement.classList.add('hide');
            resultBoardElement.classList.remove('hide');
        }, 1000);

    }

    //Ersetzt den default Wert des Resultat-Boards durch Anzahl Fragen und Anzahl richtiger Fragen
    document.getElementById('total-attempts').innerHTML = attemptsCounter;
    document.getElementById('total-question').innerHTML = questions.length;
    document.getElementById('total-correct').innerHTML = correctQuestionCounter;

}

//Setzt für den Button den jeweiligen Status (Richtig oder Falsch)
function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

//Entfernt für den Button den jeweiligen Status (Richtig oder Falsch)
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

//Wird durch den EventListener des Buttons "Try Again" ausgeführt und resettet das Quiz
function resetGame(){
    startButton.classList.remove('hide');
    introductionElement.classList.remove('hidden');
    resultBoardElement.classList.add('hide');

    //Da bei der letzten Frage kein Next-Button erscheint muss man die Buttons hier nochmals resetten
    document.getElementById('answer-buttons').classList.remove('no-click');
}

//Wird durch den Eventlistener des Buttons "Go To Home" ausgeführt und führt den User zum File "index.html"
function home(){
    location.href = "index.html";
}

//Entfernt den Richtig oder Falsch Text auf dem Bildschirm
function resetText(){
    correctTextElement.classList.add('hide');
    wrongTextElement.classList.add('hide');
}

//Array von Fragen mit den jeweiligen Antworten
const questions = [
    {
        question: "Wer entwickelte den Z1?",
        answers: [
            { text: 'Steve Jobs', correct: false },
            { text: 'Elon Musk', correct: false },
            { text: 'Alan Turing', correct: false },
            { text: 'Konrad Zuse', correct: true }
        ]
    },
    {
        question: "Welcher Computer wurde nicht zerstört?",
        answers: [
            { text: 'Z1', correct: false },
            { text: 'Z2', correct: false },
            { text: 'Z3', correct: false },
            { text: 'Z4', correct: true }
        ]
    },
    {
        question: "Durch was wurden die Röhren in den 1950er ersetzt?",
        answers: [
            { text: 'Transistoren', correct: true },
            { text: 'Kartoffeln', correct: false },
            { text: 'Batterien', correct: false },
            { text: 'Elektrorenröhren', correct: false }
        ]
    },
    {
        question: "Wer baute ERMETH, einen der ersten europäischen Computer?",
        answers: [
            { text: 'Max-Planck-Institut', correct: false },
            { text: 'ETH Zürich', correct: true },
            { text: 'University of Cambridge', correct: false },
            { text: 'University of Oxford', correct: false }
        ]
    },
    {
        question: "Welches System wurde eingeführt, um verschiedene Computer kompatibel zu machen?",
        answers: [
            { text: 'System/180', correct: false },
            { text: 'SystemNew', correct: false },
            { text: 'System/360', correct: true },
            { text: 'SystemIBM', correct: false }
        ]
    },
    {
        question: "Was bedeutet ursprünglich die Abkürzung 'HP'?",
        answers: [
            { text: 'Hewlett-Piccard', correct: false },
            { text: 'Howard-Packard', correct: false },
            { text: 'Howard-Piccard', correct: false },
            { text: 'Hewlett-Packard', correct: true }
        ]
    },
    {
        question: "Mit was wurde der Supercomputer 'Illiac IV' bestückt?",
        answers: [
            { text: 'Lithium-Kabel', correct: false },
            { text: 'Array-Prozessoren', correct: true },
            { text: 'Transistoren', correct: false },
            { text: 'Batterien', correct: false }
        ]
    },
    {
        question: "Wer erstellte den ersten Personal Computer (PC)?",
        answers: [
            { text: 'Apple Computer', correct: true },
            { text: 'IBM', correct: false },
            { text: 'Steve Wozniak', correct: true },
            { text: 'HP', correct: false }
        ]
    },
    {
        question: "Was hatte der 'Apple Macintosh', was zu der Zeit speziell war?",
        answers: [
            { text: 'Lenkrad', correct: false },
            { text: 'Maus', correct: true },
            { text: 'Ventilator', correct: false },
            { text: 'Mikrowelle', correct: false }
        ]
    },
    {
        question: "Was war das Usenet?",
        answers: [
            { text: 'ein weltweites Netzwerk', correct: true },
            { text: 'eine Organisation', correct: false },
            { text: 'ein Betriebssysten', correct: false },
            { text: 'Ein benutzbares Netz', correct: false }
        ]
    },
    {
        question: "Was war die erste registrierte Domain des Internets?",
        answers: [
            { text: 'bing.com', correct: false },
            { text: 'google.com', correct: false },
            { text: 'nordu.net', correct: true },
            { text: 'wikipedia.org', correct: false }
        ]
    },
    {
        question: "Warum waren die Intel Pentium Prozessoren kein wirtschaftlicher Erfolg?",
        answers: [
            { text: 'Sie waren zu schwer', correct: false },
            { text: 'zu teuer', correct: true },
            { text: 'Sie gingen schnell kaputt', correct: false },
            { text: 'Konkurrenz war besser', correct: true }
        ]
    },
    {
        question: "Wer brachte den ersten 64-Bit-Prozessor auf den Markt?",
        answers: [
            { text: 'HP', correct: false },
            { text: 'AMD', correct: false },
            { text: 'Apple', correct: true },
            { text: 'Intel', correct: false }
        ]
    },
    {
        question: "Welches ist KEIN Betriebssystem?",
        answers: [
            { text: 'Apple', correct: false },
            { text: 'Windows', correct: false },
            { text: 'Linux', correct: false },
            { text: 'Intel', correct: true }
        ]
    }
];