import img1 from '../../assets/Img/taller-comunitario.jpg';
import img2 from '../../assets/Img/taller-acondicionamiento-fisico.jpg';
import img3 from '../../assets/Img/movilizacion-para-estudiantes.jpg';
import Carrucel from './Carrucel';
import Carrucel2 from './Carrucel2';

const Section2 = () => (
    <section className="bg-secundario py-15 ">
        <div className="flex flex-wrap justify-center items-center gap-8 ">
            <img src={img1} className="max-w-lg w-full h-auto rounded shadow" alt="Taller Comunitario Sobre Cambio Climatico" />
            <img src={img2} className="max-w-xl w-full h-auto rounded shadow" alt="Taller Acondicionamiento Fisico" />
        </div>
        <hr className='my-10'/>
        <div className="flex flex-wrap justify-center items-start gap-8">
        <img
            src={img3}
            className="max-w-xl w-full h-auto rounded shadow"
            alt="Movilizacion para estudiantes"
        />
        </div>
        <hr className='my-10'/>
        <div className='flex flex-wrap justify-center items-center gap-8'>
            <Carrucel />
        </div>
    </section>
);

export default Section2;