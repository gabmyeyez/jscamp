class DevJobsAvatar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // Creamos Shadow DOM
  }

  createURL(service, username) {
    return `https://unavatar.io/${service}/${username}`;
  }

  render() {
    // Ahora usamos shadowRoot en lugar de innerHTML
    const service = this.getAttribute("service") ?? "github";
    const username = this.getAttribute("username") ?? "gabmay";
    const size = this.getAttribute("size") ?? 40;
    const URL = this.createURL(service, username);
    this.shadowRoot.innerHTML = `
        <style>
          img {
            width: ${size}px;
            height: ${size}px;
            border-radius: 9999px;
          }
        </style>
  
        <img
          src="${URL}"
          alt="Avatar de ${username}"
          class="avatar"
        />
      `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("devjobs-avatar", DevJobsAvatar);
