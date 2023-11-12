import axios from "axios";


export async function postData(details) {
    try {
        if (details.familyType === "host") {
            console.log(details);
            const postedData = await axios.post("https://togther-hadera-server.onrender.com/host", details) //API address should be set here
            return { MSG: "The data has been sent successfully", DATA: postedData };
        } else if (details.familyType === "guest") {
            console.log(details);
            const postedData = await axios.post("https://togther-hadera-server.onrender.com/guest", details) //API address should be set here
            return { MSG: "The data has been sent successfully", DATA: postedData };
        }
    } catch (error) {
        throw error
    }
}
