import './styles/style.scss';
import { fetchAndRenderJobListings } from './modules/jobListings';
import { setupSearch } from './modules/filterJobs';
import displayJobDetails from './modules/jobDetails';

window.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderJobListings();
  setupSearch();
  displayJobDetails();
});
