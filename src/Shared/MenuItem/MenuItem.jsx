const MenuItem = ({ menu }) => {
  return (
    <div className="flex justify-between gap-5">
      {/* Image Content */}
      <div className="flex gap-5">
        <img
          src={menu.image}
          className="w-[120px] object-cover"
          style={{ borderRadius: "0px 200px 200px 200px" }}
          alt=""
        />
        <div>
          <h4 className="text-xl font-semibold mb-2">{menu.name}</h4>
          <p className="text-base font-normal">{menu.recipe}</p>
        </div>
      </div>
      {/* Price */}
      <p className="text-base text-orange-400 font-semibold">${menu.price}</p>
    </div>
  );
};

export default MenuItem;
