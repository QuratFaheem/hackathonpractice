//import Link from "next/link";
import Image from 'next/image';

export default function CategoriesLpage(){
    return(
        <div className="flex items-center bg-black p-6">
        {/* Left Text Section */}
        <div className="flex-1">
          {/* Categories Title */}
          <h2 className="text-left text-green-600 font-bold mb-4">Categories</h2>
  
          {/* Main Text */}
          <div className="text-left text-white text-6xl">
            Enhance Your <span className="block">Music Experience</span>
          </div>

          {/*Flex circles */}
          <span className="flex space-x-4 mt-7">
  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black font-bold text-sm text-xs text-center">
    23 Hours
  </div>
  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black font-bold text-sm text-xs text-center">
    05 Days
  </div>
  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black font-bold text-sm text-xs text-center">
    59 Minutes
  </div>
  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black font-bold text-xs text-center">
    35 Seconds
  </div>
</span>

<div>
    <button className='mt-8 border-red-500 border bg-green-400 text-white text-center p-3 w-40 h-90'>Buy Now</button>
</div>

</div>
  
        {/* Right Image */}
        <div className="flex-shrink-0">
          <Image
            src="/speaker.jpg"
            alt="Music Categories Page"
            width={568}
            height={330}
          />
        </div>
      </div>

        
            
    )
}