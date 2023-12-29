import React from 'react';
import { createRoot } from 'react-dom/client';

// Create element // console.log(heading);
const heading = React.createElement(
  'h1',
  { id: 'headerTitle', className: 'lightblue-paragraph' },
  'Biodata Perusahaan'
);
const listItem1 = React.createElement('li', null, 'Nama: MakSur');
const listItem2 = React.createElement('li', null, 'Bidang: FnB (Food and Beverage)');
const listItem3 = React.createElement('li', null, 'Tagline: Selalu ada');
const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);
const container = React.createElement('div', { id: 'biodata' }, [heading, unorderedList]);

// // Create root
// const root = createRoot(document.getElementById('root'));
// // render element
// root.render(container);

// Dibikin one line
createRoot(document.getElementById('root')).render(container);
