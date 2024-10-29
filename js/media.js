function checkVideo() {
    const checkResult = document.getElementById("checkVideoResult");
    
    if (!!document.createElement('video').canPlayType) {
        const vidTest = document.createElement("video");
        const oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');

        if (!oggTest) {
            const h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
            if (!h264Test) {
                checkResult.innerHTML = "Вибачте. Не підтримує.";
            } else {
                checkResult.innerHTML = (h264Test === "probably") ? "Так!" : "Частково підтримує.";
            }
        } else {
            checkResult.innerHTML = (oggTest === "probably") ? "Так!" : "Частково підтримує.";
        }
    } else {
        checkResult.innerHTML = "Вибачте. Не підтримує.";
    }
}
