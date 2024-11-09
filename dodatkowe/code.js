function radius(sliderValue, span) {
    console.log(sliderValue);
    span.textContent = sliderValue;

    document.getElementById('kolo').style.height = sliderValue +"px";
    document.getElementById('kolo').style.width = sliderValue +"px";
}