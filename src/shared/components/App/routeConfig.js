/* @flow */

import React from 'react';
import makeRouteConfig from 'found/lib/jsx/makeRouteConfig';
import Route from 'found/lib/jsx/Route';
import { CodeSplit } from 'code-split-component';
import type { ReactElement } from '../../types/react';
import App from './App';
import Page from './Page';
import fetchPage from '../../fetchApi';

function routeRender({ Component, props }: {Component: ReactElement, props?: any}) {
  if (!Component || !props) {
    return <div><small>Loading&hellip;</small></div>;
  }

  return <Component {...props} />;
}

function CodeSplitHome() {
  return (
    <CodeSplit chunkName="home" modules={{ Home: require('./Home') }}>
      { ({ Home }) => Home && <Home /> }
    </CodeSplit>
  );
}

function CodeSplitAbout() {
  return (
    <CodeSplit chunkName="about" modules={{ About: require('./About') }}>
      { ({ About }) => About && <About /> }
    </CodeSplit>
  );
}

export default makeRouteConfig(
  <Route
    path="/"
    Component={App}
  >
    <Route
      Component={CodeSplitHome}
      render={routeRender}
    />
    <Route
      path="about"
      Component={CodeSplitAbout}
      render={routeRender}
    />
    <Route
      path=":pageId"
      Component={Page}
      getData={({ params: { pageId } }) => (
        fetchPage(pageId)
      )}
      render={({ Component, data }) => (
        Component && data ? (
          <Component {...data} />
        ) : (
          <div><small>Loading&hellip;</small></div>
        )
      )}
    />
  </Route>,
);
