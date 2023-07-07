import './styles/style.scss';
import { fetchAndRenderJobListings } from './modules/jobListings';
import { setupSearch } from './modules/filterJobs';

window.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderJobListings();
  setupSearch();
});
