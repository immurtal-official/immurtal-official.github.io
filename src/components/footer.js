class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <hr>
            <p>Created by <a href="https://dayuantan.github.io/AboutMe/">Dayuan Tan</a> and <a href="https://www.deer.ma/">Deer Ma</a> with love.<br>
            Leave me a message by<a href="a form"> filling in this form.</a></p>
            <br>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
