import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <main className="container max-w-5xl p-5 mx-auto bg-bgPrimary">
        <Header />
        <Hero />
        <Services />
      </main>
    </>
  );
}

export default App;
