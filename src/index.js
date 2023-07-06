import './styles/style.scss';
import { fetchAndRenderJobListings } from './modules/jobListings';

window.addEventListener('DOMContentLoaded', fetchAndRenderJobListings);
