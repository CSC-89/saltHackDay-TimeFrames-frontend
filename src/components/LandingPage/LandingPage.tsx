import logo from "../../assets/TF-logo.png";

const LandingPage = () => {
  return (
    <div className="bg-primary opacity-80 min-h-screen flex flex-col">
      <img src={logo} alt="Timeframes logo" />
      <h1 className="mx-auto">Don't be blind to your free time</h1>
    </div>
  )
}

export default LandingPage