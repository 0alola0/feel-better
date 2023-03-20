// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';

// const useFetch = (url) => {
//     const [data, setData] = useState(null)
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState(null)

//         //გამოიყენება ჩატვირთვის დროს გენერაციისთვის 
//         useEffect(() => {
//             setLoading(true)
//             axios.get(url).then((res)=>{
//                 setData(res.data)
//             }).catch((err)=>{
//                 setError(err)
//             }).finally(()=>{
//                 setLoading(false)
//             })
//             console.log(data)
//         }, [url]);
        
//         const refetch = () => {
//             console.log("click")
//             setLoading(true);
//             axios
//               .get(url)
//               .then((response) => {
//                 setData(response.data);
//               })
//               .catch((err) => {
//                 setError(err);
//               })
//               .finally(() => {
//                 setLoading(false);
//               });
//         }
          
//         return {data, loading, error, refetch}
// }

// export default useFetch;
