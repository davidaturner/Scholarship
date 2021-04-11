const addborder = 'addborder'
const selected = 'selected'

var notify = document.querySelector('.notification')
var albums = document.querySelectorAll('.app-album')
var saveBtn = document.querySelector('.save-btn')

//setup
for(let i=0; i<albums.length; i++) {
    var lookat = 1;
    albums[i].onclick = function() {
        toggleselect(albums[i].classList, lookat, addborder);
    }
}
saveBtn.onclick = function() {
    if (notify.classList.length == 1) {
        notify.classList.add('active');
    }
    document.getElementById('item-total').innerHTML = getalbumselected();
}
notify.onclick = function() {
    if (notify.classList[1] == 'active') {
        notify.classList.remove('active')
    }
}
// auxilary functions
function toggleselect(classList, index, replacement) {
    if (classList[index] == selected) {
        classList.remove(selected);
        classList.add(replacement);
    } else if (classList[index] == replacement) {
        classList.remove(replacement);
        classList.add(selected);
    } else {
        console.log("Unable to select.")
    }
}
function getalbumselected() {
    var albumselected = 0;
    for(let i=0; i<albums.length; i++) {
        var signed = albums[i].classList[1];
        if (signed == selected) {
            albumselected++;
        }
    }
    return albumselected;
}

// for(let i=0; i<albums.length; i++) {
//     if (albums[i].className == addborder) {
//         console.log('Bordered!')
//     }
// }