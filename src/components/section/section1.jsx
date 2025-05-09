import bgImage from '../../assets/Fondo.png';
import im1 from '../../assets/Img/Permiso-circulacion-grande.jpeg';

const Section1 = () => (
    <section className="relative py-25 w-full h-full flex items-center justify-center overflow-hidden">
        {/* Fondo con blur */}
        <div className="absolute inset-0 z-0">
            <img
                src={bgImage}
                className="w-full h-full object-cover brightness-50"
                alt="Fondo"
            />
        </div>
        <div className="z-1 bg-opacity-50 p-8 rounded">
            <h2 className="text-white text-center text-3xl font-bold">Lo Último</h2>
            <a href="https://portalweb.insico.cl/Cholchol/Permisos/">
                <img className='max-w-lg w-full h-auto rounded shadow-lg mt-4' src={im1} alt="Permiso-Circulacion" />
            </a>
        </div>
    </section>
);

export default Section1;
