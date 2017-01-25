import { dependency } from './dependency';
import { otherdep } from './otherdep';
const message = dependency + otherdep;
document.getElementById('text').innerHTML = message;