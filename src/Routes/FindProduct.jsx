import { useState } from 'react';
import '../App.css';
import FooterBodyInformation from '../TagsContainers/FooterApp';
import NavBar from '../TagsContainers/NavBar';
import { queryGetData } from '../customFetching/gettingData';
import { useNavigate } from 'react-router-dom';


export default function FindRequiredProduct(){
    const [selectedOption, setSelectedOption] = useState("all"); // Estado para la opción de ver todos

    const navigate = useNavigate(); 

    const query =queryGetData(`${1}`) //Traigo todos los productos de la tienda con el id: 1

    const currentAmountInStock=()=>{
        let sum = 0
        let resValues= query.data.filter((e)=> e.valor > 0)
        for (let i = 0; i < resValues.length; i++) {
            sum += resValues[i].valor;
          }
        return Number(sum) //Retorno la suma de todos los precios 
    }

    const handleSelectChange=(e)=>{
        const value = e.target.value;
        setSelectedOption(value);
    }
    const filteredData = selectedOption === "all"
    ? query.data
    : query.data.sort((a, b) => a.id - b.id).filter((item) => item.id === Number(selectedOption)); //Ordeno y filtro los datos
    return(
        <div className='find_product_displayed'>
          <NavBar/>
          <article className='main_content_displayed'>
            <header className='main_content_displayed_header'>
                <button onClick={()=>navigate(-1)}>
                &larr; Volver
                </button>
                <p>Buscar producto</p>
            </header>
                <main className='main_content_displayed_find_main'>
                   <div className='main_content_displayed_find_options'>
                    <p>Stock {query.isFetching ? <span>Calculating...</span> : currentAmountInStock()} </p>
                        <p>Buscar</p>
                        <select  onChange={handleSelectChange} value={selectedOption}>
                            <option value="all">Todos</option>
                            {
                              query.isFetching ? null : 
                              query.data.sort((a, b) => a.id - b.id).map((e,i)=>
                              (
                                <option key={i} value={i + 1}>{e.id}</option>
                              ))
                            }
                        </select>
                   </div>
                   <div className='main_content_displayed_find_title'>
                    <p>Resultado</p>
                    <button>&larr; Descargar PDF</button>
                   </div>
                   <section className='table_finders'>
                {query.isFetching ?
                 <h3>Cargando-...</h3> : 
                 (
                    <table>
                      <thead>
                        <tr>  
                          <th>Codigo</th>
                          <th>Nombre</th>
                          <th>Descripcion</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((item) => (
                          <tr key={item.id}>                                                       
                            <td>{item.codigo}</td>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                   </section>
                </main>
          </article>
          <FooterBodyInformation/>
        </div>
    )
}