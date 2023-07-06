export async function fetchAndRenderJobListings() {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();

    const jobListingsContainer = document.querySelector('.job-list');
    const displayJobs = data.map((item) => {
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
          <a href="">
            <h3 class="job-position">${item.position}</h3>
          </a>
          <p>${item.company}</p>
          <h4 class="job-location">${item.location}</h4>
        </article>
      `;
    });

    const jobListingsHTML = displayJobs.join('');
    jobListingsContainer.innerHTML = jobListingsHTML;
  } catch (error) {
    console.error('Error:', error);
  }
}
