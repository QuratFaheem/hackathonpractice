//import Link from "next/link"
import OurProductCards from "./OurProductList";

export default function OurProducts(){
    return(
<div className="category-section mx-12 mb-8 mt-11">
  
  <svg width="900" height="103" viewBox="0 0 900 103" fill="none" xmlns="">
    <rect width="10" height="40" rx="0" fill="#DB4444" />
    
    <text x="25" y="30" fill="red" fontSize="18px" fontFamily="Arial">
      Our Products
    </text></svg>
    <h2 className="mx-2 text-3xl font-bold mt-0">Explore Our Products</h2>
    {/* Include the rest of the SVG paths */}
  <OurProductCards/>
</div>


  );
};
