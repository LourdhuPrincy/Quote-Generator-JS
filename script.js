const quote=document.getElementById('quote-text');
const author=document.getElementById('author');
const btn=document.getElementById('quote-btn');
const speaker=document.getElementById('speaker');

const url="https://type.fit/api/quotes";

function getQuote(){
    // fetching API
    fetch(url)
    .then((response)=>response.json())
    .then((data) =>{
       let i=Math.floor(Math.random()*data.length);
       const quotes=data[i].text;
       const authors=data[i].author;
    
       //remove all list from utterence queue
       speechSynthesis.cancel();
       let msg= new SpeechSynthesisUtterance();
      
      // displaying quotes   
       quote.textContent=quotes;
       author.textContent= !authors ? '~ Anonymous' : '~' + authors;
       
      // Text to speech convertion   
       speaker.addEventListener('click', ()=>{
        speechSynthesis.cancel();
        msg.text=quotes;
        speechSynthesis.speak(msg);
       })
   });
};
getQuote();

btn.addEventListener('click', getQuote)



