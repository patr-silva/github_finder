import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

import { searchUsers } from "../../context/github/GithubActions";

const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({
        type: "GET_USERS",
        payload: users,
      });
    }
    setText("");
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='relative '>
            <input
              className='w-full shadow-md bg-gray-200 rounded input-lg text-black'
              placeholder='Search'
              value={text}
              onChange={handleChange}
            />
            <button
              className='absolute shadow-md top-0 right-0 rounded w-36 hover:bg-gray-400 text-white font-bold'
              type='submitt'
            >
              Go
            </button>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: "CLEAR_SEARCH" })}
            className='btn-lg w-36 hover:bg-gray-400 hover:text-white hover:shadow-md rounded'
          >
            CLEAR
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
