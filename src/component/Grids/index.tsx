"use client";

import {useState} from "react";
import ModalProducts from "@/component/ModalProducts";
import FitCard from "@/component/FitCard";

const Grids = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedProduct, setSelectedProduct] = useState()

    const SPACES_GRID = {
        box:[1,2,3,4,5],
        rectangle:[1,2,3,4],
        largeBox:[1,2,3,4,5,6,7,8,9],
    }

    return (

        <div className="flex justify-center p-4">
            {/* Contenedor centrado al 50% del ancho */}
            <div className="w-full space-y-8 sm:w-1/2 " >
                {/* Grid 1x5 */}
                <div className="grid grid-cols-5 gap-4 border-2 border-gray-300 p-4">
                    {
                        SPACES_GRID.box.map((item:number)=> (
                            <div key={item} className="h-40 bg-blue-300 border border-gray-500" onClick={() => setIsOpen(true)}>
                                {selectedProduct &&
                                    <FitCard id={1} title={selectedProduct.title} image={selectedProduct.image}
                                             category={selectedProduct.category} price={selectedProduct.price}/>}
                            </div>
                        ))
                    }
                </div>

                {/* Grid 2x2 */}
                <div className="grid grid-cols-2 gap-4 border-2 border-gray-300 p-4">
                    {
                        SPACES_GRID.rectangle.map((item:number)=> (
                            <div key={item} className="h-40 bg-green-300 border border-gray-500" onClick={() => setIsOpen(true)}>
                                {selectedProduct &&
                                    <FitCard id={1} title={selectedProduct.title} image={selectedProduct.image}
                                             category={selectedProduct.category} price={selectedProduct.price}/>}
                            </div>
                        ))
                    }
                </div>

                {/* Grid 3x3 */}
                <div className="grid grid-cols-3 gap-4 border-2 border-gray-300 p-4">
                    {
                        SPACES_GRID.largeBox.map((item:number)=> (
                            <div key={item} className="h-52 bg-amber-400 border border-gray-500" onClick={() => setIsOpen(true)}>
                                {selectedProduct &&
                                    <FitCard id={1} title={selectedProduct.title} image={selectedProduct.image}
                                             category={selectedProduct.category} price={selectedProduct.price}/>}
                            </div>
                        ))
                    }
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
