import '../App.css'
import { useNavigate } from 'react-router-dom'
export default function MainBodyInformation (){
    const navigate=useNavigate()
    return(
        <article className='main_content_displayed'>
           <header className='main_content_displayed_header'>
            <button>
            &larr; Volver
            </button>
            <p>Inventario</p>
           </header>
           <main className='main_content_displayed_main'>
            <div onClick={()=>navigate('/create')}>
                <h3>
                <span className='logo_app'>&#43;</span> Agregar nuevo producto
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div onClick={()=>navigate('/findproduct')}>
            <h3>
                <span className='logo_app'>&#43;</span>Buscar producto
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div onClick={()=>navigate('/modify')}>
            <h3>
                <span className='logo_app'>&#43;</span> Modificar producto
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

           </main>
        </article>
    )
}