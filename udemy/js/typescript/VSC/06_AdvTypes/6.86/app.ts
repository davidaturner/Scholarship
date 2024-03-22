// const b = <HTMLBodyElement>document.getElementById('message-output');
const b = document.getElementById('message-output')! as HTMLBodyElement;
if (b) {
    b.innerText = 'Hookie Pookie';
}