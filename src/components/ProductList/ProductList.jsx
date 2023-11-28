import { Product } from "../Product/Product"
import aire from "../../assets/aire.png"
import tv from "../../assets/smart-tv.png"
import aspiradora from "../../assets/aspiradora.png"

export const ProductList = () => {

    return (
        <div>
            <h1 className="text-4xl uppercase font-semibold py-12 text-center">Productos</h1>

            <section className="flex pl-12 space-x-12 items-center">

                <Product image={aire} description="Aire Acondicionado Inverter" price="$17890" />

                <Product image={tv} description="TV Smart Android" price="$7195" />

                <Product image={aspiradora} description="Aspiradora Robot" price="$5895" />
            </section>
        </div>

    )

}