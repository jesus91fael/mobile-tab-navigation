import Menu from './components/Menu';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Blog from './components/Blog';
import './styles.css'
import { useState } from 'react'

function App() {

  const [component, setComponent] = useState('home')
  
  const activeHome = () => setComponent('home')
  const activeWork = () => setComponent('work')
  const activeBlog = () => setComponent('blog')
  const activeAbout = () => setComponent('about')

  


  return (
    <div className='box'>

      {component === 'home' && (<Home />)}
      {component === 'work' && (<Work />)}
      {component === 'blog' && (<Blog />)}
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
