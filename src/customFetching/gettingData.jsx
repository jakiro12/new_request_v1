import {useQuery} from 'react-query'
const URL='https://web-production-0986.up.railway.app'

const getAllCurrentProducts=async (storeId)=>{
    const res= await fetch(`${URL}/api/v1/productos/${storeId}`)
    return res.json()
}

const getSelectecProductDetails=async({queryKey})=>{
    const res= await fetch(`${URL}/api/v1/productos/1/${queryKey[1]}`)
    return res.json()
}

export const queryGetData=(storeNumber) =>{
    const query =useQuery(
    ['products'],
  ()=>getAllCurrentProducts(storeNumber),
    {
        refetchOnWindowFocus:false,
        staleTime:30000
    }
)
return query
}

export const queryGetProductData=(productNumber)=>{
    const queryProduct=useQuery(
        ['selectProduct',productNumber],
        getSelectecProductDetails,
        {
            refetchOnWindowFocus:false
        }
    )
    return queryProduct
}