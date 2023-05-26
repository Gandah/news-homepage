import { useState } from 'react'
import CloseMenu from '../../assets/icon-menu-close.svg'
import menu from '../../assets/icon-menu.svg'

const NavBar = () => {

  const backdrop = document.querySelector('.backdrop')
  const clickCloseBackdrop = document.querySelector('.mobile-menu')
  
  const [BackdropZIndex, setBackdropZiIndex] = useState({zIndex: '0'})
  const [nav, setNav] = useState(false)
   

    const handleClick = () => {
        setNav(!nav)
        if(!nav){
            setBackdropZiIndex({zIndex: '20'})
            backdrop.classList.add('show')
            clickCloseBackdrop.classList.add('open')
        }else{
          setBackdropZiIndex({zIndex: '0'})
          backdrop.classList.remove('show') 
          clickCloseBackdrop.classList.remove('open')
        }
    };


    return (
      <nav >
      
          {/* Menu */}
          <ul className='hidden md:flex gap-10 text-grayishBlue-200'>
            <li className='hover:text-softOrange cursor-pointer'>Home</li>
              <li className='hover:text-softOrange cursor-pointer'>New</li>
              <li className='hover:text-softOrange cursor-pointer'>Popular</li>
              <li className='hover:text-softOrange cursor-pointer'>Trending</li>
              <li className='hover:text-softOrange cursor-pointer'>Categories</li>
          </ul>

{/* Mobile Menu */}
<div onClick={nav ? handleClick : null}  className='backdrop md:hidden' style={BackdropZIndex}></div>      
<div onClick={handleClick} className='z-10 md:hidden'>
        <img src={menu} alt='menu icon'/>
</div>

{/* <div className={nav? 'hidden' :'flex flex-col justify-center items-start fixed top-0 right-0 min-h-screen w-[68vw] p-4 z-10 bg-offWhite'}> */}
<div className={`mobile-menu ${nav ? 'open' : ''}`}>
        <div onClick={handleClick} className='md:hidden  absolute top-0 right-0 m-6 mt-8'>
            <img src={CloseMenu} alt='cross icon' className='hover:animate-[spin_0.5s_ease-in-out_1]'/>
        </div>
        <ul className='md:hidden flex flex-col gap-4 px-2'>
              <li className='hover:text-softOrange'>Home</li>
              <li className='hover:text-softOrange'>New</li>
              <li className='hover:text-softOrange'>Popular</li>
              <li className='hover:text-softOrange'>Trending</li>
              <li className='hover:text-softOrange'>Categories</li>
        </ul>
     </div>
    </nav>
    )
  }
  
  export default NavBar