
// beide output Felder als Variable definieren
const outputVorn = document.querySelector(".output-vorn");
const outputHinten = document.querySelector(".output-hinten");

// Funktion, die onsubmit ausgelöst wird
const trennung = () => {
    // input Felder auslesen
    // value von Textfeldern auslesen
    let zeichenkette = document.querySelector("#zeichenkette").value;
    let trennungsposition = document.querySelector("#trennungsposition").value;
    // true or false bei den input type=radio Feldern ausgeben lassen
    let davor = document.querySelector("#davor").checked;
    let danach = document.querySelector("#danach").checked;

    console.log({zeichenkette}, {trennungsposition}, {davor}, {danach});

    // index bestimmen - an welcher Stelle befindet sich das Wort im Satz?
    let index = zeichenkette.indexOf(trennungsposition);
    console.log({index});

    // falls das eingegebene Wort im Feld trennungsposition nicht in der zeichenkette enthalten ist, soll die Funktion gestoppt werden und ein Hinweis im HTML ausgegeben werden.
    if(zeichenkette.includes(trennungsposition) == false){
        outputVorn.innerHTML = "Das Wort muss in dem Satz vorhanden sein. Versuche es noch einmal. <p>Beachte Groß- und Kleinschreibung.</p>"
        outputHinten.innerHTML = " ";
        return;
    }

    // falls das Wort enthalten ist, wird fortgefahren.

    // vorderen Teil abschneiden
    let satzVorn = zeichenkette.slice(0, index);
    // hinteren Teil abschneiden
    let satzHinten = zeichenkette.slice(index);
    console.log({satzVorn}, {satzHinten});

    // da die radio input Felder required sind, MUSS immer eins von beiden ausgewählt werden. Außerdem kann nur maximal eins von beiden ausgewählt werden. Das heißt, wenn davor == true ist, ist automatisch danach == false. Und wenn davor == false ist, ist automatisch danach == true. Daher reicht es, wenn ich nur zwei conditions anspreche:
    // wenn davor == true ist..
    if (davor == true){
        // davor trennen
        // im HTML ausgeben
        outputVorn.innerHTML = satzVorn;
        outputHinten.innerHTML = satzHinten;
    } else {
        // danach trennen (weil davor == false)
        // vorderer teil: es muss erst noch das Wort, das im input Feld trennungsposition eingegeben wurde, hinzugefügt werden
        let satzVornDanach = satzVorn + trennungsposition;
        // hinterer teil: das Wort, das im input Feld trennungsposition eingegeben wurde, muss hier entfernt werden
        let satzHintenDanach = satzHinten.replace(trennungsposition, " ");

        console.log({satzVornDanach}, {satzHintenDanach});

        // im HTML ausgeben
        outputVorn.innerHTML = satzVornDanach;
        outputHinten.innerHTML = satzHintenDanach;
    }
}
