import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("demo")
class DemoElement extends LitElement {
  constructor() {
    super();
    this.num = 12; 
  }

  connectedCallback(): void { 
    console.log("added to DOM!");
  }

  static styles = css` 
    h1 {
      color: red; 
    } 
  `;

  @property()
  num: number;

  render() {
    return html`
      <h1>Welcome!</h1>
      <p>my number is: ${this.num}</p>
    `;
  }
}

