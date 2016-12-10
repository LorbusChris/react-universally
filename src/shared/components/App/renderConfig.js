/* flow */

import React from 'react';
import createRender from 'found/lib/createRender';
import App from './App';
import Error404 from './Error404';

// createRender({ renderPending, readyReady, renderError })
export default createRender({
  renderError: ({ error }) => ( // eslint-disable-line react/prop-types
    <div>
      {error.status === 404 ? <App><Error404 /></App> : 'Error'}
    </div>
  ),
});
