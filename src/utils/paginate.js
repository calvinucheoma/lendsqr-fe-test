const paginate = (users) => {
  const itemsPerPage = 10;
  const pages = Math.ceil(users.length / itemsPerPage);

  const newUsers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return users.slice(start, start + itemsPerPage);
  });

  return newUsers;
};

export default paginate;
