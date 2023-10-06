var tabla = new Array();
tabla[0] = new Array(" ", "AYUNTAMIENTO", "POLIDEPORTIVO", "INSTITUTO", "MERCADO", "COLEGIO", "TOTAL");
tabla[1] = new Array("P1");
tabla[2] = new Array("P2");
tabla[3] = new Array("P3");
tabla[4] = new Array("P4");

function rellenarVot(table) {
    var votos = 0;
    var voto = 0;
    for (var i=1 ; i<5 ; i++) {
        for (var j=1 ; j<=5 ; j++) {
            voto = Math.round(Math.random()*5+5);
            table[i][j]= voto;
            votos+=voto;
        }
        table[i][j]= votos;
        votos = 0;
    }
    return table;
}
console.table(rellenarVot(tabla));


