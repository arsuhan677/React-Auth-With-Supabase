// import React, { useState } from "react";
// import { useLocation, useParams } from "react-router";

// function ProductDetails() {
//   const { state } = useLocation();
//   const [toggleOption, setToggleOption] = useState("");
//   const product = state;
//   return (
//     <div>
//       <div className="card bg-white rounded-2xl overflow-hidden my-12 shadow-sm container mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 p-5">
//         {/* Image Section */}
//         <div className="w-full lg:w-1/2">
//           <img
//             className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-xl"
//             src={product.img}
//             alt={product.title}
//           />
//         </div>

//         {/* Text Section */}
//         <div className="card-body w-full lg:w-1/2 py-5">
//           <h4 className="text-base sm:text-lg uppercase text-green-500 mb-2">
//             recipes{" "}
//             <span className="uppercase text-green-500"># [{product.id}]</span>
//           </h4>

//           <h2 className="card-title text-2xl sm:text-3xl font-semibold mb-4">
//             {product.title}
//           </h2>
//         </div>
//       </div>

//       <div className="container mx-auto">
//         <div className="bg-white rounded-2xl p-10 shadow-lg border border-white">
//           <div className="space-x-12 text-lg">
//             <button
//               className="cursor-pointer font-medium text-gray-600 hover:text-gray-900"
//               onClick={() => setToggleOption("ing")}
//             >
//               Ingredients
//             </button>
//             <button
//               className="cursor-pointer font-medium text-gray-600 hover:text-gray-900"
//               onClick={() => setToggleOption("step")}
//             >
//               Steps
//             </button>
//           </div>
//           <div className="border-b border-gray-300 p-4"></div>
//           {toggleOption === "ing" && (
//             <div className="">
//               {ingredients.map((ing) => {
//                 return (
//                   <div className="bg-gray-50 border border-gray-300 p-3 rounded-md mt-6">
//                     <div className="">
//                       <p>{ing}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//           {toggleOption === "step" && (
//             <div className="">
//               {steps.map((step) => {
//                 return (
//                   <div className="bg-gray-50 border border-gray-300 p-3 rounded-md mt-6">
//                     <div>
//                       <p>{step}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;
