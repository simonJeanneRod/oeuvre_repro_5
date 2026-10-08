let widthcadre = 0.01

function setup() {
        createCanvas(1790/2.5, 1790/2.5);
    createCanvas(1790/2.5, 1790/2.5);


 
}   


function serpentine(x, ystart, yend, longueur, step, weight, color) {
    let largeur = (yend - ystart) / (step + 2) ;
    for (let i = 0; i < step; i++) {


        strokeCap(PROJECT);
        strokeWeight(weight);
        stroke(color);
        line( x, ystart, x + longueur, ystart);
        line( x + longueur, ystart, x + longueur, ystart + largeur);
        ystart += largeur;
        line( x + longueur, ystart, x, ystart);
        line( x, ystart, x, ystart + largeur);
        ystart += largeur;
   

        
    }
}

function cadre(){
    fill(('rgba(215, 216, 214)'));

    noStroke();
    rect(0, 0, width, height * widthcadre);
    rect(0, height * (1 - widthcadre), width, height * widthcadre);
    rect(0, 0, width * widthcadre, height);
    rect(width * (1 - widthcadre), 0, width * widthcadre, height);
}



function draw() {


    epaisseur = 11
    background(('rgba(215, 216, 214)'));
    serpentine(height * widthcadre + epaisseur / 2, width * widthcadre + epaisseur / 2, width - epaisseur - 2, width * 0.13, 22, epaisseur, 'rgba(26, 28, 26)');
    epaisseur = 1
    serpentine(height * widthcadre + epaisseur / 2, width * widthcadre + epaisseur / 2, width - epaisseur - 2, width * 0.13, 22, epaisseur, 'rgba(26, 28, 26)');
    cadre()
    stroke('red')
    strokeWeight(6)
    line(0, height / 2, width, height / 2)

}

