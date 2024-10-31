'use client'

import {useEffect, useState} from "react";
import {getProducts} from "@/component/ModalProducts/ModalProductViewModel/getProducts";

interface modalPropsInterface {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    setSelectedProduct: (product: object) => void;
}

const ModalProducts = ({isOpen,setIsOpen,setSelectedProduct}:modalPropsInterface) => {

    const [listProduct, setListProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        responseProduc()
            .then(data => setListProduct(data.result))
            .finally(() => setIsLoading(true));
    }, []);

    const responseProduc = async ()=>{
        const resp = await getProducts()
        console.log("respuesta",resp)
        return resp
    }
    const handledSelectedItem = (product:object) => {
        setSelectedProduct(product);
        setIsOpen(false)
    }

    return (
        <>
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    {/* Contenido del Modal */}
                    <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Productos</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-80 overflow-hidden overflow-y-scroll">
                            {listProduct.length > 0 && listProduct.map((product: object, index: number) => (
                                <button key={index} onClick={()=>handledSelectedItem(product)} className="bg-gray-100 p-4 rounded-md shadow-md flex flex-colitems-center">
                                    <img src={product.image} alt={product.category} className="h-24 w-24 object-cover rounded-md mb-2 mx-2" />
                                    <h3 className="text-lg font-semibold">{product.title}</h3>
                                    <p className="text-gray-700 font-medium">${product.price}</p>
                                </button>
                            ))}
                        </div>

                        <button
                            className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
export default ModalProducts;
