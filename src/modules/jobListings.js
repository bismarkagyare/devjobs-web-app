import { renderJobDetails } from './jobDetails';

export async function fetchAndRenderJobListings(searchParams = {}) {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();

    // Apply search filters
    const filteredData = data.filter((item) => {
      const titleMatch = searchParams.title
        ? item.position.toLowerCase().includes(searchParams.title.toLowerCase())
        : true;
      const locationMatch = searchParams.location
        ? item.location.toLowerCase().includes(searchParams.location.toLowerCase())
        : true;
      const fullTimeMatch = searchParams.fullTime ? item.contract === 'Full Time' : true;

      return titleMatch && locationMatch && fullTimeMatch;
    });

    const jobListingsContainer = document.querySelector('.job-list');
    const displayJobs = filteredData.map((item) => {
      return `
        <article class="job-card">
          <div class="company-logo company-logo-small" style="background-color: ${item.logoBackground}">
            <img src="${item.logo}" alt="" />
          </div>
          <div class="job-info">
            <p>${item.postedAt}</p>
            <span class="job-info-divider"></span>
            <p>${item.contract}</p>
          </div>
          <a href="#" class="job-details" data-job-id="${item.id}">
            <h3 class="job-position">${item.position}</h3>
          </a>
          <p>${item.company}</p>
          <h4 class="job-location">${item.location}</h4>
        </article>
      `;
    });

    const jobListingsHTML = displayJobs.join('');
    jobListingsContainer.innerHTML = jobListingsHTML;

    // Event listener for job details
    const jobDetailsLinks = document.querySelectorAll('.job-details');
    jobDetailsLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const jobId = link.getAttribute('data-job-id');
        const selectedJob = filteredData.find((job) => job.id === parseInt(jobId, 10));
        renderJobDetails(selectedJob);
      });
    });
  } catch (error) {
    console.error('Error:', error);
  }
}
