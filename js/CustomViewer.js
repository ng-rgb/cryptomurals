class CustomViewer extends HTMLElement {
  constructor() {
    super();
    this.url;
    this.urlImg;
    this.top;
    this.left;
    this.width = '250px';
    this.height = '350px';
    this.viewH = '210px';
    this.viewW = '200px';
  }

  static get observedAttributes() {
    return ['url', 'urlimg', 'top', 'left'];
  }

  attributeChangedCallback(nameAttr, oldValue, newValue) {
    console.log(newValue);
    switch (nameAttr) {
      case 'url':
        this.url = newValue;
        break;
      case 'urlimg':
        this.urlImg = newValue;
        break;
      case 'top':
        this.top = `${newValue}px`;
        break;
      case 'left':
        this.left = `${newValue}px`;
        break;
    }
  }

  handlerClickViewer() {
    window.location.assign(`${this.url}`);
  }

  connectedCallback() {
    this.innerHTML = `
    <div 
        style="
            color: white;
            position: absolute;
            top: ${this.top};
            left: ${this.left};
            z-index: 999;
        "
    >
        <div
            style="
            height: ${this.height};
            width: ${this.width};
            background-image: linear-gradient(90deg, rgba(11,185,225,0.8) 0%, rgba(109,220,155,0.8) 45%, rgba(109,220,155,0.8) 100%);
            border: 1px solid white;
            padding: auto;
            display: flex;
            margin: auto;
            flex-direction: column;
            "
        >
            <img
                style="
                background-color: white;
                height: ${this.viewH};
                width: ${this.viewW};
                margin: auto;
                "
                src=${this.urlImg}
            >
            <div
                style="
                    font-family: Monoton;
                    font-size: 30px;
                    color: #000000;
                    text-align: center;
                    border: 5px solid #000000;
                    border-radius: 20px;
                    width: ${this.viewW};
                    margin: auto;
                "
            >
                VIEW
            </div>
    </div>`;
    this.onclick = this.handlerClickViewer;
  }
}

window.customElements.define('custom-viewer', CustomViewer);
