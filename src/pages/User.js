import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaCodepen,
  FaStore,
  FaUserFriends,
  FaUsers,
  FaGlobe,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

import GithubContext from "../context/github/GithubContext";
import { getUserAndRepos } from "../context/github/GithubActions";


import Spinner from "../components/layout/Spinner";
import RepoList from "../components/repos/RepoList";

const User = () => {
  const { user, loading, repos, dispatch } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    // getUser(params.login);
    // getUserRepos(params.login);
    dispatch({ type: "SET_LOADING" });

    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({
        type: "GET_USER_AND_REPOS",
        payload: userData,
      });
    };

    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  const websiteUrl = blog?.startsWith("http") ? blog : "https://" + blog;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <section className='bg-blueGray-50'>
        <div className='w-full lg:w-40/20 px-4 mx-auto'>
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-1'>
            <div className='px-6'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full px-4 flex justify-center'>
                  <div className='relative'>
                    <img
                      alt='...'
                      src={avatar_url}
                      className='h-48 lg:h-auto lg:w-48 rounded-full mr-4'
                    />
                  </div>
                </div>

                <div className='w-full px-4 text-center'>
                  <div className='flex justify-center py-2 lg:pt-4 pt-8'>
                    <div className='grid justify-items-center lg:mr-4 p-3 text-center'>
                      <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                        {followers}
                      </span>
                      <span className='text-sm text-blueGray-400'>
                        Followers
                      </span>
                      <FaUsers className='p-3 text-3xl md:text-5xl' />
                    </div>
                    <div className='grid justify-items-center lg:mr-4 p-3 text-center'>
                      <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                        {following}
                      </span>
                      <span className='text-sm text-blueGray-400'>
                        Following
                      </span>
                      <FaUserFriends className='p-3 text-3xl md:text-5xl' />
                    </div>
                    <div className='grid justify-items-center lg:mr-4 p-3 text-center'>
                      <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                        {public_repos}
                      </span>
                      <span className='text-sm text-blueGray-400'>
                        Public Repos
                      </span>
                      <FaCodepen className='p-3 text-3xl md:text-5xl' />
                    </div>
                    <div className='grid justify-items-center lg:mr-4 p-3 text-center'>
                      <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                        {public_gists}
                      </span>
                      <span className='text-sm text-blueGray-400'>
                        Public Gists
                      </span>
                      <FaStore className='p-3 text-3xl md:text-5xl' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='text-center'>
                <h3 className='text-xl font-semibold leading-normal mb-0 text-blueGray-700'>
                  {name}
                </h3>
                <div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400  uppercase'>
                  <i className='fas fa-map-marker-alt  text-lg text-blueGray-400'></i>
                  {location}
                </div>
                {hireable && (
                  <div className='mb-1 text-blueGray-600'>
                    <span className='bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900'>
                      Hireable
                    </span>
                  </div>
                )}
                {login && (
                  <div className='mb-2 text-blueGray-600'>
                    <i className='fas fa-university text-lg text-blueGray-400'></i>
                    Login: {login}
                  </div>
                )}
              </div>

              <div className='mt-5 py-5 border-t border-blueGray-200 text-center'>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full lg:w-9/12 px-4'>
                    <p className=' text-lg leading-relaxed text-blueGray-700'>
                      {bio}
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-5 py-5 border-t border-blueGray-200 text-center'>
                <div className='flex flex-wrap justify-center'>
                  {blog && (
                    <div className='grid justify-items-center lg:mr-4 p-3 text-center'>
                      <FaGlobe className=' p-3 text-3xl md:text-5xl' />
                      <span className='text-sm text-blueGray-400'>Blog</span>
                      <a
                        href={websiteUrl}
                        target='_blank'
                        rel='noreferrer'
                        className='text-sm text-blueGray-400'
                      >
                        {websiteUrl}
                      </a>
                    </div>
                  )}
                  {twitter_username && (
                    <div className='grid justify-items-center lg:mr-4 p-3 text-center'>
                      <FaTwitter className=' p-3 text-3xl md:text-5xl' />
                      <span className='text-sm text-blueGray-400'>Twitter</span>
                      <a
                        href={twitter_username}
                        target='_blank'
                        rel='noreferrer'
                        className='text-sm text-blueGray-400'
                      >
                        {twitter_username}
                      </a>
                    </div>
                  )}

                  {html_url && (
                    <div className='grid justify-items-center lg:mr-4 p-3 text-center'>
                      <FaGithub className=' p-3 text-3xl md:text-5xl' />
                      <span className='text-sm text-blueGray-400'>
                        Github Profile
                      </span>
                      <a
                        href={html_url}
                        target='_blank'
                        rel='noreferrer'
                        className='text-sm text-blueGray-400'
                      >
                        {html_url}
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <RepoList repos={repos} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;
