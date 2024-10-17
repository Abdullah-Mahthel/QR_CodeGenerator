document.getElementById('generateBtn').addEventListener('click', () => {
    const url = document.getElementById('urlInput').value.trim();
    if (url) {
        generateQRCode(url);
    } else {
        alert('Please enter a URL');
    }
});

function generateQRCode(url) {
    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}