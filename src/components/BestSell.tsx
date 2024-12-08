//import Link from "next/link"
import ProductCard from "./Productcard";
import SellingProduct from "./sellingProduct";


export default function BestSell(){
    return(
<div className="category-section mx-12 mb-8">
  <svg width="900" height="103" viewBox="0 0 900 103" fill="none" xmlns="">
    <rect width="10" height="40" rx="0" fill="#DB4444" />
    <text x="25" y="30" fill="red" fontSize="18px" fontFamily="Arial">
      The Month
    </text>
  </svg>

  <div className="flex justify-between items-center">
    <h2 className="mx-2 text-3xl font-bold mt-0">Best Selling Products</h2>
    <button className="mt-2 px-4 py-2 bg-red-500 text-white hover:bg-red-800">
      View All Products
    </button>
  </div>

  {/* Include the rest of the SVG paths */}
  <SellingProduct />
</div>



  );
};
