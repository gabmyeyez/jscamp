const searchBar = document.querySelector("#empleos-search-input");

searchBar.addEventListener("input", () => {
  // guardar el valor del input
  const searchValue = searchBar.value;
  const jobs = document.querySelectorAll(".job-card");

  // iterar por trabajos
  jobs.forEach((job) => {
    const title = job.querySelector("h4").textContent;
    // const isShown = searchValue === "" || searchValue
    const escaped = searchValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`${escaped}.*`, "i");
    const found = title.match(regex);

    job.classList.toggle("is-hidden", !found);
  });
});
