import React, { createContext, useState, useEffect } from "react";

const siteDataContext = createContext({});

export const SiteDataProvider = props => {
  const [title, setTitle] = useState("React Hooks Demo");

  const values = {
    title,
    setPageTitle: title => setTitle(title)
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <siteDataContext.Provider value={values}>
      {props.children}
    </siteDataContext.Provider>
  );
};

export default siteDataContext;
