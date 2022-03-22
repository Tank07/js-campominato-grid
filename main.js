// Consegna
// Generare una griglia di gioco quadrata, simile a quella dello screenshot, in cui ogni cella contiene un numero tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Bonus
// Permettere all'utente di indicare una difficoltà in base alla quale viene generato un numero variabile di celle:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

let grid = document.getElementById("grid");

for (let i = 1; i <= 100; i++) {

    let box = document.createElement("div");

    box.innerHTML += i;
    box.classList.add("box");
    grid.appendChild(box);

}



function myGenera() {        

        let difficulty = document.getElementById("difficolta").value;

        if ( difficulty == "facile" ){

          for (let i = 1; i <= 100; i++) {

            document.getElementById("contenitoreBombe").innerHTML += `
      <div class="diecibox text-center fs-2">
        <div class="py-5 bg-success">${i}</div>
      </div>`;

          }

        } else if ( difficulty == "medio" ){

          for (let i = 1; i <= 81; i++) {

            document.getElementById("contenitoreBombe").innerHTML += `
      <div class="ottobox text-center fs-2">
        <div class="py-5 bg-danger">${i}</div>
      </div>`;

          }

        } else if( difficulty == "difficile" ){

          for (let i = 1; i <= 49; i++) {

            document.getElementById("contenitoreBombe").innerHTML += `
      <div class="cinquebox text-center fs-2">
        <div class="py-5 bg-primary">${i}</div>
      </div>`;
    
          }
        }
}
