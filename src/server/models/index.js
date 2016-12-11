/* @flow */

import User from './User';
import Gallery from './Gallery';
import Page from './Page';
import Enquiry from './Enquiry';

const Models = {
  User,
  Page,
  Gallery,
  Enquiry,
};

export default function importModels() { return Models; }
