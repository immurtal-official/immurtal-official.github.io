class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
            
            <p>Created by <a href="https://dayuantan.github.io/AboutMe/">Dayuan Tan</a> and <a href="https://www.deer.ma/">Deer Ma</a> with love.
            <br>
            Leave me a message by <a href="https://xh2uqicvmvy.typeform.com/to/jo6WmwDq">filling in this form</a>.
            <br>
            <br>
            <div class="footer_copyright">Copyright &copy 2023 D Future Exploration LLC. All rights reserved. </div>
            </p>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
