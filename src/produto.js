import { LightningElement, api } from "lwc";
const produto = new Object
produto.lapis = 'Lapis azul'
produto.preco = 5.00 

export default class Produto extends LightningElement {
// lapis = produto.lapis
// preco = produto.preco
@api lapis
@api preco
}