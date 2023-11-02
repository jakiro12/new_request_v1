export const updateProduct = async ({dataForm,idProduct}) => { //Desestructurar la informacion que llega de mutation
    try {
      const url = `https://web-production-0986.up.railway.app/api/v1/productos/1/${idProduct}`;
     
  
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataForm),
      });
  
      if (!response.ok) {
        throw new Error('Error en la solicitud PATCH');
      }
        console.log('Producto modificado con éxito');
    } catch (error) {
        console.error('Error al modificar el producto', error);
    }
  };
  