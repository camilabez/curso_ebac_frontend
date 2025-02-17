//classe abstrata
function Garrafa(material, marca) {
  let _material = material;
  let _marca = marca;
  this.getMaterial = function () {
    return _material;
  };
  this.getMarca = function () {
    return _marca;
  };
}
//classe concreta 1
function GarrafaPet(marca) {
  Garrafa.call(this, "Pet", marca);
}
//classe concreta 2
function GarrafaRetornavel(marca) {
  Garrafa.call(this, "Retornavel", marca);
}

//criação de objetos
const garrafaPetCocaCola = new GarrafaPet("cocaCola");
const garrafaRetornavelCocaCola = new GarrafaRetornavel("cocaCola");
const garrafaPetPepsi = new GarrafaPet("pepsi");
const garrafaRetornavelPepsi = new GarrafaRetornavel("pepsi");

console.log(
  " Marca: " +
    garrafaPetCocaCola.getMarca() +
    " Material: " +
    garrafaPetCocaCola.getMaterial()
);
console.log(
  " Marca: " +
    garrafaRetornavelCocaCola.getMarca() +
    " Material: " +
    garrafaRetornavelCocaCola.getMaterial()
);
console.log(
  " Marca: " +
    garrafaPetPepsi.getMarca() +
    " Material: " +
    garrafaPetPepsi.getMaterial()
);
console.log(
  " Marca: " +
    garrafaRetornavelPepsi.getMarca() +
    " Material: " +
    garrafaRetornavelPepsi.getMaterial()
);
