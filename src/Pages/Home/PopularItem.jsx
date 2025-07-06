import CmnTitle from "../../components/CmnTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";

const PopularItem = () => {
  let { menus } = useMenu(); // loading o astece but use kora hoynai akhono
  let popularMenu = menus.filter((menu) => menu.category == "popular");

  return (
    <div className="max-w-screen-xl mx-auto py-6 px-2">
      <CmnTitle subtitle="---Check it out---" title="Popular Menu"></CmnTitle>

      {/* Popular Items */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10">
        {popularMenu.map((menu) => (
          <MenuItem key={menu._id} menu={menu}></MenuItem>
        ))}
      </div>

      {/* View Full Menu */}
      <div className="py-6 flex items-center justify-center mt-6">
        <Link to="/menu" className="btn btn-neutral btn-outline">
          View Full Menu
        </Link>
      </div>
    </div>
  );
};

export default PopularItem;
