"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
let DemoElement = class DemoElement extends lit_1.LitElement {
    constructor() {
        super();
        this.num = 12;
    }
    connectedCallback() {
        console.log("added to DOM!");
    }
    render() {
        return (0, lit_1.html) `
      <h1>Welcome!</h1>
      <p>my number is: ${this.num}</p>
    `;
    }
};
DemoElement.styles = (0, lit_1.css) ` 
    h1 {
      color: red; 
    } 
  `;
__decorate([
    (0, decorators_js_1.property)()
], DemoElement.prototype, "num", void 0);
DemoElement = __decorate([
    (0, decorators_js_1.customElement)("demo")
], DemoElement);
//# sourceMappingURL=DemoElement.js.map