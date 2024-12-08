//import Link from "next/link"
export default function ProductCard() {
  return (
    <div className="flex gap-6 mt-10">

{/* Card 1 */}
<div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[250px] mx-12 py-6 max-w-sm mx-2rem rounded-lg font-sans overflow-hidden">
        <div className="">
          <svg
            xmlns=""
            width="18px"
            className="cursor-pointer fill-blue-600 shrink-0"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            ></path>
          </svg>
        </div>

        <div className="h-[300px]">
          <img
            src="1.jpg"
            className=""
            alt="Product"
          />
          <h3 className="text-xl text-gray-800 font-bold flex-1">
            HAVIT HV-G92 Gamepad
          </h3>
          <div className="flex items-center gap-4">
          <h3 className="text-sm text-red-700 font-bold">$ 120</h3>
          <h3 className="text-sm text-gray-500 font-bold line-through">$ 160</h3>
          </div>
          
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[250px] py-6 max-w-sm rounded-lg font-sans overflow-hidden">
        <div className="">
          <svg
            xmlns=""
            width="18px"
            className="cursor-pointer fill-blue-600 shrink-0"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            ></path>
          </svg>
        </div>

        <div className="h-[300px]">
          <img
            src="2.jpg"
            className=""
            alt="Product"
          />
          <h3 className="text-xl text-gray-800 font-bold flex-1">
            AK - 900 wired Keyboard
          </h3>
          <div className="flex items-center gap-4">
          <h3 className="text-sm text-red-700 font-bold">$ 960</h3>
          <h3 className="text-sm text-gray-500 font-bold line-through">$ 1160</h3>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[250px] py-6 max-w-sm rounded-lg font-sans overflow-hidden">
        <div className="">
          <svg
            xmlns=""
            width="18px"
            className="cursor-pointer fill-blue-600 shrink-0"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            ></path>
          </svg>
        </div>

        <div className="h-[300px]">
          <img
            src="3.jpg"
            className=""
            alt="Product"
          />
          <h3 className="text-xl text-gray-800 font-bold flex-1">
            IPS LCD Gaming Monitor
          </h3>
          <div className="flex items-center gap-4">
          <h3 className="text-sm text-red-700 font-bold">$ 370</h3>
          <h3 className="text-sm text-gray-500 font-bold line-through">$ 400</h3>
          </div>
        </div>
      </div>

{/* Card 3 */}
<div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[250px] py-6 max-w-sm rounded-lg font-sans overflow-hidden">
        <div className="">
          <svg
            xmlns=""
            width="18px"
            className="cursor-pointer fill-blue-600 shrink-0"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            ></path>
          </svg>
        </div>

        <div className="h-[300px]">
          <img
            src="4.jpg"
            className=""
            alt="Product"
          />
          <h3 className="text-xl text-gray-800 font-bold flex-1">
            S-Series Comfort Chair
          </h3>
          <div className="flex items-center gap-4">
          <h3 className="text-sm text-red-700 font-bold">$ 375</h3>
          <h3 className="text-sm text-gray-500 font-bold line-through">$ 400</h3>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[250px] py-6 max-w-sm rounded-lg font-sans overflow-hidden">
        <div className="">
          <svg
            xmlns=""
            width="18px"
            className="cursor-pointer fill-blue-600 shrink-0"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            ></path>
          </svg>
        </div>

        <div className="h-[300px]">
          <img
            src="4.jpg"
            className=""
            alt="Product"
          />
          <h3 className="text-xl text-gray-800 font-bold flex-1">
          S-Series Comfort Chair
          </h3>
          <div className="flex items-center gap-4">
          <h3 className="text-sm text-red-700 font-bold">$ 375</h3>
            <h3 className="text-sm text-gray-500 font-bold line-through">$ 400</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
}
