export default function clean(){
    const contentDiv = document.querySelector('#content');
    contentDiv.removeChild(contentDiv.firstChild);
}