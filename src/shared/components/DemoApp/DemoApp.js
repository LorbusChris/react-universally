/* @flow */

import React from 'react';
import Helmet from 'react-helmet';
import 'normalize.css/normalize.css';
import './globals.css';
import type { ReactChildren } from '../../types/react';
import Header from './Header';
import { safeConfigGet } from '../../utils/config';

function DemoApp({ children }: { children?: ReactChildren }) {
  return (
    <div>
      {/*
        All of the following will be injected into our page header.
        @see https://github.com/nfl/react-helmet
      */}
      <Helmet
        htmlAttributes={safeConfigGet(['htmlPage', 'htmlAttributes'])}
        titleTemplate={safeConfigGet(['htmlPage', 'titleTemplate'])}
        defaultTitle={safeConfigGet(['htmlPage', 'defaultTitle'])}
        meta={safeConfigGet(['htmlPage', 'meta'])}
        link={safeConfigGet(['htmlPage', 'links'])}
        script={safeConfigGet(['htmlPage', 'scripts'])}
      />

      <Header />

      {children}
    </div>
  );
}

export default DemoApp;
