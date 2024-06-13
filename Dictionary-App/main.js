// const form = document.querySelector('form');
// const resultDiv = document.querySelector('.result');



// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     getWordInfo(form.elements[0].value)
// });

// const getWordInfo = async (word) => {
//     // alert("word is : " + word);
//     const response= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//     const data=await response.json();
//     console.log(data);
//     resultDiv.innerHTML= `${data[0].meanings[0].definations[0]}`
// }

const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWordInfo(form.elements[0].value);
});

const getWordInfo = async (word) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        if (response.ok) {
            const definitions = data[0]?.meanings[0]?.definitions[0]?.definition;
            if (definitions) {
                resultDiv.innerHTML = `Definition: ${definitions}`;
            } else {
                resultDiv.innerHTML = "No definition found.";
            }
        } else {
            resultDiv.innerHTML = `Error: ${data.title}`;
        }
    } catch (error) {
        resultDiv.innerHTML = `Error: ${error.message}`;
    }
};
