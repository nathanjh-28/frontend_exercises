const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')


// function getUser(username){
//     axios(APIURL + username)
//         .then(res=> console.log(res.data.name))
//         .catch(err => console.log(err))
// }

function createErrorCard(msg){
    const cardHTML = `
    <div class="card">
        <h1>${msg}></h1>
        </div>`
    main.innerHTML = cardHTML
}
async function getUser(username){
    try {
        const { data } = await axios(APIURL + username)
        createUserCard(data)
    } catch(err){
        if(err.response.status == 404){
            createErrorCard('No profile with this username')
        }
    }
}


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const user = search.value
    if(user){
        getUser(user)
        search.value = ''
    }
})

function createUserCard(user){
    const cardHTML = `<div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li> ${user.followers} <strong>followers</strong> </li>
            <li> ${user.following} <strong>following</strong> </li>
            <li> ${user.public_repos} <strong>repos</strong> </li>
        </ul>
        <div id="repos">
        </div>
    </div>
</div>`

main.innerHTML = cardHTML

}