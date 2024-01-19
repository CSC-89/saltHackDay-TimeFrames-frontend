import logo from "../../assets/TF-logo.png";

const LandingPage = () => {
  return (
    <div className="bg-primary opacity-80 min-h-screen flex flex-col items-center">
      <img src={logo} alt="Timeframes logo" className=" max-w-96"/>
      <h1 className="mx-auto lg:text-2xl">Don't be blind to your free time</h1>
    </div>
  )
}

export default LandingPage