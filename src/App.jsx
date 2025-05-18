import Header from './components/header/Header';
import Section1 from './components/section/section1';
import Section2 from './components/section/section2';
import ContactForm from './components/contactform/ContactForm';
import Footer from './components/footer/Footer';

function App() {
  return (
    <main className="bg-secundario ">
      <Header />
      <Section1 />
      <Section2 />
      <ContactForm />
      <div className="h-10"></div>
      {/* Espacio para el footer */}
      <Footer /> 
    </main>
  )
}

export default App
