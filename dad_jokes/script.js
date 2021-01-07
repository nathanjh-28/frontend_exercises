// JSON API
// fetch api on mdn docs

// fetch('http://example.com/movies.json')
//     .then(response => response.json())
//     .then(data => console.log(data))

// Axios is a library alternative to fetch that you would have to install but could be better.

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

//generateJoke()
generateJoke()


// function generateJoke() {
//     const config = { headers: { "Accept": "application/json" } }
//     fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         })
// }

async function generateJoke() {
    const config = { headers: { "Accept": "application/json" } }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke

}