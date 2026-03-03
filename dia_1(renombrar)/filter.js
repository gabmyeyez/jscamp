// Filter resutls depending on select
const filterLocation = document.querySelector(".filter-location");
const filterExperience = document.querySelector(".filter-experience");
const filterTechnology = document.querySelector(".filter-technology");

function applyFilters() {
  // get job cards and filter values
  const jobs = document.querySelectorAll(".job-card");
  const desieredExperience = filterExperience.value;
  const desieredLocation = filterLocation.value;
  const desieredTechnology = filterTechnology.value;

  jobs.forEach((job) => {
    // get attributes for each job card
    const jobLocation = job.getAttribute("data-modalidad");
    const jobExperience = job.getAttribute("data-nivel");
    const jobTechnology = job.getAttribute("data-technology");

    // check each filter
    const matchesExperience =
      desieredExperience === "" || jobExperience === desieredExperience;
    const matchesLocation =
      desieredLocation === "" || jobLocation === desieredLocation;
    const matchesTechnology =
      desieredTechnology === "" || jobTechnology.includes(desieredTechnology);

    // check both filters and toggle accordingly
    const isShown = matchesExperience && matchesLocation && matchesTechnology;
    job.classList.toggle("is-hidden", !isShown);
  });
}

filterLocation.addEventListener("change", applyFilters);
filterExperience.addEventListener("change", applyFilters);
filterTechnology.addEventListener("change", applyFilters);
