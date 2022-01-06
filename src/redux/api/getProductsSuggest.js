import axios from "axios";


export async function getProductsSuggest(number,item){
    return await axios.get(`${URL}/api/paramenterRecomed/getAll`,{
        "typeFilter": number,
        "groupProduct": item
      });

}