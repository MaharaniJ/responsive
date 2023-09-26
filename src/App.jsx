import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
  return (
    <section className="h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-cover font-[Poppins] md:bg-top bg-center">
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-screen">
        <h2 className="text-white text-2xl font-medium">Fashion Tips</h2>
        <h1 className="md:text-5x text-3xl text-white font-semibold py-5">
          Items every women should have
        </h1>
        <div className="text-xl">
          <Button />
        </div>
      </div>
    </section>
  );
}

export default App;
