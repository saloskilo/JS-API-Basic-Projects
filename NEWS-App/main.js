const apiKey='61116340b4b54c769d6d62c1c3f928ee'
const url=`https://newsapi.org/v2/everything?q=apple&from=2024-06-13&to=2024-06-13&sortBy=popularity&apiKey=61116340b4b54c769d6d62c1c3f928ee`


async function fetchData() {
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

fetchData();

document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
  });
  
  const fetchNews = async () => {
    const apiKey = '61116340b4b54c769d6d62c1c3f928ee';
    const url = `https://newsapi.org/v2/everything?q=apple&from=2024-06-13&to=2024-06-13&sortBy=popularity&apiKey=61116340b4b54c769d6d62c1c3f928ee`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      displayNews(data.articles);
    } catch (error) {
      console.error('Error fetching the news:', error);
    }
  };
  
  const displayNews = (articles) => {
    const articlesSection = document.querySelector('.articles');
    articlesSection.innerHTML = ''; // Clear any existing content
  
    articles.forEach(article => {
      const articleElement = document.createElement('article');
      articleElement.classList.add('article-wrapper');
  
      const imageElement = document.createElement('figure');
      const img = document.createElement('img');
      img.src = article.urlToImage || 'https://picsum.photos/800/450';
      imageElement.appendChild(img);
  
      const articleBody = document.createElement('div');
      articleBody.classList.add('article-body');
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = article.title;
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = article.description || 'Description not available.';
  
      const readMoreElement = document.createElement('a');
      readMoreElement.href = article.url;
      readMoreElement.target = '_blank';
      readMoreElement.classList.add('read-more');
      readMoreElement.innerHTML = `
        Read more <span class="sr-only">about ${article.title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
      `;
  
      articleBody.appendChild(titleElement);
      articleBody.appendChild(descriptionElement);
      articleBody.appendChild(readMoreElement);
  
      articleElement.appendChild(imageElement);
      articleElement.appendChild(articleBody);
  
      articlesSection.appendChild(articleElement);
    });
  };
  