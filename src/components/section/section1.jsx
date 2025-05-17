import bgImage from '../../assets/Fondo.png';
import im1 from '../../assets/Img/Permiso-circulacion-grande.jpeg';
import Carrucel from './Carrucel2.jsx';

const Section1 = () => (
    <section className="relative py-25 w-full h-full flex items-center justify-center overflow-hidden">
        
        {/* Fondo con blur, le asigno z-0 para ajustar posicionamiento*/}
        <div className="absolute inset-0 z-0">
            <img
                src={bgImage}
                className="w-full h-full object-cover brightness-50"
                // alt="Fondo"
            />
        </div>

        <div className="z-1 mt-10 p-2 grid grid-cols-1 md:grid-cols-2 gap-8 mx-8">

            {/* Texo y descripcion*/}
            <div className="col text-white font-sans">
                {/* Titulo */}
                <h1 className='font-extrabold text-5xl text-balance my-8 bg-clip-text'>Municipalidad de Cholchol</h1>
                {/* Parrafo presentación Muni */}
                <p className=' text-justify text-2xl italic font-medium'>
                    Como Municipalidad trabajamos día a día para mejorar la calidad de vida de sus habitantes, promoviendo el desarrollo social, cultural y económico de la comuna. Nuestro compromiso es brindar servicios eficientes, transparentes y cercanos a la comunidad, impulsando iniciativas que fortalezcan la identidad local y el bienestar de todas las familias de Cholchol.
                </p>
                {/* Carrucel */}
                <div className='md:grid-cols-2 flex justify-around mt-20'>
                    <Carrucel/>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d194.88268499024193!2d-72.84735485593802!3d-38.60004002231233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966ad10b1449a223%3A0xdfca7343a9f39e4!2sAv.%20Lastarria%20127%2C%20504%200000%2C%205040053%20Cautin%2C%20Cholchol%2C%20Araucan%C3%ADa%2C%20Chile!5e0!3m2!1ses!2sus!4v1746754382157!5m2!1ses!2sus"
                        width="400"
                        height="302"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación Municipalidad"
                    ></iframe>
                </div>
            </div>

            {/* Right Div */}
            {/* Img */}
            <div className="col flex justify-center">
                <a 
                href="https://portalweb.insico.cl/Cholchol/Permisos/"
                target='_blank'
                className='inline-block'>
                    <img 
                    className='max-w-xl w-full h-auto rounded shadow-lg' 
                    src={im1} 
                    alt="Permiso Circulacion" 
                    />
                </a>
            </div>

        </div>
    </section>
);

export default Section1;
