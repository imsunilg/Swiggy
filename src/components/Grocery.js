import React from "react";
import "../style/Grocery.css";

import GroceryHeader from "./GroceryHeader";
import GroceryList from "./GroceryList";
import GroceryCategories from "./GroceryCategories";
import GroceryOffers from "./GroceryOffers";
import GroceryFooter from "./GroceryFooter";

const Grocery = () => {
  return (
    <div className="grocery-container">
      <GroceryHeader />
      <GroceryList />
      <GroceryCategories />
      <GroceryOffers />
      <GroceryFooter />
    </div>
  );
};

export default Grocery;


// import React, { Suspense } from "react";
// import "../style/Grocery.css";

// // Lazy load with 1 second delay
// const delayImport = (importFn) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(importFn()), 500); // 1 sec delay
//   });
// };

// const GroceryHeader = React.lazy(() => delayImport(() => import("./GroceryHeader")));
// const GroceryList = React.lazy(() => delayImport(() => import("./GroceryList")));
// const GroceryCategories = React.lazy(() => delayImport(() => import("./GroceryCategories")));
// const GroceryOffers = React.lazy(() => delayImport(() => import("./GroceryOffers")));
// const GroceryFooter = React.lazy(() => delayImport(() => import("./GroceryFooter")));

// const Grocery = () => {
//   return (
//     <div className="grocery-container">
//       <Suspense fallback={<div className="loading">⏳ Loading Grocery Header...</div>}>
//         <GroceryHeader />
//       </Suspense>

//       <Suspense fallback={<div className="loading">⏳ Loading Items...</div>}>
//         <GroceryList />
//       </Suspense>

//       <Suspense fallback={<div className="loading">⏳ Loading Categories...</div>}>
//         <GroceryCategories />
//       </Suspense>

//       <Suspense fallback={<div className="loading">⏳ Loading Offers...</div>}>
//         <GroceryOffers />
//       </Suspense>

//       <Suspense fallback={<div className="loading">⏳ Loading Footer...</div>}>
//         <GroceryFooter />
//       </Suspense>
//     </div>
//   );
// };

// export default Grocery;
