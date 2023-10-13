const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [new Block()];
  }

  addBlock(newBlock) {
    const previousBlock = this.chain[this.chain.length - 1];
    newBlock.previousHash = previousBlock.toHash();
    this.chain.push(newBlock);
  }

  isValid() {
    for (let i = 0; i < length; i++) {
      const currentBlock = this.chain[i];
      const nextBlock = this.chain[i + 1];

      if (
        currentBlock.toHash().toString() !== nextBlock.previousHash().toString()
      ) {
        return false;
      }

      return true;
    }
    return;
  }
}

module.exports = Blockchain;
