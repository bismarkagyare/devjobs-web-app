import './styles/style.scss';
import { fetchAndRenderJobListings } from './modules/jobListings';
import { setupSearch } from './modules/filterJobs';
import { setupFilterButton } from './modules/filterJobs';
import { setupThemeToggle } from './modules/filterJobs';

window.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderJobListings();
  setupSearch();
  setupFilterButton();
  setupThemeToggle();
});
