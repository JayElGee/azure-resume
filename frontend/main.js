window.addEventListener('DOMContentLoaded', event => {
    getVistorCount;
})

const functionApi = '';

const getVistorCount = () => {
    let count = 30;
    fetch(functionApi).then(res => {
        return res.json()
    }).then(res => {
        console.log("API called");
        count = res.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(err) {
        console.log(err);
    })

    return count;
}