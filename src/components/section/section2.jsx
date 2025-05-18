import img1 from '../../assets/Img/taller-comunitario.jpg';
import img2 from '../../assets/Img/taller-acondicionamiento-fisico.jpg';
import img3 from '../../assets/Img/movilizacion-para-estudiantes.jpg';
import Carrucel from './Carrusel';

const Section2 = () => (
    <section className="bg-secundario pb-15 mx-5">
        <h2 className='text-white text-center text-5xl font-extrabold py-6'>Enterate</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
            <img 
            src={img1} 
            className="max-w-[500px] w-full h-auto rounded shadow" 
            alt="Taller Comunitario Sobre Cambio Climatico" 
            />
            <img 
                src={img2} 
                className="max-w-[565px] w-full h-auto rounded shadow" 
                alt="Taller Acondicionamiento Fisico" 
            />
            <img
                src={img3}
                className="max-w-[556px] w-full h-auto rounded shadow"
                alt="Movilizacion para estudiantes"
            />
        </div>
        <div className='flex flex-wrap justify-center items-center mt-8'>
            <Carrucel />
        </div>
    </section>
);

export default Section2;