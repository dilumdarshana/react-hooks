import React, { useContext, useEffect } from "react";
import SiteDataContext from "../../contexts/siteData";

const Users = () => {
  const siteDataContext = useContext(SiteDataContext);

  useEffect(() => {
    siteDataContext.setPageTitle("Users");
  });

  return <p>Users</p>;
};

export default Users;
