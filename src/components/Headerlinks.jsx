import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Headerlink = () => {
  return (
    <div className="h-full w-11/12 mx-auto p-2">
      <div className="flex justify-between items-center">
        <FaBars size={20}/>
        <div className="flex gap-6">
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
        </div>
        <FaUserCircle size={20}/>
      </div>
    </div>
  );
};

export default Headerlink;