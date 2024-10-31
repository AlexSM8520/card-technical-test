"use client";

import {useState} from "react";
import ModalProducts from "@/component/ModalProducts";
import FitCard from "@/component/FitCard";

const Grids = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedProduct, setSelectedProduct] = useState()
    return (

        <div className="flex justify-center p-4">
            {/* Contenedor centrado al 50% del ancho */}
            <div className="w-full space-y-8 sm:w-1/2 " >
                {/* Grid 1x5 */}
                <div className="grid grid-cols-5 gap-4 border-2 border-gray-300 p-4">
                    <div className="h-40 bg-blue-300 border border-gray-500" onClick={()=>setIsOpen(true)}>
                        { selectedProduct && <FitCard id={1} title={selectedProduct.title} image={selectedProduct.image} category={selectedProduct.category} price={selectedProduct.price}/>}
                    </div>
                    <div className="h-40 bg-green-300 border border-gray-500"></div>
                    <div className="h-40 bg-red-300 border border-gray-500"></div>
                    <div className="h-40 bg-yellow-300 border border-gray-500"></div>
                    <div className="h-40 bg-purple-300 border border-gray-500"></div>
                </div>

                {/* Grid 2x2 */}
                <div className="grid grid-cols-2 gap-4 border-2 border-gray-300 p-4">
                    <div className="h-40 bg-blue-300 border border-gray-500" onClick={()=>setIsOpen(true)}>
                        { selectedProduct && <FitCard id={1} title={selectedProduct.title} image={selectedProduct.image} category={selectedProduct.category} price={selectedProduct.price}/>}
                    </div>
                    <div className="h-40 bg-green-300 border border-gray-500"></div>
                    <div className="h-40 bg-red-300 border border-gray-500"></div>
                    <div className="h-40 bg-yellow-300 border border-gray-500"></div>
                </div>

                {/* Grid 3x3 */}
                <div className="grid grid-cols-3 gap-4 border-2 border-gray-300 p-4">
                    <div className="h-52 bg-blue-300 border border-gray-500" onClick={()=>setIsOpen(true)}>
                        { selectedProduct && <FitCard id={1} title={selectedProduct.title} image={selectedProduct.image} category={selectedProduct.category} price={selectedProduct.price}/>}
                    </div>
                    <div className="h-52 bg-green-300 border border-gray-500"></div>
                    <div className="h-52 bg-red-300 border border-gray-500"></div>
                    <div className="h-52 bg-yellow-300 border border-gray-500"></div>
                    <div className="h-52 bg-purple-300 border border-gray-500"></div>
                    <div className="h-52 bg-pink-300 border border-gray-500"></div>
                    <div className="h-52 bg-indigo-300 border border-gray-500"></div>
                    <div className="h-52 bg-teal-300 border border-gray-500"></div>
                    <div className="h-52 bg-orange-300 border border-gray-500"></div>
                </div>
            </div>

            {
                isOpen && (
                    <ModalProducts isOpen={isOpen} setIsOpen={setIsOpen} setSelectedProduct={setSelectedProduct}/>
                )
            }
        </div>
    );
};

export default Grids;
