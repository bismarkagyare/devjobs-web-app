export function renderJobDetails(job) {
  const jobDetailsContainer = document.getElementById('job-details-container');
  const mainContainer = document.querySelector('.main-container');

  // Add classes to show job details and hide main content
  jobDetailsContainer.innerHTML = ''; // Clear existing content
  jobDetailsContainer.classList.add('show-details');
  mainContainer.classList.add('hide-content');

  const jobDetailsHTML = `
    <main>
      <section class="company-header">
        <div class="company-logo company-logo-big" style="background-color: ${job.logoBackground}">
          <img src="${job.logo}" alt="" />
        </div>
        <div class="company-header-info">
          <div>
            <h2>${job.company}</h2>
            <p>${job.website}</p>
          </div>
          <a href="${job.apply}" target="_blank">
            <button class="company-header-btn">company site</button>
          </a>
        </div>
      </section>

      <section class="job-description">
        <div class="job-description-details">
          <div>
            <div class="job-info job-time">
              <p>${job.postedAt}</p>
              <span class="job-info-divider"></span>
              <p>${job.contract}</p>
            </div>
            <h1 class="job-desc-position">${job.position}</h1>
            <h4>${job.location}</h4>
          </div>
          <a href="${job.website}">
            <button class="company-header-btn apply-btn">apply now</button>
          </a>
        </div>

        <div>
          <p>${job.description}</p>
        </div>
        <div>
          <h3>Requirements</h3>
          <p>${job.requirements.content}</p>
          <ul>
            ${job.requirements.items
              .map((item) => `<li><span class="job-requirement-dot"></span>${item}</li>`)
              .join('')}
          </ul>
        </div>
        <div>
          <h3>What you will do</h3>
          <p>${job.role.content}</p>
          <ol>
              ${job.role.items
                .map((item, index) => `<li><span class="job-role-number">${index + 1}</span>${item}</li>`)
                .join('')}
          </ol>
        </div>
      </section>
    </main>

    <footer>
      <section class="job-banner">
        <div class="job-banner-desc">
          <h3>${job.position}</h3>
          <p>${job.company}</p>
        </div>
        <a href="${job.website}" target="_blank">
          <button class="company-header-btn apply-btn">apply now</button>
        </a>
      </section>
    </footer>
  `;

  jobDetailsContainer.innerHTML = jobDetailsHTML;
  jobDetailsContainer.classList.add('fade-in');
}
