/* @flow */

import KeystoneSingleton from '../keystone';

const Types = KeystoneSingleton.keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */
const Enquiry = new KeystoneSingleton.keystone.List('Enquiry', {
  noedit: true,
});

Enquiry.add({
  name: { type: Types.Name, initial: false, required: true },
  email: { type: Types.Email, initial: false, required: true },
  phone: { type: String },
  enquiryType: {
    type: Types.Select,
    options: [
      { value: 'message', label: 'Just leaving a message' },
      { value: 'question', label: 'I\'ve got a question' },
      { value: 'other', label: 'Something else...' },
    ],
  },
  message: { type: Types.Markdown, initial: false, required: true },
  createdAt: { type: Date, default: Date.now },
});

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';

Enquiry.register();

export default Enquiry;
