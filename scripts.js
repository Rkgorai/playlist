function setVisibility(id, btn) {
    // console.log(`The button is ${btn} and id is ${id}`)
    if (document.getElementById(btn).value == '-') {
        document.getElementById(btn).value = '+';
        document.getElementById(id).style.display = 'none'
    }
    else {
        document.getElementById(btn).value = '-';
        document.getElementById(id).style.display = 'flex';
    }
}