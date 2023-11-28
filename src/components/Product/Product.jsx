
export const Product = ( {image, description, price} ) => {
    return (
        <section className="flex flex-row mb-10">
        <article className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt="img"/>
            <p className="text-gray-700 text-base">{ description }</p>
            <p className="font-bold text-xl mb-2">{ price }</p>
        </article>
        </section>
    )
}