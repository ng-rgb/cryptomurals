class LinesSVG extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <svg
                id="e78VLMXScYN1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns-xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1536 722"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
            >
                <path
                    class="lines-mobile"
                    d="M1,11c0,0-1-13,2-7c5,12,3-.3333,8-15c4-11,12,14,17,35"
                    transform="matrix(19.469805-2.016581 1.807209 17.44835 61.693702 425.531711)"
                    fill="rgba(0,0,0,0)"
                    stroke="#6d6d6d"
                    stroke-width="0.1"
                />
                <path
                    class="lines-mobile"
                    d="M0,-10c70-60,90-100,100-50c10,60,50-40,40,20"
                    transform="matrix(10.008656 0 0 7.223689 23.790361 649.819238)"
                    fill="rgba(0,0,0,0)"
                    stroke="#6d6d6d"
                    stroke-width="0.2"
                />
            </svg>`;
  }
}

window.customElements.define('lines-svg', LinesSVG);
