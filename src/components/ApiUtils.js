import axios from "axios";


export async function postData(details) {
    try {
        const  postedData = await axios.post("http://localhost:8000/test", details) //API address should be set here
        return { MSG: "The data has been sent successfully", DATA: postedData };
    } catch (error) {
        throw error
    }

}
