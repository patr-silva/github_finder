import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-md bg-gray-100 border-gray-200'>
      <div className='flex flex-col items-center pb-5'>
        <img
          className='mb-3 w-24 h-24 rounded-full shadow-lg'
          src={avatar_url}
          alt='Profile'
        />
        <h5 className='mb-1 text-xl font-medium text-gray-900'>{login}</h5>
        <div className='flex mt-4 space-x-3 md:mt-6'>
          <Link
            to={`/user/${login}`}
            className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-gray-300 rounded-lg hover:bg-gray-400'
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
