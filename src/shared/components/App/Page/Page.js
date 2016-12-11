/* @flow */

import React from 'react';
import Helmet from 'react-helmet';

function Page(data: Object) {
  return (
    <article>
      <Helmet title={data.title} />

      <p>
        {data['content.extended']}
      </p>
    </article>
  );
}

export default Page;
