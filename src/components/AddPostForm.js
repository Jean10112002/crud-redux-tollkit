import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../store/slices/post";
import { selectedAllUsers } from "../store/slices/users";
const initialState = {
  title: "",
  content: "",
};
const AddPostForm = () => {
  const [input, setInput] = useState(initialState);
  const [userID, setUserID] = useState("");

  const dispatch = useDispatch();
  const users = useSelector(selectedAllUsers);
  const canSave =
    Boolean(input.title) && Boolean(input.content) && Boolean(userID);
  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const onChangeAuthor = (e) => {
    setUserID(e.target.value);
  };
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
))

  const OnSubmit = (e) => {
    e.preventDefault();
    if (input.title.length > 0 && input.content.length > 0) {
      dispatch(postAdded(input.title, input.content, userID));
      setInput(initialState);
      setUserID("");
    }
  };
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="title"
          value={input.title}
          onChange={(e) => onChangeInput(e)}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select name="" id="" onChange={onChangeAuthor}>
           
          <option value=""></option>
          {
            usersOptions
          }
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="content"
          value={input.content}
          onChange={(e) => onChangeInput(e)}
        />

        <button type="button" onClick={OnSubmit} disabled={!canSave}>
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
