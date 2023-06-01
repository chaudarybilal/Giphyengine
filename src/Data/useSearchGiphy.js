// import { useState,useEffect } from "react";
// import axios from "axios";
// const useSearchGiphy = () => {
// const[search,setSearch] = useState("");
// const[loading,setLoading]=useState(true);
// const[gifs,setGifs]=useState([]);
// const [offset, setOffset] = useState(100);

// const lmt = 10;
// const apikey = "G67CqXGOL4aPuxBdHv4P1d7PGXc4RTNy";
// const search_url =
//   "https://api.giphy.com/v1/gifs/search?q=" +
//   search +
//   "&key=" +
//   apikey +
//   "&limit=" +
//   lmt +
//   "&offset=" +
//   offset;

// useEffect(()=>{
//     const fetchGifs = async () => {
//         if (search !== '') {
//           setLoading(true);
//           try {
//             const response = await axios.get(search_url);
//             setGifs([...gifs, ...response.data]);;
//           } catch (error) {
//             console.error('Error fetching GIFs:', error);
//           } finally {
//             setLoading(false);
//           }
//         }
//       };
  
//       fetchGifs();
//     });
//     return { search, setLoading,setSearch, loading, gifs ,offset};
// };

// export default useSearchGiphy