import { Button, Divider, Input, Space, Typography } from "antd";
import { EpubReader } from "./EpubReader";
import { translateWord } from "../helper/translate";
import { useState } from "react";
import { TranslationToolTip } from "./TranslationToolTip";

const { Title, Paragraph, Text, Link } = Typography;

const EbookRenderer = ({ ebook, handleMouseUp }) => {
  return (
    <div onMouseUp={handleMouseUp}>
      {ebook.url.split(".").pop() === "epub" && (
        <div>
          <Divider>{ebook.title}</Divider>
          <EpubReader url={ebook.url} initLocation={ebook.currLocation} />
        </div>
      )}
    </div>
  );
};
const TextRenderer = ({ text, handleMouseUp }) => {
  return (
    <div onMouseUp={handleMouseUp}>
      <Title>{text.title}</Title>
      <Paragraph>{text.content}</Paragraph>
    </div>
  );
};
export const BookRenderer = ({ book, setActiveBook }) => {
  const [translationPair, setTranslationPair] = useState(["en", "vn"]);
  const [defs, setDefs] = useState([]);
  const changePair = (value, idx) => {
    let newpair = [...translationPair];
    newpair[idx] = value;
    setTranslationPair(newpair);
  };
  const handleMouseUp = async () => {
    let text = window.getSelection().toString();
    if (text != "") {
      const defs = translateWord(translationPair, text);
      if (defs) setDefs(defs);
    } else {
      setDefs([]);
    }
  };
  return (
    <div>
      <label>Allow values: en, vn, cn</label>
      <Input
        value={translationPair[0]}
        onChange={(e) => changePair(e.target.value, 0)}
      />
      <Input
        value={translationPair[1]}
        onChange={(e) => changePair(e.target.value, 1)}
      />
      {defs.length > 0 ? <TranslationToolTip defs={defs} /> : null}
      <Button onClick={() => setActiveBook(null)}>Close</Button>
      {book.isText && (
        <TextRenderer text={book} handleMouseUp={handleMouseUp} />
      )}
      {!book.isText && (
        <EbookRenderer ebook={book} handleMouseUp={handleMouseUp} />
      )}
    </div>
  );
};
