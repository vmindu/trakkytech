import React, { useEffect, useState } from "react";
import "./ApiPage.css";

export default function ApiPage() {
  const [service, setService] = useState([]);
  const [filteredService, setFilteredService] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://20.193.149.47:2242/salons/service/`);
      const data = await res.json();
      if (data) {
        setService(data);
        setFilteredService(data);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = service.filter((item) =>
      item.salon_name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredService(filtered);
    setPage(1); // Reset to first page on search
  }, [searchQuery, service]);

  const SelectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(filteredService.length / 100) &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const paginatedData = filteredService.slice((page - 1) * 100, page * 100);

  return (
    <div className="container">
      <h2>Salon Services</h2>

      <input
        type="text"
        placeholder="Search by salon name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input "
      />

      <table className="service-table">
        <thead>
          <tr>
            <th>Salon Name</th>
            <th>Image</th>
            <th>City</th>
            <th>Area</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="2" className="loading">Loading...</td>
            </tr>
          ) : paginatedData.length === 0 ? (
            <tr>
              <td colSpan="2" className="no-data">No Data Available</td>
            </tr>
          ) : (
            paginatedData.map((prod) => (
              <tr key={prod.id}>
                <td data-label="Salon Name">{prod.salon_name}</td>
                <td data-label="Salon Image"><img src={prod.service_image} width={120} height={120}/></td>
                <td data-label="City">{prod.city}</td>
                <td data-label="area">{prod.area}</td>
                <td data-label="Price">{prod.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {!loading && filteredService.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => SelectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            👈
          </span>
          {[...Array(Math.ceil(filteredService.length / 100))].map((_, i) => (
            <span
              key={i}
              onClick={() => SelectPageHandler(i + 1)}
              className={page === i + 1 ? "pagination__selected" : ""}
            >
              {i + 1}
            </span>
          ))}
          <span
            onClick={() => SelectPageHandler(page + 1)}
            className={page < filteredService.length / 100 ? "" : "pagination__disable"}
          >
            👉
          </span>
        </div>
      )}
    </div>
  );
}



// import React, { useEffect, useState } from "react";

// export default function ApiPage() {
//   const [service, setService] = useState([]);
//   const [page, setPage] = useState(1);
//   const fetchProducts = async () => {
//     const res = await fetch(`http://20.193.149.47:2242/salons/service/`);
//     const data = await res.json();
//     if (data) {
//       setService(data);
//     }
//   };
// //   console.log(service);

//   const SelectPageHandler = (selectedPage) =>{
//     if (selectedPage >= 1 && selectedPage <= service.length / 100 && selectedPage !== page) 
//     setPage(selectedPage)
//   }
//   useEffect(() => {
//     fetchProducts();
//   }, [page]);
//   return (
//     <div>
//       {service.length > 0 && (
//         <div className="service">
//           {service.slice(page * 100 - 100, page * 100).map((prod) => {
//             return (
//               <div className="sevice__single" key={prod.id}>
//                 <h3>{prod.salon_name}</h3>
//                 {/* <img src={prod.service_image} alt={prod.salon_name} width={150} height={150}/> */}
//                 <h6>{prod.price}</h6>
//               </div>
//             );
//           })}
//         </div>
//       )}
//       {
//         service.length>0 && <div className="pagination">
//         <span onClick={()=>{SelectPageHandler(page - 1)}}
//         className={page > 1 ? "" : "pagination__disable" }>👈</span>
//         { 
//         [...Array(Math.ceil(service.length / 100))].map((_,i)=>{
//             return <span
//             className={page === i + 1 ? "pagination__selected" : ""} 
//             onClick={()=>{SelectPageHandler(i + 1)}}
//             key={i}>{i + 1}</span>
//         })
//         }
//         <span onClick={()=>{SelectPageHandler(page + 1)}}
//         className={page < service.length / 100 ? "" : "pagination__disable" }>👉</span>

//         </div>
//       }
//     </div>
//   );
// }
