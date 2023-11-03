import FooterBodyInformation from "../TagsContainers/FooterApp";
import NavBar from "../TagsContainers/NavBar";
import { useForm } from "react-hook-form";
import { queryGetData } from "../customFetching/gettingData";
import { useMutation } from "react-query";
import { updateProduct } from "../customFetching/patchData";
import { useNavigate } from 'react-router-dom';

export default function ModifyRequiredProduct(){

  const {register, handleSubmit, formState:{errors},reset} =useForm()
  const query =queryGetData(`${1}`)
  const navigate = useNavigate();
  const {mutate}=useMutation(updateProduct)


  

  const submitModifyDataOfProduct=handleSubmit(async(data)=>{
    const code = data.code; // Obtén el código del producto solicitado
    const findProductToModify = query.data.find((e) => e.codigo === code); //buscar el primer producto que coincidad con el codigo
    let dataForm={
        "nombre": data.name,
        "imagen": "https://www.bebiendoestrellas.com.ar/productos/aperitivo-americano-gancia-950-ml/",
        "descripcion": data.description,
        "valor":data.price,
        "cantidad": data.amount,
        "margen": data.margin,
    }
    if (findProductToModify) { //Si el producto existe ejecuto el codigo
      
        // Realiza la solicitud PATCH con los datos y el ID del producto
        mutate( {dataForm, idProduct:findProductToModify.id},{ //Como acepta un solo parametro de varibles, se debe desestructurar en la funcion que envia el patch tambien
            onSuccess: () => {
                console.log('Producto modificado con éxito');
              },
              onError: (error) => {
                console.error('Error al intentar modificar el producto:', error);
              },
        } );
        reset() //Limpio el formulario
    } else {
      console.log('No se encuentra el producto');
    }
  })
    return(
        <div className="modify_product_displayed">
            <NavBar/>
            <article className='main_content_displayed'>
                <header className='main_content_displayed_header'>
                    <button onClick={()=>navigate(-1)}>
                    &larr; Volver
                    </button>
                    <p>Modificar producto</p>
                </header>
                <form className="main_content_displayed_modify_displayed" onSubmit={submitModifyDataOfProduct}>
                    <div className='options_create'>
                       <label htmlFor="">Codigo</label>
                       <input type="text"
                       {
                        ...register("code",{required:{
                            value:true,
                            message:'Codigo requerido'
                        },
                        minLength:{
                            value:3,
                            message:'El codigo no puede ser menor a 3 digitos'
                        },
                        maxLength:{
                            value:10,
                            message:'El codigo no puede ser mayor a 10 digitos'
                        },
                        pattern:{
                            value:/^[0-9]+$/,
                            message:'El codigo solo pueden ser numeros'
                        }
                    })
                       }
                       />
                       {errors.code && <span className='alert_input'>{errors.code.message}</span>}
                    </div>
                    <div className='options_create'>
                        <label htmlFor="">Nombre</label>
                        <input type="text" 
                         {
                            ...register("name",{required:{
                                value:true,
                                message:'Nombre requerido'
                            },
                            minLength:{
                                value:6,
                                message:'El nombre no puede ser menor a 6 caracteres'
                            },
                            maxLength:{
                                value:15,
                                message:'El nombre no puede ser mayor a 15 caracteres'
                            }                        
                        })
                           }/>
                       {errors.name && <span className='alert_input'>{errors.name.message}</span>}
                    </div>
                    <div className='options_create'>
                        <label htmlFor="">Descripcion</label>
                        <input type="text" 
                         {
                            ...register("description",{required:{
                                value:true,
                                message:'Descripcion requerido'
                            },
                            minLength:{
                                value:6,
                                message:'La descripcion no puede ser menor a 6 caracteres'
                            },
                            maxLength:{
                                value:25,
                                message:'La descripcion no puede ser mayor a 25 caracteres'
                            } 
                        })
                           } />
                       {errors.description && <span className='alert_input'>{errors.description.message}</span>}
                    </div>
                    <div className='options_create'>
                        <label htmlFor="">Cantidad</label>
                        <input type="text" 
                         {
                            ...register("amount",{required:{
                                value:true,
                                message:'Cantidad requerida'
                            },
                            minLength:{
                                value:2,
                                message:'La cantidad no puede ser menor a 2 digitos'
                            },
                            maxLength:{
                                value:5,
                                message:'La cantidad no puede ser mayor a 5 digitos'
                            },
                            pattern:{
                                value:/^[0-9]+$/,
                                message:'La cantidad solo pueden ser numeros'
                            }
                        })
                           }/>
                       {errors.amount && <span className='alert_input'>{errors.amount.message}</span>}
                    </div>
                    <div className='options_create'>
                        <label htmlFor="">Cantidad Estandar</label>
                        <input type="text" 
                         {
                            ...register("amount_estandar",{required:{
                                value:true,
                                message:'Cantidad Estandar requerida'
                            },
                            minLength:{
                                value:2,
                                message:'La cantidad estandar no puede ser menor a 2 digitos'
                            },
                            maxLength:{
                                value:5,
                                message:'La cantidad estandar no puede ser mayor a 5 digitos'
                            },
                            pattern:{
                                value:/^[0-9]+$/,
                                message:'La cantidad estandar solo pueden ser numeros'
                            }
                        })
                           } />
                       {errors.amount_estandar && <span className='alert_input'>{errors.amount_estandar.message}</span>}
                    </div>
                    <div className='options_create'>
                         <label htmlFor="">Costo</label>
                         <input type="text"
                          {
                            ...register("cost",{required:{
                                value:true,
                                message:'Costo requerido'
                            },
                            minLength:{
                                value:2,
                                message:'El costo no puede ser menor a 2 digitos'
                            },
                            maxLength:{
                                value:5,
                                message:'El costo no puede ser mayor a 5 digitos'
                            },
                            pattern:{
                                value:/^[0-9]+$/,
                                message:'El costo solo pueden ser numeros'
                            }
                        })
                           }
                            />
                       {errors.cost && <span className='alert_input'>{errors.cost.message}</span>}
                    </div>
                    <div className='options_create'>
                          <label htmlFor="">Margen de Venta</label>
                          <input type="text" 
                           {
                            ...register("margin_sell",{required:{
                                value:true,
                                message:'Margen de venta requerido'
                            },
                            minLength:{
                                value:2,
                                message:'El margen de venta no puede ser menor a 2 digitos'
                            },
                            maxLength:{
                                value:5,
                                message:'El margen de venta no puede ser mayor a 5 digitos'
                            },
                            pattern:{
                                value:/^[0-9]+$/,
                                message:'El margen de venta solo pueden ser numeros'
                            }
                        })
                           }
                          />
                       {errors.margin_sell && <span className='alert_input'>{errors.margin_sell.message}</span>}
                    </div>
                    <div className='options_create'>
                         <label htmlFor="">Precio</label>
                         <input type="text" 
                          {
                            ...register("price",{required:{
                                value:true,
                                message:'Precio requerido'
                            },
                            minLength:{
                                value:2,
                                message:'El codigo no puede ser menor a 2 digitos'
                            },
                            maxLength:{
                                value:5,
                                message:'El precio no puede ser mayor a 5 digitos'
                            },
                            pattern:{
                                value:/^[0-9]+$/,
                                message:'El precio solo pueden ser numeros'
                            }
                        })
                           }
                         />
                       {errors.price && <span className='alert_input'>{errors.price.message}</span>}
                    </div>
                    <div className='btn_submit'>
                        <button onClick={()=>reset()}>Cancelar</button>
                        <button type="submit">Guardar Cambios</button>
                    </div>
                </form>
            </article>
            <FooterBodyInformation/>
        </div>
    )
}