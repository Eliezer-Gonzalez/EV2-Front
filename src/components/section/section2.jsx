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
        <div className="flex flex-col items-center gap-2">
            <Carrucel2 />
            <div className="flex justify-center items-center w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d194.88268499024193!2d-72.84735485593802!3d-38.60004002231233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966ad10b1449a223%3A0xdfca7343a9f39e4!2sAv.%20Lastarria%20127%2C%20504%200000%2C%205040053%20Cautin%2C%20Cholchol%2C%20Araucan%C3%ADa%2C%20Chile!5e0!3m2!1ses!2sus!4v1746754382157!5m2!1ses!2sus"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Municipalidad"
                ></iframe>
            </div>
        </div>
        </div>
        <hr className='my-10'/>
        <div className='flex flex-wrap justify-center items-center gap-8'>
            <Carrucel />
        </div>
    </section>
);

export default Section2;