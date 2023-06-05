import axios from "axios";

export function registroAcceso(payload) {
    return async function(dispatch) {
        const response = await axios.post('http://localhost:3000/autorizacion', payload);
        return{
            type: POST_REGISTRO,
            response
    }
    }
}