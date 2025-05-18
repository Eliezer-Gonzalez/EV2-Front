import React, { useState } from 'react';
import "../global.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    const [errores, setErrores] = useState({});
    const [enviado, setEnviado] = useState(false);

    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validarTelefono = (telefono) => {
        const regex = /^\d{9}$/;
        return regex.test(telefono);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validarFormulario = () => {
        const nuevosErrores = {};

        if (!formData.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es requerido';
        }

        if (!formData.email.trim()) {
            nuevosErrores.email = 'El correo electrónico es requerido';
        } else if (!validarEmail(formData.email)) {
            nuevosErrores.email = 'Formato de correo inválido';
        }

        if (!formData.telefono.trim()) {
            nuevosErrores.telefono = 'El teléfono es requerido';
        } else if (!validarTelefono(formData.telefono)) {
            nuevosErrores.telefono = 'El teléfono debe tener 9 dígitos';
        }

        if (!formData.mensaje.trim()) {
            nuevosErrores.mensaje = 'El mensaje es requerido';
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validarFormulario()) {
            console.log('Formulario enviado:', formData);
            setEnviado(true);
            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                mensaje: ''
            });
            setTimeout(() => setEnviado(false), 5000); // El mensaje desaparece después de 5 segundos
        }
    };

    return (
        <div id="contacto" className="w-full max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-cuarto mb-6">Contacto</h2>
            
            {enviado && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded text-center">
                    <p className="font-bold">¡Mensaje recibido exitosamente!</p>
                    <p>La Municipalidad de Cholchol ha recibido su mensaje y pronto se pondrá en contacto con usted.</p>
                </div>
            )}
            
            <form onSubmit={handleSubmit}>
                {/* Campo Nombre */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                        Nombre
                    </label>
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cuarto ${errores.nombre ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Ingrese su nombre"
                    />
                    {errores.nombre && <p className="text-red-500 text-xs mt-1">{errores.nombre}</p>}
                </div>

                {/* Campo Email */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Correo Electrónico
                    </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cuarto ${errores.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="ejemplo@correo.com"
                    />
                    {errores.email && <p className="text-red-500 text-xs mt-1">{errores.email}</p>}
                </div>

                {/* Campo Teléfono */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                        Número de Teléfono
                    </label>
                    <input 
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cuarto ${errores.telefono ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="9 dígitos"
                    />
                    {errores.telefono && <p className="text-red-500 text-xs mt-1">{errores.telefono}</p>}
                </div>

                {/* Campo Mensaje */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
                        Mensaje
                    </label>
                    <textarea 
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cuarto ${errores.mensaje ? 'border-red-500' : 'border-gray-300'}`}
                        rows="4"
                        placeholder="Escriba su mensaje aquí"
                    ></textarea>
                    {errores.mensaje && <p className="text-red-500 text-xs mt-1">{errores.mensaje}</p>}
                </div>

                {/* Botón Enviar */}
                <button 
                    type="submit" 
                    className="w-full bg-cuarto hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                >
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
};

export default ContactForm;



