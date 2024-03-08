import React from 'react';
import { render } from 'react-dom';

import Onboard from './Onboard';
import './index.css';

render(<Onboard />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
