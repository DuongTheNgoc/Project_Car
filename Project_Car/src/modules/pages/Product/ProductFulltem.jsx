// import React, { useEffect, useState } from "react";

// export default function ProductFulltem({ match }) {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://65743d90f941bda3f2af8183.mockapi.io/api/qlxe/cars/${match.params.id}`
//         );
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [match.params.id]);

//   return (
//     <div>
//       {product ? (
//         <div className="row">
//           <div className="col-4">
//             <h3>{product.name}</h3>
//             <img src={product.img} alt={product.name} height={400} />
//           </div>
//           <div className="col-8">
//             <h3>Thông tin xe</h3>
//             <table className="table">
//               <tbody>
//                 <tr>
//                   <td>Thông tin xe</td>
//                   <td>{product.name}</td>
//                 </tr>
//                 <tr>
//                   <td>Hệ điều hành</td>
//                   <td>{product.description}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }
