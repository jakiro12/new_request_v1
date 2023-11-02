import '../App.css';
import FooterBodyInformation from '../TagsContainers/FooterApp';
import NavBar from '../TagsContainers/NavBar';
import { useMutation } from 'react-query';
import {useForm} from 'react-hook-form';
import { sendNewProduct } from '../customFetching/postingData';
import { useNavigate } from 'react-router-dom';

export default function CreateNewProduct(){
  const {register, handleSubmit, formState:{errors},reset} =useForm()
  const navigate = useNavigate(); 

  const {mutate}=useMutation(sendNewProduct)
  const submitFormInformation=handleSubmit((data)=>{
  let dataForm = {
      categoriaId: 1,
      negocioId: 1,
      nombre: data.name,
      codigo: data.code,
      imagen: 'https://www.bebiendoestrellas.com.ar/productos/aperitivo-americano-gancia-950-ml/',
      descripcion: data.description,
      valor: data.price,
      cantidad: 10,
      margen: data.margin
    };
    mutate(dataForm, {
      onSuccess: () => {
        console.log('Producto creado exitosamente');
        // Realiza acciones adicionales después de una solicitud exitosa
      },
      onError: (error) => {
        console.error('Error al intentar crear el producto:', error);
        // Maneja el error aquí si es necesario
      },
    });
    reset()
  })

  

    return(
        <div className='create_product_displayed'>
           <NavBar/>
           <article className='main_content_displayed'>
           <header className='main_content_displayed_header'>
            <button onClick={()=>navigate(-1)}>
            &larr; Volver
            </button>
            <p>Agregar nuevo producto</p>
           </header>
           <form className='main_content_displayed_create_p' onSubmit={submitFormInformation}>
              <div className='options_create'>
                <label  >Codigo</label>
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
              <label >Nombre</label>
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
                 }
                 />
                 {errors.name && <span className='alert_input'>{errors.name.message}</span>}
              </div>
              <div className='options_create'>
              <label >Descripcion</label>
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
                  } })}
                />
                 {errors.description && <span className='alert_input'>{errors.description.message}</span>}
              </div>
              <div className='final_options_create'>
                <div><label >Precio</label>
                <input type="text" placeholder='$10'
                {
                  ...register("price",{required:{
                      value:true,
                      message:'Precio requerido'
                  },
                  minLength:{
                      value:2,
                      message:'El precio no puede ser menor a 2 digitos'
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
                <div>
                <label >Margen de Venta</label>
                <input type="text" placeholder='%12' 
                {
                  ...register("margin",{required:{
                      value:true,
                      message:'Margen requerido'
                  },
                  minLength:{
                      value:2,
                      message:'El Margen no puede ser menor a 2 digitos'
                  },
                  maxLength:{
                      value:5,
                      message:'El Margen no puede ser mayor a 5 digitos'
                  },
                  pattern:{
                      value:/^[0-9]+$/,
                      message:'El precio solo pueden ser numeros'
                  }
              })
                 }
                />
                 {errors.margin && <span className='alert_input'>{errors.margin.message}</span>}
                </div>
                
              </div>
              <button className='submit_new_product' type='submit'>Crear Producto</button>
           </form>
            </article>
           <FooterBodyInformation/>
        </div>
    )
}