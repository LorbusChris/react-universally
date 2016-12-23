/* eslint quote-props: ["error", "consistent"]*/

/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */
exports.create = {
  User: [
    {
      'username': 'Admin',
      'name.first': 'Admin',
      'name.last': 'User',
      'email': 'admin@keystonejs.com',
      'password': 'admin',
      'isAdmin': true,
    },
  ],
  Page: [
    {
      'title': 'SamplePage',
      'content.brief': 'Brief test content',
      'content.extended': 'This is extended test content',
    },
  ],
  Gallery: [
    {
      'title': 'Photos',
    },
  ],
};

// This is the long-hand version of the functionality above:
//
// import keystone from 'keystone';
// import async from 'async';
//
// const User = keystone.list('User');
//
// const admins = [{
//  email: 'user@keystonejs.com',
//  password: 'admin',
//  name: {
//    first: 'Admin',
//    last: 'User',
//  },
// }];
//
// function createAdmin(admin, done) {
//  const newAdmin = new User.model(admin);
//  newAdmin.isAdmin = true;
//  newAdmin.save((err) => {
//    if (err) {
//      console.error('Error adding admin ' + admin.email + ' to the database:');
//      console.error(err); // eslint-disable-line no-console
//    } else {
//      console.log('Added admin ' + admin.email + ' to the database.');
//    }
//    done(err);
//  });
// }
//
// exports = module.exports = (done) => {
//  async.forEach(admins, createAdmin, done);
// };
