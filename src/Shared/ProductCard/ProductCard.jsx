const ProductCard = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {items.map((item) => (
        <div key={item._id} className="card bg-base-100 shadow-sm">
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.recipe}</p>
            <div className="card-actions items-center justify-between mt-2">
              <h2 className="text-xl font-semibold">${item.price}</h2>
              <button className="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
