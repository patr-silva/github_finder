import React from "react";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className='mb-2 h-30 rounded-md  shadow-lg hover:bg-gray-200'>
      <h3 className='mb-2 mt-3 ml-2 text-s text-gray hover:text-white'>
        <a href={html_url}>
          <FaLink className='inline text-xs' /> {name}
        </a>
      </h3>
      <p className='mb-2 mt-3 ml-2 italic text-gray-500'>{description}</p>
      <div>
        <div className=' mb-2  ml-2 bg-sky-300 text-sky-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2'>
          <FaEye className='mr-1 w-3 h-3' /> {watchers_count}
        </div>
        <div className='mt-2 bg-green-300 text-green-500 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2'>
          <FaStar className='mr-1 w-3 h-3' /> {stargazers_count}
        </div>
        <div className='mt-2  ml-2 bg-red-300 text-red-500 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2'>
          <FaInfo className='mr-1 w-3 h-3' /> {open_issues}
        </div>
        <div className=' mt-2 ml-2 bg-amber-100 text-yellow-500 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2'>
          <FaUtensils className='mr-1 w-3 h-3' /> {forks}
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
