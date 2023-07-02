const template = document.createElement("template");
template.innerHTML = `
                    <style>
                    /* @import url(); */
                        div {
                            border: 2px solid purple;
                            padding: 3rem;
                            margin: 3rem;
                        }

                        h2 {
                            color: gray;
                        }

                        :host {
                            /* for the shadow root */
                            background-color: lavender;
                            display: block; 
                        }

                        :host(big-bang) {
                            background-color: cornflowerblue;
                        }

                        :host-context(main) {
                            background-color: gold;
                        }

                        ::slotted(h2) {
                            font-size: 3rem;
                            color: purple !important;  /* applied before main.css */
                        }

                        slot {
                            /* does not work */
                        }
                        
                    </style>
					<div>
						<h2 part="topper">Big Bang Theory</h2>
						<slot name="title">Default text</slot>
						<slot name="list">list slot</slot>
					</div>
					`;

class BigBang extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        // let div = document.createElement("div");
        // div.textContent = "hi";
        // shadowRoot.append(div);
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

customElements.define("big-bang", BigBang);
// <big-bang>
// must have hypen in the name.
