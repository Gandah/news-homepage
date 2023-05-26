import logo from '../../assets/logo.svg'

import NavBar from './Navbar';

const Header = () => {
  return (
    <header className="flex justify-between items-center my-4 mx-2">
      <div className='max-[640px]:w-8'>
        <img className='block max-w-[100%] h-auto' src={logo} alt='W logo'/>
      </div>
      <NavBar />
    </header>
  );
}

export default Header