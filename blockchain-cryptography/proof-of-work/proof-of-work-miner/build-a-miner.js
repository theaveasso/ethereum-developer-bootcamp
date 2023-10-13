const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTX(transaction) {
  return mempool.push(transaction);
}

function mine() {
  const transactions = mempool.splice(0, MAX_TRANSACTIONS);
  const blockId = blocks.length;

  let nonce = 0;
  while (true) {
    const blockHash = SHA256(
      JSON.stringify({ id: blockId, transactions, nonce }),
    );
    const blockHashInBigInt = BigInt(`0x${blockHash}`);

    if (blockHashInBigInt < TARGET_DIFFICULTY) {
      const newBlock = {
        id: blockId,
        hash: blockHash,
        transactions,
        nonce,
      };
      blocks.push(newBlock);
      return;
    }
    nonce++;
  }
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTX,
  mine,
  blocks,
  mempool,
};
