import './style.css';
import Ship from './factories/ship.js';

console.log('index.js loaded!!!');

const a = Ship(3, [0, 0], 'horizontal');
console.log(a);
