import { LitElement, html, css } from "lit";


export class Producto extends LitElement {

    static properties = {
        nombre: { type: String },
        precioUnitario: { type: Number },
        cantidad: { type: Number }
    };
    
    constructor() {
        super();
        this.nombre = "Laptop";
        this.precioUnitario = 500;
        this.cantidad = 1;
    }

    _aumentar() {
        this.cantidad++;
    }

    _disminuir() {
        if (this.cantidad > 1) {
            this.cantidad--;
        }
    }

    render() {
        return html`
            <div>
                <h2>Producto: ${this.nombre}</h2>
                <input type="text" .value="${this.nombre}" @input="${e => this.nombre = e.target.value}" />
                <p>Precio Unitario: $${this.precioUnitario}</p>
                <p>Cantidad: ${this.cantidad}</p>
                <p>Total: $${this.precioUnitario * this.cantidad}</p>
            </div>

            <div>
                <button @click="${this._disminuir}">-</button>
                <button @click="${this._aumentar}">+</button>
            </div>
        `;
    }
}

customElements.define('producto-card', Producto);