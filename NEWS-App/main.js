const apiKey='61116340b4b54c769d6d62c1c3f928ee'
const url=`https://newsapi.org/v2/everything?q=Apple&from=2024-06-14&sortBy=popularity&apiKey=${apiKey}`


async function fetchData() {
    
    const response= await fetch(url);
    const data=response.JSON();
    console.log(data);
}

fetchData();