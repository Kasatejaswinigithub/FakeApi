function ProductCard(p)
{
    return(
        <div class="card">
            <img src={p.image}></img>
            <p>{p.title}</p>
            <p>{p.price}</p>
            <p>{p.rating.rate}</p>
        </div>
    )
}
export default ProductCard