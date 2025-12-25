var urlAPI = "https://jsonplaceholder.typicode.com/posts";

fetch(urlAPI)
    .then((response) => {
        return response.json();

        //JSON.parse
    })
    .then((post) => {
        var html = "";
        const getByIds = document.getElementById("block-element");
        var abc = post.map((value) => {

            return `
    <li>
        <h2>${value.id}</h2>
        <p>${value.title}</p>
    </li>
`;


        })
        html = abc.join();
        getByIds.innerHTML = html;
    })
    .catch((err) => {
        console.log(err);
    })