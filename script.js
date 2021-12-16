function bmiValue(){
    var height = document.getElementById('inputHeight').value;
    var weight = document.getElementById('inputWeight').value;

    height = height * 12;
    height = height * 0.025;
    var newValue = weight / (height * height);
    newValue = Math.round(newValue);

    document.getElementById("result").textContent= newValue;
}