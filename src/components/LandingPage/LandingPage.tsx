import logo from "../../assets/TF-logo.png";

const LandingPage = () => {
  return (
    <div className="bg-primary opacity-80 min-h-screen flex flex-col items-center">
      <img src={logo} alt="Timeframes logo" className="w-auto max-w-96" />
      <a href="/home">
        <button className="m-2 mb-12 bg-buttonEnter text-buttonEnterFont px-12 py-1 rounded-md shadow-md mx-auto hover:shadow-2xl lg:px-12 lg:py-2 lg:text-lg">
          Enter
        </button>
      </a>
      <h1 className="mx-auto lg:text-2xl">Don't be blind to your free time</h1>
    </div>
  );
};

export default LandingPage;
