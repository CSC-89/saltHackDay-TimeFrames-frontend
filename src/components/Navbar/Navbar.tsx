import logo from '../../assets/TF-logo-nav.png';
const Navbar = () => {
  return (
    <header className='flex bg-primary opacity-70 p-2 w-full'>
        <img src={logo} className="w-28" alt="logo"/>
    </header>
  )
}

export default Navbar