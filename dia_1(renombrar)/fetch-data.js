// fetch data from our JSON and show it inside container
const container = document.querySelector(".results-container");
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((jobs) => {
    jobs.forEach((job) => {
      const article = document.createElement("article");
      article.className = "job-card";

      article.dataset.modalidad = job.data.modalidad;
      article.dataset.nivel = job.data.nivel;
      article.dataset.technology = job.data.technology;

      article.innerHTML = `
      <header>
        <div>
          <h4>${job.titulo}</h4>
          <button class="boton-apply">Aplicar</button>
        </div>
        <h5>${job.empresa} | ${job.ubicacion}</h5>
      </header>
      <p>
        ${job.descripcion}
      </p>`;
      container.appendChild(article);
    });
  });
