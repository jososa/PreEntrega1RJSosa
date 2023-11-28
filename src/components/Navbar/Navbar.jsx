import logo from '../../assets/logo.png'
import Cart from '../Cart/Cart'

export const Navbar = () => {

    return (
        <header className="bg-gray-800">
            <div className="container m-auto py-6 flex justify-between items-center">
                <img className="w-20 h-20" src={logo} alt="Logo"/>
            <nav className="flex gap-8">
                <a className="text-white hover:text-orange-400 text-lg uppercase font-semibold" href="#">Inicio</a>
                <a className="text-white hover:text-orange-400 text-lg uppercase font-semibold" href="#">Tienda</a>
                <a className="text-white hover:text-orange-400 text-lg uppercase font-semibold" href="#">Nosotros</a>
                <a className="text-white hover:text-orange-400 text-lg uppercase font-semibold" href="#">Contacto</a>
            </nav>
            <Cart/>
            </div>
        </header>
    )
}
