import {useQuery} from 'react-query'
const URL='https://web-production-0986.up.railway.app'

const getAllCurrentProducts=async (storeId)=>{
    const res= await fetch(`${URL}/api/v1/productos/${storeId}`)
    return res.json()
}



export const queryGetData=(storeNumber) =>{
    const query =useQuery(
    ['products'],
  ()=>getAllCurrentProducts(storeNumber),
    {
        refetchOnWindowFocus:false, //Evito que se refresque la peticion cada vez que ingreso nuevamente al navegador
        staleTime:30000 //Se refresca la peticion cada 30 segundos
    }
)
return query //Retorno la query para utilizar la informacion necesaria cuando muestro productos
}

