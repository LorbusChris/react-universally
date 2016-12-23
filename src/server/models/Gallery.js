/* @flow */

import KeystoneSingleton from '../keystone';

const Types = KeystoneSingleton.keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */
const Gallery = new KeystoneSingleton.keystone.List('Gallery', {
  map: { name: 'title' },
  autokey: { path: '_id', from: 'title', unique: true },
});

Gallery.add({
  title: { type: String, initial: true, required: true },
  publishedDate: { type: Date, default: Date.now },
  heroImage: { type: Types.CloudinaryImage, initial: true },
  images: { type: Types.CloudinaryImages },
});

Gallery.track = true;

Gallery.defaultColumns = 'title';

Gallery.register();

export default Gallery;
