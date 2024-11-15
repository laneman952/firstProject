//Building basic resources and checkign to see if the sounds will play

// alert('LEARN HOW TO PLAY PIANO');
// alert('CLICK ON EACH KEY TO HEAR THE NOTE');
// alert('RECORD YOUR MUSIC AND PLAY IT BACK LATER');

const Bb = document.querySelector('#Bb');
const Fsharp = document.querySelector('#F-sharp');
const Eb = document.querySelector('#Eb');
const Csharp = document.querySelector('#C-sharp');
const Gsharp = document.querySelector('#G-sharp');
const B = document.querySelector('#B');
const F = document.querySelector('#F');
const A = document.querySelector('#A');
const E = document.querySelector('#E');
const D = document.querySelector('#D');
const C = document.querySelector('#C');
const G = document.querySelector('#G');


const allNotes = [{
    id:'#Bb',
    text: 'Note B in flat',
    url: './assets/sounds/Bb.wav'
},

{
    id:'#F-sharp',
    text:'Note F in sharp',
    url: './assets/sounds/Fsharp.wav' 
},

{
    id:'#Eb',
    text: 'Note E in flat',
    url: './assets/sounds/Eb.wav'
},

{
    id:'#C-sharp',
    text: 'Note C in sharp',
    url: './assets/sounds/Csharp.wav'
},

{
    id:'#G-sharp',
    text: 'Note G in sharp',
    url: './assets/sounds/Gsharp.wav'
},

{
    id:'#B',
    text:'Note B',
    url:'./assets/sounds/B.wav' 
},

{
    id:'#F',
    text:'Note F',
    url:'./assets/sounds/F.wav' 
},

{
    id:'#A',
    text:'Note A',
    url:'./assets/sounds/A.wav'
},

{
    id:'#E',
    text:'Note E',
    url:'./assets/sounds/E.wav'
},

{
    id:'#D',
    text:'Note D',
    url:'./assets/sounds/D.wav'
},

{
    id:'#C',
    text:'Note C',
    url:'./assets/sounds/C.wav'
},

{
    id:'#G',
    text:'Note G',
    url:'./assets/sounds/G.wav'
}
]
