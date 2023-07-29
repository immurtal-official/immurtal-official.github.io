class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
            
            <br>
            Leave us a message by <a href="https://xh2uqicvmvy.typeform.com/to/jo6WmwDq">filling in this form</a>.
            <br>
            <br>
            <div class="footer_copyright">Copyright &copy 2023 IMMURTAL PBLLC. All Rights Reserved. </div>
            </p>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
