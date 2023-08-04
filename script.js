let display =  document.getElementById('display');

let b = Array.from(document.getElementsByClassName('button'));

b.map( button=> {
    button.addEventListener('click', (e)=>{
        switch(e.target.innerText){
            case 'clear':
                display.innerText = '' ;
                break;

            case '←':
                display.innerText = display.innerText.slice(0,-1);
                break;
              

            case 'enter':
                try{
                    display.innerText =eval(display.innerText);
            } catch {
                display.innerText ='Error!';
            }
                break;
            default:
                display.innerText+= e.target.innerText;
        }
    });
});
