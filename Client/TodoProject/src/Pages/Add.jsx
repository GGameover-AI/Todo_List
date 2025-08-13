import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/todolist", {
        title,
        text,
      });
      console.log("Saved:", res.data);
      setTitle("");
      setText("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" container-sm">
      <h1 className="text-center">New Todo</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className=" form-label">
            Title
          </label>
          <input
            type="text"
            className=" form-control"
            value={title}
            placeholder="Title.."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className=" form-label">
            Text
          </label>
          <textarea
            className="form-control"
            rows={3}
            value={text}
            placeholder="Remember.."
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3 text-center">
          <button className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
}
