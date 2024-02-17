// new Div Function

function showNewDiv(event) {
    event.offsetWidth; // This line triggers reflow, ensuring styles are applied correctly
    event.style.opacity = 1;
    event.style.transform = 'translateY(0px)';
}



// Delete Btn Transition Function 

function deleteDiv(event) {
    event.style.opacity = 0;
    event.style.transform = 'translateY(-20px)';
    // After transition, remove the element
    event.addEventListener('transitionend', function() {
        event.remove();
    });
}


// clear Input Field Function 

function clearInputValues(event) {
    const inputs = event.querySelectorAll('input');
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }

    //Alternative way
    // inputs.forEach(input => {
//     input.value = '';
// });
}





