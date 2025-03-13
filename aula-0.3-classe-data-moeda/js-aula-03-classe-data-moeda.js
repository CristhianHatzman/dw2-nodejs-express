// CLASSES NO JAVASCRIPT
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  buzinar() {
    return "beep, beep!";
  }
}
 
// Criando uma instância (objeto) da classe Carro
const carroPopular = new Carro('Fiat', 'Uno', '2012')
console.log(`O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e faz ${carroPopular.buzinar()}`)

const carroEsportivo = new Carro()
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Camaro"
carroEsportivo.ano = "2024"
console.log(`O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e faz ${carroPopular.buzinar()}`)

carroEsportivo.corNeon = "Azul"
carroEsportivo.turbo = function() {
    return "Vrutututummmmmm, o carro está acelerando!!!"
}
console.log(`O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} tem neom da cor ${carroEsportivo.corNeon} e esta ${carroEsportivo.turbo()}`)