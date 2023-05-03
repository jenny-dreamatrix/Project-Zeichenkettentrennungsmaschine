
const outputVorn = document.querySelector(".output-vorn");
const outputHinten = document.querySelector(".output-hinten");

const trennung = () => {
    // input Felder auslesen
    let zeichenkette = document.querySelector("#zeichenkette").value;
    let trennungsposition = document.querySelector("#trennungsposition").value;

    let davor = document.querySelector("#davor").checked;
    let danach = document.querySelector("#danach").checked;

    console.log({zeichenkette}, {trennungsposition}, {davor}, {danach});

    // index bestimmen - an welcher Stelle befindet sich das Wort im Satz?
    let index = zeichenkette.indexOf(trennungsposition);
    console.log({index});


    if (davor == true){
       let satzVorn = zeichenkette.slice(0, index);
       let satzHinten = zeichenkette.slice(index);
       console.log({satzVorn}, {satzHinten});

       outputVorn.innerHTML = satzVorn;
       outputHinten.innerHTML = satzHinten;

    } else {
        let satzVorn = zeichenkette.slice(0, index);
        let satzHinten = zeichenkette.slice(index);

        let satzVornDanach = satzVorn + trennungsposition;
        let satzHintenDanach = satzHinten.replace(trennungsposition, " ");

        console.log({satzVornDanach}, {satzHintenDanach});

        outputVorn.innerHTML = satzVornDanach;
        outputHinten.innerHTML = satzHintenDanach;
    }

}
