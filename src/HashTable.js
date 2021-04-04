const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
  }

  insert(key, value) {
    const index = simpleHash(key, this.limit);
    this.storage.set(index, value);
  }

  retrieve(key) {
    const index = simpleHash(key, this.limit);
    return this.storage.get(index);
  }

  remove(key) {
    const index = simpleHash(key, this.limit);
    if (this.storage.get(index) !== null) {
      this.storage.set(index, null);
      return true;
    } else {
      return false;
    }
  }
}

module.exports = HashTable;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
/*
this.storage
{get: ƒ, set: ƒ, each: ƒ}
each:(callback) => {\r\n    for (let i = 0; i < storage.length; i += 1) {\r\n      callback(storage[i], i, storage);\r\n    }\r\n  }
get:(index) => {\r\n    checkLimit(index);\r\n    return storage[index];\r\n  }
set:(index, value) => {\r\n    checkLimit(index);\r\n    storage[index] = value;\r\n  }
*/
