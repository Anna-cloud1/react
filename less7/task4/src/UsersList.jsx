import React, { useState } from 'react';
import User from './User';
import Pagination from './Pagination';

const UsersList = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const goPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const goNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const getDisplayedUsers = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return users.slice(startIndex, endIndex);
  };

  const displayedUsers = getDisplayedUsers();

  const isPrevPageAvailable = currentPage !== 1;
  const isNextPageAvailable = currentPage !== totalPages;

  return (
    <div>
      {displayedUsers.map(user => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        isPrevPageAvailable={isPrevPageAvailable}
        isNextPageAvailable={isNextPageAvailable}
      />
    </div>
  );
};

export default UsersList;
