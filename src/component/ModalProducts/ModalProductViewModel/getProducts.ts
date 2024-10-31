export const getProducts = async () => {
    try {
        const respProduct = await fetch('https://fakestoreapi.com/products',
            {
                method: 'GET',
            }
        );

        const data = await respProduct.json();
        console.log("response Products",data);

        if(respProduct.status === 200) {
            return {
                status: 200,
                result: data
            };
        }
    } catch (error) {
        console.error(error);
        return{
            error: error,
        }
    }
}
