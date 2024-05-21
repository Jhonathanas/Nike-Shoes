import "./App.css";
import Navbar from "./Components/Navbar";
import {
  Hero,
  Populer,
  Subscribe,
  Footer,
  CustomerReview,
  Service,
  Special,
  SuperQuality,
} from './Section/index'

function App() {

  return (
    <>
     <main className="relative">
      <Navbar />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Populer />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Service />
      </section>
      <section className="padding">
        <Special />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
      </main> 
    </>
  );
}

export default App;
