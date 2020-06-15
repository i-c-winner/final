export default function moveMouse(idValue, element) {
    if ((!JSON.parse(localStorage.getItem("NewsArray")))) {
        document.querySelector(element).id = idValue;
    }

}