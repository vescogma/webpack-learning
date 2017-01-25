import './styles.css';
import { users } from './users';
import { otherusers } from './otherusers';
import { countries } from './countries';

const wrapper = document.getElementById('users');
const elementList = [...users, ...otherusers]
  .map(user => {
    const element = document.createElement('li');
    const name = user.name;
    const country = countries[user.country_id];
    element.textContent = `${name} from ${country}`;
    return element;
  })
  .forEach(element => {
    wrapper.appendChild(element);
  });

