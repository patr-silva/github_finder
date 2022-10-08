import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
  return (
    <div>
      <div className="border-t border-blueGray-200">
        <h2 className='text-2xl my-4 font-bold text-center'>
          Latest Repositories
        </h2>
        {repos.map((repo) => {
          return <RepoItem key={repo.id} repo={repo}/>;
        })}
      </div>
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
