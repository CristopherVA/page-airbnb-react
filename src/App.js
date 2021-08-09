import React from 'react';
import actividad1 from './assets/img/actividad1.jpg';
import actividad2 from './assets/img/actividad2.jpg';
import actividad3 from './assets/img/actividad3.jpg';
import actividad4 from './assets/img/actividad4.jpg';
import actividad5 from './assets/img/actividad5.jpg';
import bg from './assets/img/bg.jpg';
import hospedaje1 from './assets/img/hospedaje1.jpg';
import hospedaje2 from './assets/img/hospedaje2.jpg';
import hospedaje3 from './assets/img/hospedaje3.jpg';
import hospedaje4 from './assets/img/hospedaje4.jpg';
import mejores1 from './assets/img/mejores1.jpg';
import mejores2 from './assets/img/mejores2.jpg';
import mejores3 from './assets/img/mejores3.jpg';

const App = () => {
    return (
        <div className="container mx-auto ">
            <div className="bg-auto h-auto py-24 px-10 mt-5 text-white mx-2 " style={{
                backgroundImage: `url(${ bg })`
            }}>
                <div className="md:w-1/2 ">
                    <p className="font-bold uppercase text-sm">Experienias</p>
                    <p className="text-3xl font-bold uppercase">Porque no viajas para dormir</p>
                    <p className="mb-10 text-2xl leading-none">Actividades memorables organizadas por habitantes locales, creadas para personas curiosas.</p>
                    <a href="#" className="px-8 py-4 bg-white uppercase font-bold text-black text-xs rounded hover:bg-green-600 hover:text-white">Mas informacion</a>
                </div>
            </div>

            <div className="mejores-experiencias mt-5 ">
                <h2 className="text-3xl text-gray-800 font-bold mx-2">Alojamiento en Nueva York</h2 >
                <div className="md:flex md:justify-between mt-2 ">
                    <div className="mx-2 mb-3 flex-1 ">
                        <img className="mx-auto" src={hospedaje1} alt="mejores1" />
                        <div className="mt-3 text-center md:text-left leading-relexed">
                            <p className="text-sm font-bold uppercase text-gray-600">Habitacion Sencilla - Nueva York</p>
                            <p className="text-lg font-bold text-gray-900">Departamento de lujo Manhattan</p>
                            <p className="text-gray-600 text-sm">$3,500 MXM por personas</p>
                        </div>
                    </div>

                    <div className="mx-2 mb-3 flex-1">
                        <img className="mx-auto" src={hospedaje2} alt="mejores1" />
                        <div className="mt-3 text-center md:text-left leading-relexed">
                            <p className="text-sm font-bold uppercase text-gray-600">Habitacion Sencilla - Nueva York</p>
                            <p className="text-lg font-bold text-gray-900">Departamento de lujo Manhattan</p>
                            <p className="text-gray-600 text-sm">$3,500 MXM por personas</p>
                        </div>
                    </div>

                    <div className="mx-2 mb-3 flex-1">
                        <img className="mx-auto" src={hospedaje3} alt="mejores1" />
                        <div className="mt-3 text-center md:text-left leading-relexed">
                            <p className="text-sm font-bold uppercase text-gray-600">Habitacion Sencilla - Nueva York</p>
                            <p className="text-lg font-bold text-gray-900">Departamento de lujo Manhattan</p>
                            <p className="text-gray-600 text-sm">$3,500 MXM por personas</p>
                        </div>
                    </div>

                    <div className="mx-2 mb-3 flex-1">
                        <img className="mx-auto" src={hospedaje4} alt="mejores1" />
                        <div className="mt-3 text-center md:text-left leading-relexed">
                            <p className="text-sm font-bold uppercase text-gray-600">Habitacion Sencilla - Nueva York</p>
                            <p className="text-lg font-bold text-gray-900">Departamento de lujo Manhattan</p>
                            <p className="text-gray-600 text-sm">$3,500 MXM por personas</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="experiencias-nueva-york mt-5 ">
                <h2 className="text-3xl text-gray-800 font-bold mx-2">Experiencias en Nueva York</h2 >
                <div className="md:flex md:justify-between mt-2">
                    <div className="mx-2 mb-3 flex-1 ">
                        <img className="mx-auto" src={actividad1} alt="mejores1" />
                        <div className="mt-3 text-center md:text-left leading-relexed">
                            <p className="text-sm font-bold uppercase text-gray-600">Clase de baile</p>
                            <p className="text-lg font-bold text-gray-900">Clase de baile en Brooklyn</p>
                            <p className="text-gray-600 text-sm">$1,200 MXM por personas</p>
                            <p className="text-xs text-gray-500">Todos los idiomas</p>
                        </div>
                    </div>

                    <div className="mx-2 mb-3 flex-1">
                        <img className="mx-auto" src={actividad2} alt="mejores1" />
                        <div className="mt-3 text-center md:text-left leading-relexed">
                            <p className="text-sm font-bold uppercase text-gray-600">Clase de baile</p>
                            <p className="text-lg font-bold text-gray-900">Clase de baile en Brooklyn</p>
                            <p className="text-gray-600 text-sm">$1,200 MXM por personas</p>
                            <p className="text-xs text-gray-500">Todos los idiomas</p>
                        </div>
                    </div>

                    <div className="mx-2 mb-3 flex-1">
                        <img className="mx-auto" src={actividad3} alt="mejores1" />
                        <div className="mt-3 text-center md:text-left leading-relexed">
                            <p className="text-sm font-bold uppercase text-gray-600">Clase de baile</p>
                            <p className="text-lg font-bold text-gray-900">Clase de baile en Brooklyn</p>
                            <p className="text-gray-600 text-sm">$1,200 MXM por personas</p>
                            <p className="text-xs text-gray-500">Todos los idiomas</p>
                        </div>
                    </div>

                    <div className="mx-2 mb-3 flex-1">
                        <img className="mx-auto" src={actividad4} alt="mejores1" />
                        <div className="mt-3 text-center md:text-left leading-relexed">
                            <p className="text-sm font-bold uppercase text-gray-600">Clase de baile</p>
                            <p className="text-lg font-bold text-gray-900">Clase de baile en Brooklyn</p>
                            <p className="text-gray-600 text-sm">$1,200 MXM por personas</p>
                            <p className="text-xs text-gray-500">Todos los idiomas</p>
                        </div>
                    </div>

                    <div className="mx-2 mb-3 flex-1">
                        <img className="mx-auto" src={actividad5} alt="mejores1" />
                        <div className="mt-3 text-center md:text-left leading-relexed">
                            <p className="text-sm font-bold uppercase text-gray-600">Clase de baile</p>
                            <p className="text-lg font-bold text-gray-900">Clase de baile en Brooklyn</p>
                            <p className="text-gray-600 text-sm">$1,200 MXM por personas</p>
                            <p className="text-xs text-gray-500">Todos los idiomas</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="destinos-destacados mt-5 ">
                <h2 className="text-3xl text-gray-800 font-bold mx-2 mb-0">Destinos Destacados</h2>
                <p className="text-lg mb-3 text-gray-700 mx-2">Explora fantasticos alojamientos con todas las comodidas de tu hogar y mucho mas</p>

                <div className="md:flex md:justify-between mt-2">
                    <div className="mx-2 mb-3 flex-1 ">
                        <img className="mx-auto" src={mejores1} alt="mejores1" />
                        <div className="mt-3 text-center md:text-left leading-relexed">
                            <p className="text-sm font-bold uppercase text-pink-700">Mas de 8000 de alojamientos verificado</p>
                            <p className="text-gray-600 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit corporis laborum minima modi incidunt animi ipsum, culpa ipsam quis ad tempora natus veniam debitis illo voluptas repellat atque porro nam!</p>
                        </div>
                    </div>

                    <div className="mx-2 mb-3 flex-1 ">
                        <img className="mx-auto" src={mejores2} alt="mejores1" />
                        <div className="mt-3 text-center md:text-left leading-relexed">
                            <p className="text-sm font-bold uppercase text-pink-700">Mas de 8000 de alojamientos verificado</p>
                            <p className="text-gray-600 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit corporis laborum minima modi incidunt animi ipsum, culpa ipsam quis ad tempora natus veniam debitis illo voluptas repellat atque porro nam!</p>
                        </div>
                    </div>

                    <div className="mx-2 mb-3 flex-1 ">
                        <img className="mx-auto" src={mejores3} alt="mejores1" />
                        <div className="mt-3 text-center md:text-left leading-relexed">
                            <p className="text-sm font-bold uppercase text-pink-700">Mas de 8000 de alojamientos verificado</p>
                            <p className="text-gray-600 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit corporis laborum minima modi incidunt animi ipsum, culpa ipsam quis ad tempora natus veniam debitis illo voluptas repellat atque porro nam!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;