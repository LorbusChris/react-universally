/* @flow */

import KeystoneSingleton from '../keystone';

const Types = KeystoneSingleton.keystone.Field.Types;

/**
 * User Model
 * ==========
 */
const User = new KeystoneSingleton.keystone.List('User', {
  autokey: { path: '_id', from: 'username', unique: true },
});

User.add({
  username: { type: Types.Text, initial: true, required: true, index: true, unique: true },
  name: { type: Types.Name, index: true },
  email: { type: Types.Email, initial: true, required: true, index: true, unique: true },
  password: { type: Types.Password, initial: true, required: true },
//  address: { type: Types.Location, collapse: true },
}, 'Permissions', {
  isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function isAdmin() {
  return this.isAdmin;
});

// Set Default Columns in Admin UI
User.defaultColumns = 'name, email, isAdmin';

// Registration
User.register();

export default User;
