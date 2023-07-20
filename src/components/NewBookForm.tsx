import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export interface BookFormData {
  title: string;
  description: string;
  story: string;
}

interface NewBookFormProps {
  onSave: (bookData: BookFormData) => void;
}

const NewBookForm: React.FC<NewBookFormProps> = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [story, setStory] = useState("");

  const handleSubmit = () => {
    const bookData: BookFormData = { title, description, story };
    onSave(bookData);
  };

  return (
    <form>
      <div>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Story"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          multiline
          rows={4}
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save
      </Button>
    </form>
  );
};

export default NewBookForm;
