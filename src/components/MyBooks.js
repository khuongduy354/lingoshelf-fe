import { Card, Divider, Input } from "antd";
import { BookItem } from "./BookItem";
import { API } from "./API";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { Button } from "antd/es/radio";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

const TextCreation = ({ setShowTextCreation, fetchMyBooks }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { idTok } = useContext(AppContext);

  const saveTextFile = async () => {
    setShowTextCreation(false);
    const textFile = await API.TextAPI.saveText(idTok, {
      title,
      content,
    });
    if (textFile) {
      alert("Text file saved!");
      fetchMyBooks();
    } else {
      alert("Text file not saved!");
    }
  };
  return (
    <div>
      <Divider>Title</Divider>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Divider>Content</Divider>
      <Input value={content} onChange={(e) => setContent(e.target.value)} />
      <Button onClick={saveTextFile}>Save</Button>
      <Button onClick={() => setShowTextCreation(false)}>Close</Button>
    </div>
  );
};

export const MyBooks = () => {
  const [showTextCreation, setShowTextCreation] = useState(false);
  const [books, setBooks] = useState([]);
  const { idTok } = useContext(AppContext);
  async function fetchMyBooks() {
    const textFiles = await API.TextAPI.getMyTexts(idTok);
    if (textFiles) {
      setBooks(textFiles.map((textFile) => ({ ...textFile, isText: true })));
    } else {
      alert("No text files found!");
    }
  }
  useEffect(() => {
    if (idTok) fetchMyBooks();
  }, []);

  return (
    <div>
      <Button onClick={() => setShowTextCreation(true)}>
        Create Text File
      </Button>
      {showTextCreation && (
        <TextCreation
          setShowTextCreation={setShowTextCreation}
          fetchMyBooks={fetchMyBooks}
        />
      )}

      <Card title="Card Title">
        {books.map((book, idx) => (
          <Card.Grid style={gridStyle} key={idx}>
            <BookItem book={book} fetchMyBooks={fetchMyBooks} />
          </Card.Grid>
        ))}
      </Card>
    </div>
  );
};
