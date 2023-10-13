const SHA256 = require("crypto-js/sha256");

class Block {
  toHash() {
    return SHA256(this.previousHash + this.data);
  }

  constructor(data, previousHash) {
    (this.data = data), (this.previousHash = previousHash);
  }
}

module.exports = Block;
