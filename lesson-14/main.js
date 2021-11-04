const formEl = document.getElementById ('container');
formEl.addEventListener('submit', async event => {
    event.preventDefault();

    const fetchOption = {
        method: 'Post',
        body: new FormData(formEl),
    };
    const result = await fetch('https://fe-student-api.herokuapp.com/api/file', fetchOption).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(result => result)
    .catch(error => console.log(error.message));
    console.log(result);
})