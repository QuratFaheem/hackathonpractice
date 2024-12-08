//import Link from "next/link"
import Flashsales from "./flashsales"
import ProductCard from "./Productcard"
import BrowseByCategory from "./browsebycategory"


export default function Productlist(){
    return(
      <div>
<Flashsales />
<ProductCard />
<div className="flex justify-center items-center mt-11">
  <button className="mt-2 px-11 py-2 bg-red-500 text-white hover:bg-red-800">
    View All Products
  </button>
</div>
<hr className="mt-6"></hr>
<BrowseByCategory />


      </div>
      
    )
}