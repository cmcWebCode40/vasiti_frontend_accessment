import React, {
  createContext,
  useState
} from 'react';


export const ContextApi = createContext();

export const STORIES = 'user:stories';

const getAllStories = () => {
  if (localStorage.getItem(STORIES)) {
    try {
      const stories = JSON.parse(localStorage.getItem(STORIES));
      return stories
    } catch (error) {
      return [];
    }
  } else {
    return [];
  }
}

const ContextProvider = ({ children }) => {
  const [stories, setStories] = useState(getAllStories());

  return (
    <ContextApi.Provider value={{
      stories,
      setStories
    }}>
      {children}
    </ContextApi.Provider>
  )
};

export default ContextProvider;

