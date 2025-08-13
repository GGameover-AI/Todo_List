import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [newTodo, setNewTodo] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/todolist")
      .then((res) => {
        setNewTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this todo?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/todolist/${id}`);
      setNewTodo((prev) => prev.filter((todo) => todo._id !== id));
      setMessage("Todo deleted successfully!");
      setTimeout(()=>setMessage(""),2000);
    } catch (err) {
      console.log(err);
      alert("Failed to delete todo");
    }
  };

  return (
    <div className=" container-sm ">
      <h1 className="text-center">List</h1>

      {message && <div className="alert alert-success">{message}</div>}

      <ul className=" list-group">
        {newTodo.map((e) => (
          <li
            key={e._id}
            className=" list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{e.title}</strong>
              <p className="mb-0">{e.text}</p>
            </div>
            <div className=" btn-group">
              <button
                className="btn btn-warning btn-sm"
                onClick={() => navigate(`/edit/${e._id}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(e._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
