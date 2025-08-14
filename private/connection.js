import api from './api';

// GET
export const getData = async(data) => {
    try
    {
        const response = await api.get(`${endPoint}`);
        
    }
    catch(e)
    {
        //
    }
};


// function connection(method, criteriaType, criteria, id, view,) {
//     const Params = { publickey: 'qAvhbBBJsQyXe7qf44kvTR34A' };

//     axios({
//         method: `${method.toLowerCase()}`,
//         url: 'https://www.zohoapis.com/creator/custom/admin2844/vallesalud_julaje_private',
//         params: Params,
//         headers: Headers,
//         data: JSON.stringify(Body)
//     }) .then(res => {
//         const repJSON = res.data;
//         console.log(repJSON['result']);
//     })
//         .catch(err => console.log(err));
// }