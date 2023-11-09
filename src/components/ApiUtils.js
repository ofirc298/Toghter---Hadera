import axios from "axios";


export async function postData(details) {
    try {
        const { data: postedData } = await axios.post("", details) //API address should be set here
        return { MSG: "The data has been sent successfully", DATA: postedData };
    } catch (error) {
        throw error
    }

}
