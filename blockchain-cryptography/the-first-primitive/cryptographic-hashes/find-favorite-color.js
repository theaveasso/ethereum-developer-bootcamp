const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

function findColor(hash) {
  return COLORS.filter((c) => toHex(sha256(utf8ToBytes(c))) === hash);
}

module.exports = findColor;
