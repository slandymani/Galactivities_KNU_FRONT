import React from 'react';
import ReactDOM from 'react-dom/client';

import { router } from '@app/router';
import { RouterProvider } from 'react-router-dom';
import { store, StoreContext } from '@app/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>,
);
