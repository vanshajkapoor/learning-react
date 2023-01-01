import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement('h1', {}, 'Heading 1');
const heading2 = React.createElement('h2', {}, 'Heading 2');
const container = React.createElement('div', { id: 'container' }, [heading1, heading2]);
console.log('hello');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
