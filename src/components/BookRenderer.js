import { Button, Divider, Typography } from "antd";
import { EpubReader } from "./EpubReader";

const { Title, Paragraph, Text, Link } = Typography;

const EbookRenderer = ({ ebook }) => {
  return (
    <div>
      {ebook.url.split(".").pop() === "epub" && (
        <div>
          <Divider>{ebook.title}</Divider>
          <EpubReader url={ebook.url} initLocation={ebook.currLocation} />
        </div>
      )}
    </div>
  );
};
const TextRenderer = ({ text }) => {
  return (
    <div>
      <Title>{text.title}</Title>
      <Paragraph>{text.content}</Paragraph>
    </div>
  );
};
export const BookRenderer = ({ book, setActiveBook }) => {
  return (
    <div>
      <Button onClick={() => setActiveBook(null)}>Close</Button>
      {book.isText && <TextRenderer text={book} />}
      {!book.isText && <EbookRenderer ebook={book} />}
    </div>
  );
};
