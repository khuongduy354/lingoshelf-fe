import { translateWord } from "../helper/translate";
test("Test Chinese to Vietnamese", () => {
  const input = "你";
  const expected = ["[nhĩ] anh, bạn, mày", "[nhĩ] vậy (dùng để kết thúc câu)"];
  const pair = ["cn", "vn"];
  const result = translateWord(pair, input);
  expect(result).toEqual(expected);
});

test("Test Chinese to English", () => {
  const input = "你";
  const expected = ["you", "second person pronoun"];
  const pair = ["cn", "en"];
  const result = translateWord(pair, input);
  expect(result).toEqual(expected);
});

test("Test English to English", () => {
  const input = "friend";
  const expected = ["friend {n} (person whose company one enjoys) "];
  const pair = ["en", "en"];
  const result = translateWord(pair, input);

  expect(result).toEqual(expected);
});

test("Test English to Vietnamese", () => {
  const input = "you";
  const expected = [
    " chị, ông, [polite] emanh , bà, con, bạn, ngươi, [rude unless to a friend or subordinate] mày, [neutral] quý vị, bác, dì and other words expressing familial relationship , Welsh: ti [familiar], [polite] chi",
  ];
  const pair = ["en", "vn"];
  const result = translateWord(pair, input);
  expect(result).toEqual(expected);
});
