const users = [
    {
        id: 1,
        name: "Hoang Son"
    },
    {
        id: 2,
        name: "Hai Nam"
    }
]

const comments = [
    {
        id_comment: 1,
        id_user: 1,
        status: "Hom nay hoc cai gi vay ?"
    },
    {
        id_comment: 2,
        id_user: 2,
        status: "Hom nay toi hoc JS"
    }
]


function getUserByIdComments(usersIds) {
    return new Promise((resolve, reject) => {
        var x = users.filter((users) => {
            return usersIds.includes(users.id);
        });
        setTimeout(() => {
            resolve(x)
        }, 1000)
    });
}


const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(comments);
    }, 1000);
});

promise
    .then((comments) => {
        const usersIds = comments.map(result => result.id_user);


        return getUserByIdComments(usersIds)
            .then(users => ({
                users,
                comments
            }));
    })
    .then((data) => {
        const getid = document.getElementById("block-chain");
        let html = '';

        data.comments.forEach((value) => {
            const user = data.users.find(u => u.id === value.id_user);
            html += `<li>${value.status} - ${user.name}</li>`;
        });

        getid.innerHTML = html;
    });
