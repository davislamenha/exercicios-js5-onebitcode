import setup from './scripts/setup.js';
import salvarTransacao from './scripts/submit.js';

document.addEventListener('DOMContentLoaded', setup);
document.querySelector('form').addEventListener('submit', salvarTransacao);
