let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligar:function() {
        console.log("VRUM VRUM!");
    },
    acelerar:function() {
        console.log("Riiiiiihhhih");
    }
};

console.log( "Modelo: "+carro.modelo );

carro.ligar();
carro.acelerar();