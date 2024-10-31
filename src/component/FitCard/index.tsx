interface itemSelectedInterface {
    id: number;
    title: string;
    image: string;
    category: string;
    price: number;
}

const FitCard = ({id,title,image,category,price}:itemSelectedInterface) => {
    return(
        <>
            <div
                key={id}
                className="bg-gray-100 rounded-md shadow-md flex flex-col w-full h-full overflow-hidden"
            >
                <div className="grid grid-cols-2 w-full h-full">
                    {/* Columna para la imagen */}
                    <div className="flex justify-center items-center">
                        <img
                            src={image}
                            alt={category}
                            className="w-full max-h-24 object-contain rounded-md" // Ajustar max-h según tus necesidades
                        />
                    </div>
                    {/* Columna para el título y precio */}
                    <div className="flex flex-col justify-center items-start p-4">
                        <h5 className="text-lg font-semibold text-left text-sm">${price}</h5>
                        <p className="text-gray-700 font-medium text-left text-xs">{title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FitCard;
