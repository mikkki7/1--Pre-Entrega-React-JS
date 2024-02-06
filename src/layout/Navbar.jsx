import estilosNavBar from "./NavBar.module.css";
import CartWidget from "../common/CartWidget";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
    return (
        <div>
            <header className={estilosNavBar.header}>
                <nav className={estilosNavBar.navBar}>
                    <div className={estilosNavBar.contenedorLogo}>
                        <a href="#"><img src="../../public/logo V.O.webp" className= {estilosNavBar.logo} alt="logo-vidal-ortiz" /></a>
                    </div>
                    <ul className={estilosNavBar.categorias}>
                        <li className={estilosNavBar.lista}><a className={estilosNavBar.enlaces} href="#">Inicio</a></li>
                        <li className={estilosNavBar.lista}><a className={estilosNavBar.enlaces} href="#">Productos</a></li>
                        <li className={estilosNavBar.lista}><a className={estilosNavBar.enlaces} href="#">Servicios</a></li>
                        <li className={estilosNavBar.lista}><a className={estilosNavBar.enlaces} href="#">Contacto</a></li>
                        <li className={estilosNavBar.lista}><a className={estilosNavBar.enlaces} href="#">Ubicación</a></li>
                    </ul>
                    <div className={estilosNavBar.contenedorIconos}>
                        <CartWidget />
                        <div>
                            <AiOutlineUser className={estilosNavBar.iconoUser}/>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;