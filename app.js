document.querySelector('.get-jokes').addEventListener('click', getjoke);
function getjoke(e)
{
    const num = document.querySelector('input[type="number"]').value;
    // console.log(num);
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${num}`,true);
    xhr.onload = function(){
        if(this.status === 200)
        {
            let jokes = this.responseText;
            jokes = JSON.parse(jokes);
            let output='';
            if(jokes.type ==='success')
            {
                jokes.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                })
            }
            else
            {
                response += '<li>Wrong</li>';
            }
            const list = document.querySelector('.joke-list');
            list.innerHTML = output;
        }
    }
    xhr.send();
    e.preventDefault();
}