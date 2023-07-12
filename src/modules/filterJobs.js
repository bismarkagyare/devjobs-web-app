import { fetchAndRenderJobListings } from './jobListings';

export function setupSearch() {
  const searchBtns = document.querySelectorAll('.search-btn');
  const titleInput = document.getElementById('filterByTitle');

  const popupBtn = document.querySelector('.search-btn.btn-primary.show-on-mobile');
  popupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const popupLocationInput = document.getElementById('filterByLocationMobile');
    const popupCheckInput = document.getElementById('filterByFullTimeMobile');

    const searchParams = {
      title: titleInput.value,
      location: popupLocationInput.value,
      fullTime: popupCheckInput.checked,
    };
    fetchAndRenderJobListings(searchParams);

    const searchBarMoreInfo = document.querySelector('.search-bar-more-info');
    searchBarMoreInfo.style.display = 'none';

    const backdrop = document.querySelector('.backdrop');
    backdrop.style.display = 'none';
  });

  searchBtns.forEach((searchBtn) => {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const locationInput = document.getElementById('filterByLocation');
      const checkInput = document.getElementById('filterByFullTime');

      const searchParams = {
        title: titleInput.value,
        location: locationInput.value,
        fullTime: checkInput.checked,
      };
      fetchAndRenderJobListings(searchParams);
    });
  });
}

export function setupFilterButton() {
  const filterButton = document.querySelector('.filter-mobile');
  const searchBarMoreInfo = document.querySelector('.search-bar-more-info');
  const backdrop = document.querySelector('.backdrop');

  filterButton.addEventListener('click', (e) => {
    e.preventDefault();
    const display = getComputedStyle(searchBarMoreInfo).display;
    searchBarMoreInfo.style.display = display === 'none' ? 'flex' : 'none';

    const backdropDisplay = getComputedStyle(backdrop).display;
    backdrop.style.display = backdropDisplay === 'none' ? 'block' : 'none';
  });

  window.addEventListener('click', (e) => {
    // Check if the click event target is outside the popup element
    if (!searchBarMoreInfo.contains(e.target) && !filterButton.contains(e.target)) {
      searchBarMoreInfo.style.display = 'none';
      backdrop.style.display = 'none';
    }
  });
}

export function setupThemeToggle() {
  const container = document.getElementById('container');
  const themeToggleBtn = document.querySelector('.theme-toggle-btn');

  themeToggleBtn.addEventListener('click', () => {
    container.classList.toggle('dark-theme');
  });
}
