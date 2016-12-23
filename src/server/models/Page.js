/* @flow */

import KeystoneSingleton from '../keystone';

const Types = KeystoneSingleton.keystone.Field.Types;

/**
 * Page Model
 * ==========
 */
const Page = new KeystoneSingleton.keystone.List('Page', {
  map: { name: 'title' },
  autokey: { path: '_id', from: 'title', unique: true },
});

Page.add({
  title: { type: String, initial: true, required: true },
//  image: { type: Types.CloudinaryImage },
  content: {
    brief: { type: Types.Html, wysiwyg: true, height: 150 },
    extended: { type: Types.Html, wysiwyg: true, height: 400 },
  },
});

Page.schema.virtual('content.full').get(function getFullContent() {
  return this.content.extended || this.content.brief;
});

Page.defaultColumns = 'title, content.brief';

Page.register();

export default Page;
