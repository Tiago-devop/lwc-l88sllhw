import { LightningElement } from "lwc";

const account = new Object;
account.name = 'Tiago'
account.type = 'Seila'
account.rating = 'algum ai'
account.website = 'www.selouco.com'
account.phone =  123123123
const {name, type, rating, website, phone } = account
const pokemons = [
  {cod: 1, nome:'Pikachu', tipo: 'eletrico', nivel: 17},
  {cod: 2, nome:'Charmander', tipo: 'fogo', nivel: 30},
  {cod: 3, nome:'Chicorita', tipo: 'planta', nivel: 21},
  {cod: 4, nome:'Mew', tipo: 'psiquico', nivel: 98},
  {cod: 5, nome:'Charizard', tipo: 'fogo', nivel: 15},
  {cod: 6, nome:'Taurus', tipo: 'normal', nivel: 37},
]
export default class App extends LightningElement {
  name = name
  type = type
  rating = rating
  website = website
  phone = phone
  pokemons = pokemons
}
