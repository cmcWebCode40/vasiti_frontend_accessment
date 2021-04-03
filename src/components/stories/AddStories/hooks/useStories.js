import { useContext, useState } from 'react';
import { ContextApi, STORIES, getAllStories } from '../../../../context/ContextApi';


const initialState = {
  firstName: '',
  lastName: '',
  story: '',
  location: '',
  type: 'customer',
}

const useStories = () => {
  const [values, setValues] = useState(initialState);
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { stories, setStories } = useContext(ContextApi);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { value, name } = e.target
    setValues(values => ({ ...values, [name]: value }))
  }
  const uploadImage = (e) => {
    const { files } = e.target
    setImage(files[0]);
  }
  const removeImage = () => {
    setImage('');
  }

  const saveStory = (imageLink) => {
    const data = {
      ...values,
      id: Math.random(),
      imgSrc: imageLink
    };
    const items = getAllStories();
    localStorage.setItem(STORIES, JSON.stringify([...items, data]))
    if (stories.length) {
      setStories([...stories, data]);
    } else {
      setStories([data]);
    }
    setIsLoading(false);
    setIsSuccess(!isSuccess);
  }


  const cloudImageUpload = async (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'Visita');
    try {
      const res = await fetch(process.env.REACT_APP_CLOUDINARY_BASE_URL, {
        method: 'POST',
        body: data,
      })
      const file = await res.json();
      const { secure_url } = file;
      saveStory(secure_url);
    } catch (error) {
      setMessage('Something went wrong');
    }
  }


  return {
    image,
    values,
    message,
    isLoading,
    isSuccess,
    uploadImage,
    removeImage,
    handleChange,
    setIsSuccess,
    cloudImageUpload,
  }
}

export default useStories
