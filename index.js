function NegyzetKerulet() {
    var a = parseFloat(document.getElementById("negyzetkera").value);
    //me = MértékEgység
    var me = document.getElementById("negyzetkerme").value;
    var eredmeny = 4 * a;
    var kiiras = eredmeny.toLocaleString() + me;
    document.getElementById("negyzetkereredmeny").value = kiiras;
}
function NegyzetTerulet() {
    var a = parseFloat(document.getElementById("negyzettera").value);
    //me = MértékEgység
    var me = document.getElementById("negyzetterme").value;
    var eredmeny = a * a;
    var kiiras = eredmeny.toLocaleString() + me;
    document.getElementById("negyzettereredmeny").value = kiiras;
}
function KorKerulet() {
    var r = parseFloat(document.getElementById("korkerr").value);
    //me = MértékEgység
    var me = document.getElementById("korkerme").value;
    var eredmeny = 2 * Math.PI * r;
    var kiiras = eredmeny.toLocaleString() + me;
    document.getElementById("korkereredmeny").value = kiiras;
}
function KorTerulet() {
    var r = parseFloat(document.getElementById("korterr").value);
    //me = MértékEgység
    var me = document.getElementById("korterme").value;
    var eredmeny = Math.PI * r * r;
    var kiiras = eredmeny.toLocaleString() + me;
    document.getElementById("kortereredmeny").value = kiiras;
}
function KockaFelszin() {
    var a = parseFloat(document.getElementById("kockafelszina").value);
    //me = MértékEgység
    var me = document.getElementById("kockafelszinme").value;
    var eredmeny = 6 * a * a;
    var kiiras = eredmeny.toLocaleString() + me;
    document.getElementById("kockafelszineredmeny").value = kiiras;
}
function KockaTerfogat() {
    var a = parseFloat(document.getElementById("kockaterfa").value);
    //me = MértékEgység
    var me = document.getElementById("kockaterfme").value;
    var eredmeny = a * a * a;
    var kiiras = eredmeny.toLocaleString() + me;
    document.getElementById("kockaterferedmeny").value = kiiras;
}
function GombFelszin() {
    var r = parseFloat(document.getElementById("gombfelszinr").value);
    //me = MértékEgység
    var me = document.getElementById("gombfelszinme").value;
    var eredmeny = 4 * r * r * Math.PI;
    var kiiras = eredmeny.toLocaleString() + me;
    document.getElementById("gombfelszineredmeny").value = kiiras;
}
function GombTerfogat() {
    var r = parseFloat(document.getElementById("gombterfr").value);
    //me = MértékEgység
    var me = document.getElementById("gombterfme").value;
    var eredmeny = (4 * r * r * r * Math.PI) / 3;
    var kiiras = eredmeny.toLocaleString() + me;
    document.getElementById("gombterferedmeny").value = kiiras;
}