function checkVideo() {
    const checkResult = document.getElementById("checkVideoResult");
    const vidTest = document.createElement("video");

    if (!vidTest.canPlayType) {
        checkResult.innerHTML = "Вибачте. Не підтримує.";
        return;
    }

    const oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');
    if (oggTest === "probably") {
        checkResult.innerHTML = "Так!";
        return;
    }

    const h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
    checkResult.innerHTML = (h264Test === "probably") ? "Так!" : "Не підтримує.";
}
