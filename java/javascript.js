const button = document.querySelector('#click_button');
function alertuser(){
    alert('you clicked');

}

button.addEventListener('click', alertuser,{once: true} );

function changepink(){

    // document.body.style.backgroundColor = 'pink';
    document.body.classList.add('pinkBG')
}



button.addEventListener('click', changepink );

function cahngeText(event){
    console.log(event)
    //clickme
    if (button.textContent === 'click me!'){
    button.innerHTML = 'clicked!'
    }
    else{
        button.textContent = 'click me!'
    }
}

button.addEventListener('click', cahngeText)

const buttoncontainer = document.querySelector('.button-container')

function changeBGgreen(event){
    console.log(event.target)
    if(event.target.tagName === 'BUTTON'){
        event.target.classList.add("butswitch");
    }
}

buttoncontainer.addEventListener('click',changeBGgreen)

function changeTextColor(event){
    if(event.target.tagName === 'BUTTON'){
    event.target.style.color = event.target.textContent
    
    console.log(event.target.textContent)
    }
}

buttoncontainer.addEventListener('click', changeTextColor);

//find the element

//create function
function newButton(){
    let purple = document.createElement('button');
    let purpP = document.createElement('p');

    purple.addEventListener('click', changeBGgreen)
    //append the stuff
    document.body.appendChild(purpP);
    document.body.appendChild(purple);
    //cahnge the content
    purple.textContent = 'purple';
    purpP.textContent = 'somthing';
}
    //create new button wiht content pruple

button.addEventListener('click', newButton)