const serverURL = "http://localhost:3000";

class API {
    static fetchApartments = (success, failure) => {
        fetch(`${serverURL}/apartment`)
            .then(res => res.json())
            .then(success)
            .catch(failure)
    }

    static deleteApartments = (id, success, failure) => { 
        fetch(`${serverURL}/apartment/${id}`, { method: "DELETE" })
            .then(res => res.json()) 
            .then(success)
            .catch(failure)
    };
}

API.fetchApartments();


// API.fetchApartments(
//     (data) => console.log("Data is received", data),
//     (error) => console.log("klaida", error)
// );

// API.deleteApartments(
//     "1",
//     (data) => console.log("data sucessfully deleted", data),
//     (error) => console.log("klaida", error)
// );