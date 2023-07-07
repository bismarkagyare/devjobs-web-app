import { fetchAndRenderJobListings } from './jobListings';

export function setupSearch() {
  const searchBtn = document.querySelector('.search-btn');
  const titleInput = document.getElementById('filterByInfos');
  const locationInput = document.getElementById('filterByLocation');
  const checkInput = document.getElementById('filterByFullTime');

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchParams = {
      title: titleInput.value,
      location: locationInput.value,
      fullTime: checkInput.checked,
    };
    fetchAndRenderJobListings(searchParams);
  });
}
