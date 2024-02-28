import kanji_en_bank1 from "../dictionary/kanji_en/kanji_bank_1.json";
import kanji_en_bank2 from "../dictionary/kanji_en/kanji_bank_2.json";
import kanji_vn_bank1 from "../dictionary/kanji_vn/kanji_bank_1.json";
import kanji_vn_bank2 from "../dictionary/kanji_vn/kanji_bank_2.json";
import { en_vn_text } from "../dictionary/en_*/en_vi.js";
// import { en_en_text } from "../../public/dictionary/en_*/en_en.js";

const en_vn_bank = en_vn_text.split("\n");
// const en_en_bank = en_vn_text.split("\n");

const cn2vnWord = (cn) => {
  let banks = [kanji_vn_bank1, kanji_vn_bank2];
  let defs = [];
  for (let bank of banks) {
    let found = bank.find((item) => item[0].includes(cn));
    if (found !== undefined) {
      let def = found[4];
      defs = [...defs, ...def];
    }
  }

  return defs.length === 0 ? null : defs;
};

const cn2enWord = (cn) => {
  let banks = [kanji_en_bank1, kanji_en_bank2];
  let defs = [];
  for (let bank of banks) {
    let found = bank.find((item) => item[0].includes(cn));
    if (found !== undefined) {
      let def = found[4];
      defs = [...defs, ...def];
    }
  }

  return defs.length === 0 ? null : defs;
};

const wiktionaryHelper = (() => {
  const getText = (_item) => {
    return _item.split(" ")[0];
  };
  const getDef = (_item) => {
    const splitted = _item.split("::");
    return splitted[splitted.length - 1];
  };
  const getEnDef = (_item) => {
    const splitted = _item.split("::");
    return splitted[0];
  };
  return { getText, getDef, getEnDef };
})();
export const en2enWord = (word) => {
  const { getText, getEnDef } = wiktionaryHelper;
  const widx = en_vn_bank.findIndex((item) => getText(item) === word);
  if (widx === -1) return null;

  return [getEnDef(en_vn_bank[widx])];
};
export const en2vnWord = (word) => {
  const { getText, getDef } = wiktionaryHelper;
  const widx = en_vn_bank.findIndex((item) => getText(item) === word);
  if (widx === -1) return null;

  return [getDef(en_vn_bank[widx])];
};

export const translateWord = (langPair, word) => {
  const supportedPairs = [
    ["cn", "en"],
    ["cn", "vn"],
    ["en", "en"],
    ["en", "vn"],
  ];
  const pairIdx = supportedPairs.findIndex(
    (item) => item.toString() === langPair.toString()
  );
  if (pairIdx === -1) return null;

  const pairHandlers = [cn2enWord, cn2vnWord, en2enWord, en2vnWord];
  return pairHandlers[pairIdx](word);
};
