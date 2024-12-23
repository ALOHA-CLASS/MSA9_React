function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

fetchData("http://192.168.30.10:8080/boards/17")
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error))
    .finally(() => console.log("Fetch attempt finished"));
