// import React from "react";

// export default function Filter() {
//   return (
//     <div className="w-full">
//       <h1 className="font-semibold text-3xl mb-6">
//         Search results for <strong>United States</strong>
//       </h1>
//       <div className="flex flex-col w-full">
//         <div className="flex flex-wrap gap-6 p-6  shadow-sm bg-white">
//           {/* Location */}
//           <div className="flex flex-col w-96">
//             <label htmlFor="city" className="font-medium mb-1">
//               Location
//             </label>
//             <input
//               className="border rounded-lg p-3"
//               type="text"
//               id="city"
//               name="city"
//               placeholder="City Location"
//             />
//           </div>

//           {/* Type */}
//           <div className="flex flex-col w-40">
//             <label htmlFor="type" className="font-medium mb-1">
//               Type
//             </label>
//             <select className="border rounded-lg p-3" name="type" id="type">
//               <option value="">Any</option>
//               <option value="buy">Buy</option>
//               <option value="rent">Rent</option>
//             </select>
//           </div>

//           {/* Property */}
//           <div className="flex flex-col w-40">
//             <label htmlFor="property" className="font-medium mb-1">
//               Property
//             </label>
//             <select
//               className="border rounded-lg p-3"
//               name="property"
//               id="property"
//             >
//               <option value="house">House</option>
//               <option value="apartment">Apartment</option>
//               <option value="condo">Condo</option>
//               <option value="land">Land</option>
//             </select>
//           </div>

//           {/* Min Price */}
//           <div className="flex flex-col w-40">
//             <label htmlFor="minPrice" className="font-medium mb-1">
//               Min Price
//             </label>
//             <input
//               className="border rounded-lg p-3"
//               type="number"
//               id="minPrice"
//               name="minPrice"
//               placeholder="Any"
//             />
//           </div>

//           {/* Max Price */}
//           <div className="flex flex-col w-40">
//             <label htmlFor="maxPrice" className="font-medium mb-1">
//               Max Price
//             </label>
//             <input
//               className="border rounded-lg p-3"
//               type="number"
//               id="maxPrice"
//               name="maxPrice"
//               placeholder="Any"
//             />
//           </div>

//           {/* Bedrooms */}
//           <div className="flex flex-col w-40">
//             <label htmlFor="bedRoom" className="font-medium mb-1">
//               Bedrooms
//             </label>
//             <input
//               className="border rounded-lg p-3"
//               type="number"
//               id="bedRoom"
//               name="bedRoom"
//               placeholder="Any"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// ------------------------------------
import React from "react";

export default function Filter() {
  return (
    <div className="">
      <h1 className="font-semibold text-3xl mb-6">
        Search results for <strong>United States</strong>
      </h1>

      <div className="flex flex-col w-full p-6 bg-white shadow-sm rounded-xl">
        {/* Location on Top */}
        <div className="  mb-6 flex flex-col items-left gap-4">
          <label htmlFor="city" className="font-medium w-32">
            Location
          </label>

          <input
            className="border rounded-lg p-3 w-full max-w-lg"
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>

        {/* Other Filters Below */}
        <div className="flex flex-wrap gap-6">
          {/* Type */}
          <div className="flex flex-col w-40">
            <label htmlFor="type" className="font-medium mb-1">
              Type
            </label>
            <select className="border rounded-lg p-3" name="type" id="type">
              <option value="">Any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          {/* Property */}
          <div className="flex flex-col w-40">
            <label htmlFor="property" className="font-medium mb-1">
              Property
            </label>
            <select
              className="border rounded-lg p-3"
              name="property"
              id="property"
            >
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>

          {/* Min Price */}
          <div className="flex flex-col w-40">
            <label htmlFor="minPrice" className="font-medium mb-1">
              Min Price
            </label>
            <input
              className="border rounded-lg p-3"
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="Any"
            />
          </div>

          {/* Max Price */}
          <div className="flex flex-col w-40">
            <label htmlFor="maxPrice" className="font-medium mb-1">
              Max Price
            </label>
            <input
              className="border rounded-lg p-3"
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="Any"
            />
          </div>

          {/* Bedrooms */}
          <div className="flex flex-col w-40">
            <label htmlFor="bedroom" className="font-medium mb-1">
              Bedrooms
            </label>
            <input
              className="border rounded-lg p-3"
              type="number"
              id="bedroom"
              name="bedroom"
              placeholder="Any"
            />
          </div>
          <div>
            <button className="border   p-3 mt-6   bg-amber-500  rounded-lg">
              <img src="/search.png" alt="search" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
