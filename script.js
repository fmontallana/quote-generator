// write your JavaScript here
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const newQuote = document.querySelector('.new-btn')
const tweet = document.querySelector('.tweet')


const getRandQuote = () => {
    
    let loading = true
    let link = document.createAttribute("href")
    
    if (loading) {
        quote.innerText = "Loading..."
        author.innerText = "Loading..."
    }
        
    fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then((data) => {

            quote.innerText = data.content
            author.innerText = data.author
            link.value = `http://twitter.com/share?text=${data.content}`
            tweet.setAttributeNode(link)
        })
        .catch(err => console.log(err))
        .finally(() => {
            loading = false
            newQuote.innerText = "New Quote"
        })
}

getRandQuote()

newQuote.addEventListener('click', ()=> {
    getRandQuote()
    newQuote.innerText = "Fetching..." 
})




//http://twitter.com/share?text=