// on attend que la page soit chargee
document.addEventListener("DOMContentLoaded", function () {
  let colorBox = document.getElementById("color-box");
  let bouton = document.getElementById("change-color-btn");

  // fonction qui donne une couleur au hasard (ex : #A3F20C)
  function getRandomColor() {
    let lettres = "0123456789ABCDEF";
    let couleur = "#";
    for (let i = 0; i < 6; i++) {
      couleur = couleur + lettres[Math.floor(Math.random() * 16)];
    }
    return couleur;
  }

  // quand on clique sur le bouton on change la couleur de la boite
  bouton.addEventListener("click", function () {
    let nouvelleCouleur = getRandomColor();
    colorBox.style.backgroundColor = nouvelleCouleur;
    console.log(nouvelleCouleur);
  });
});
