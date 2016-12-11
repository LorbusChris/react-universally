/* @flow */

import keystone from 'keystone';

// TODO: Investigate, I'm uncertain this implementation doesn't have any drawbacks
// This creates a singleton instance with Keystone attached to it.
// We now can require KeystoneSingleton to always get our instance of Keystone.
class KeystoneSingleton {
  constructor() {
    this.keystone = keystone;
  }
}

export default (new KeystoneSingleton());
