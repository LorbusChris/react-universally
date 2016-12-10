/* @flow */

import React from 'react';
import Helmet from 'react-helmet';
import 'normalize.css/normalize.css';
import './globals.css';
import type { ReactChildren } from '../../types/react';
import Header from './Header';
import htmlPageConfig from '../../../../config/public/htmlPage';

function App({ children }: { children?: ReactChildren }) {
  return (
    <div style={{ padding: '10px' }}>
      {/*
        All of the following will be injected into our page header.
        @see https://github.com/nfl/react-helmet
      */}
      <Helmet
        htmlAttributes={htmlPageConfig.htmlAttributes}
        titleTemplate={htmlPageConfig.titleTemplate}
        defaultTitle={htmlPageConfig.defaultTitle}
        meta={htmlPageConfig.meta}
        link={htmlPageConfig.links}
        script={htmlPageConfig.scripts}
      />

      <Header />

      {children}
    </div>
  );
}

export default App;
