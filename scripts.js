class CssPropControl {
    constructor(element){
        this.element = element;
    }
    get(varName) {
        return getComputedStyle(this.element).getPropertyValue(varName);
    }
    set(varName, val) {
        return this.element.style.setProperty(varName, val)
    }
}

const bodyCssProps = new CssPropControl(document.body);

let toggle = document.querySelector('#dark-mode-toggle'); // Never heard back from Satya if this is allowed //

toggle.addEventListener('click', () => {
    let mode
        if(toggle.checked) { 
            mode = 'dark';
        } else {
            mode = 'light';
        };
    bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`));
    bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`));
});
/* This is to hide text */
function toggleVisibility() {
    var textElement = document.getElementById("text");
    if (textElement.style.display === "none") {
        textElement.style.display = "block";
    } else {
        textElement.style.display = "none";
    }
}