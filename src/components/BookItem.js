import { Button } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { TextSetting } from "./TextSetting";
import { EpubReader } from "./EpubReader";

export const BookItem = ({ book, fetchMyBooks, setActiveBook }) => {
  const [showSetting, setShowSetting] = useState(false);
  return (
    <div>
      <Title>{book.title || "Untitled Ebook"}</Title>

      {book.isText && (
        <Button onClick={() => setShowSetting(!showSetting)}>Setting</Button>
      )}

      {!book.isText && <EpubReader url={book.url} previewMode />}
      {showSetting && <TextSetting book={book} fetchMyBooks={fetchMyBooks} />}
      <Button
        onClick={() => {
          setActiveBook(book);
        }}
      >
        Read
      </Button>
    </div>
  );
};
