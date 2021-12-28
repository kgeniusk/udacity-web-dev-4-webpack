import axios from "axios";

function handleSubmit(event) {
    event.preventDefault()

    let url = document.getElementById('url').value
    if (!Client.checkForUrl(url)) {
        alert("Please enter a valid url!")
        return
    }

    console.log("::: Form Submitted :::")
    console.log(`${url}`)
    axios.post(`http://localhost:8084/analyse`, {
            url: url
    })
        .then(res => res.data)
        .then(data => {
            data['url'] = url
            document.getElementById('results').innerHTML = `<br><pre>${JSON.stringify(data, null, 2)}</pre>`
        })
}

export {handleSubmit}
