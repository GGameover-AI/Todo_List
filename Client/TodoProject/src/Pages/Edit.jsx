import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams , useNavigate } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const [title,setTitle] = useState("");
  const [text,setText] = useState("");
  const [Loading,setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/todolist/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setText(res.data.text);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (Loading) {
    return (
      <div className=" spinner-border text-primary">
        <span className=" visually-hidden">Loading</span>
      </div>
    );
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/api/todolist/${id}`, {
        title,
        text
      });
      console.log("Update : ",res.data)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" container-sm">
      <h1 className="text-center">Edit</h1>
      <form onSubmit={handleEdit}>
        <div className="mb-3">
          <label className=" form-label">Title</label>
          <input
            type="text"
            className=" form-control"
            value={title}
            placeholder="Title.."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className=" form-label">Text</label>
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
