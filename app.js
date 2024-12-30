function appendValue(value) {
    var result = document.getElementById('result');
    if (result) {
        result.value += value;
    }
}
function clearResult() {
    var result = document.getElementById('result');
    if (result) {
        result.value = '';
    }
}
function deleteValue() {
    var result = document.getElementById('result');
    if (result) {
        result.value = result.value.slice(0, -1);
    }
}
function calculateResult() {
    var result = document.getElementById('result');
    if (result) {
        try {
            result.value = eval(result.value); 
        }
        catch (_a) {
            result.value = 'Math Error';
        }
    }
}
