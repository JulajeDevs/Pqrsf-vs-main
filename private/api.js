import axios from 'axios';
//
const curl = 'https://www.zohoapis.com/creator/custom/admin2844/vallesalud_julaje_private';
const Params = {publickey: 'qAvhbBBJsQyXe7qf44kvTR34A'};
const Headers = { 'Accept':'application/json','Content-Type': 'application/json' };

// GET
// const Body = {
//     "x-api-key":"VkFMTEVTQUxVRElQUy5KVUxBSkU6JHQzc3QudmFsbDNzYWx1ZDIk",
//     "scope":"ValleSalud.Julaje.GET",
//     "criteriaType":"all",
//     "view":"test_report"
// };

// PATCH
// const Body = {
//     "x-api-key":"VkFMTEVTQUxVRElQUy5KVUxBSkU6JHQzc3QudmFsbDNzYWx1ZDMk",
//     "scope":"ValleSalud.Julaje.PATCH",
//     "id":"2888687000097016026",
//     "view":"test_report",
//     "data":{
//         "Nombre_Completo":"KEVIN ESTIVEN YEPES"
//     }
// };

// POST
const Body = {
    "x-api-key":"VkFMTEVTQUxVRElQUy5KVUxBSkU6JHQzc3QudmFsbDNzYWx1ZDEk",
    "scope":"ValleSalud.Julaje.POST",
    "id":"2888687000097016026",
    "view":"test_form",
    "data":{
        "Nombre_Completo":"DAVID LEDESMA",
        "Correo_Electronico":"developer@julaje.com",
        "Telefono":"6024372797"
    }
};

// const api = axios.create({
//     baseURL: `${curl}`,
//     timeout: 5000,
//     headers: Headers,
//     params: Params
// });

axios.post(curl, Body, { headers: Headers, params: Params})
    .then(response => {
        console.log(response.data['result']);
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });

// export default api;