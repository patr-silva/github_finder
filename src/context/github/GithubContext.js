import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubContextProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `OAUTH ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await response.json();
  //   // setUsers(data);
  //   // setLoading(false);
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };

  // const searchUsers = async (text) => {
  //   setLoading();
  //   const params = new URLSearchParams({
  //     q: text,
  //   });
  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `OAUTH ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const { items } = await response.json();
  //   // setUsers(data);
  //   // setLoading(false);
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: items,
  //   });
  // };

  // const getUser = async (login) => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization: `OAUTH ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   if (response.status === 404) {
  //     window.location = "/notfound";
  //   } else {
  //     const data = await response.json();
  //     dispatch({
  //       type: "GET_USER",
  //       payload: data,
  //     });
  //   }
  // };

  // const getUserRepos = async (login) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     sort: "created",
  //     per_page: 10,
  //   });

  //   const response = await fetch(
  //     `${GITHUB_URL}/users/${login}/repos?${params}`,
  //     {
  //       headers: {
  //         Authorization: `OAUTH ${GITHUB_TOKEN}`,
  //       },
  //     }
  //   );
  //   const data = await response.json();

  //   dispatch({
  //     type: "GET_REPOS",
  //     payload: data,
  //   });
  // };

  // const clearSearch = () => {
  //   dispatch({
  //     type: "CLEAR_SEARCH",
  //   });
  // };

  // const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        //fetchUsers,
        //searchUsers,
        //clearSearch,
        //getUser,
        //getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
