let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbarr');

menu.onclick = () =>
{
  menu.classList.toggle('bi-x');
  navbar.classList.toggle('open');
}


class BiElement extends HTMLElement {
    connectedCallback() {
        this.textContent = 'Custom bi element';
    }
}
customElements.define('bi', BiElement);
