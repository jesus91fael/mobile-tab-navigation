import Menu from './components/Menu';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import './styles.css'
import { useEffect, useState } from 'react'

function App() {

  const [component, setComponent] = useState('home')
  
  const activeHome = () => setComponent('home')
  const activeWork = () => setComponent('work')
  const activeBlog = () => setComponent('blog')
  const activeAbout = () => setComponent('about')

  useEffect(() => {
    console.log("ATUALIZOU", component)
  }, [component])


  return (
    <div>

      {component === 'home' && (<Home />)}
      {component === 'work' && (<Work />)}
      {component === 'blog' && (<Work />)}
      {component === 'about' && (<About />)}
   
     <div className='menu'>
       <Menu onClick={activeHome}>Home</Menu>
       <Menu onClick={activeWork}>Work</Menu>
       <Menu onClick={activeBlog}>Blog</Menu>
       <Menu onClick={activeAbout}>About Us</Menu>
     </div>
      
    </div>
  );
}

export default App;
