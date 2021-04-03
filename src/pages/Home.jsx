import React, { useContext, useState } from 'react';
import {
  Content,
  Experience,
  Footer, Header,
  Stories
} from '../components';
import exp1 from '../assets/images/user-experience-1.svg';
import exp2 from '../assets/images/user-experience-2.svg';
import AddStories from '../components/stories/AddStories/AddStories';
import { userStories_1 } from '../components//stories/data/data.js'
import { ContextApi } from '../context/ContextApi';
import { userStory, userStory2 } from '../utils/experiences';


const Home = () => {
  const [open, setOpen] = useState(false)
  const { stories } = useContext(ContextApi)

  const openStoryModal = () => setOpen(!open)
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header />
      <Content />
      <main>
        <Experience
          img={exp1}
          color={'dark'}
          onAddStory={openStoryModal}
          userStory={userStory}
        />
        <Stories
          data={userStories_1}
        />
        <Experience
          reverse
          img={exp2}
          color={'light'}
          onAddStory={openStoryModal}
          userStory={userStory2}
        />
        <Stories
          data={stories}
        />
        <AddStories
          open={open}
          setOpen={setOpen}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Home
