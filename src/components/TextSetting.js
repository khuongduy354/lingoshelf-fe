import { Button, Divider, Input } from "antd";
import { useContext, useState } from "react";
import { API } from "./API";
import { AppContext } from "../App";
const EditPanel = ({ setShowEdit, book, fetchMyBooks }) => {
  const [title, setTitle] = useState(book.title);
  const [content, setContent] = useState(book.content);

  const { idTok } = useContext(AppContext);
  const saveEdit = async () => {
    const textFile = await API.TextAPI.updateText(
      idTok,
      { title, content },
      book.id
    );
    if (textFile) {
      alert("Text file updated!");
      fetchMyBooks();
      setShowEdit(false);
    } else {
      alert("Text file not updated!");
    }
  };
  return (
    <div>
      <Divider>Title</Divider>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Divider>Content</Divider>
      <Input value={content} onChange={(e) => setContent(e.target.value)} />

      <Button onClick={saveEdit}>Save</Button>
      <Button onClick={() => setShowEdit(false)}>Discard</Button>
    </div>
  );
};
export const TextSetting = ({ book, fetchMyBooks }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { idTok } = useContext(AppContext);
  const deleteText = async () => {
    const textFile = await API.TextAPI.deleteText(idTok, book.id);
    if (textFile) {
      alert("Text file deleted!");
      fetchMyBooks();
    } else {
      alert("Text file not deleted!");
    }
  };
  return (
    <div>
      <Button onClick={() => setShowEdit(true)}>Edit Text</Button>
      <Button onClick={deleteText}>Delete Text</Button>
      {showEdit && (
        <EditPanel
          setShowEdit={setShowEdit}
          book={book}
          fetchMyBooks={fetchMyBooks}
        />
      )}
    </div>
  );
};
