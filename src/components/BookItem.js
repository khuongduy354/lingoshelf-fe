import { Button } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { TextSetting } from "./TextSetting";

export const BookItem = ({ book, fetchMyBooks }) => {
  const [showSetting, setShowSetting] = useState(false);
  return (
    <div>
      <Title>{book.title}</Title>

      {book.isText && (
        <Button onClick={() => setShowSetting(!showSetting)}>Setting</Button>
      )}
      {showSetting && <TextSetting book={book} fetchMyBooks={fetchMyBooks} />}
    </div>
  );
};
