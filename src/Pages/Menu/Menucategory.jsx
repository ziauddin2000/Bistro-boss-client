import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const Menucategory = ({
  items,
  btnTitle,
  img,
  title,
  subtitle,
  buttonLink,
}) => {
  return (
    <>
      {/* Cover */}
      {title && <Cover img={img} title={title} subtitle={subtitle}></Cover>}
      {/* Menu Item */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10">
        {items.map((menu) => (
          <MenuItem key={menu._id} menu={menu}></MenuItem>
        ))}
      </div>
      {/* View Full Menu */}
      <div className="py-6 flex items-center justify-center mt-6">
        <Link
          to={buttonLink}
          className="btn btn-outline uppercase border-0 border-b-2"
        >
          {btnTitle}
        </Link>
      </div>
    </>
  );
};

export default Menucategory;
