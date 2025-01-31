// const select =document.getElementById("select")
// const input =document.getElementById("input")
// const btn =document.getElementById("btn")
// let vaices=[]

// // function gap(){
// //     const speech= new SpeechSynthesisUtterance()
// //     speech.text=input.value;
// //     speechSynthesis.speak(speech)
// // }

// btn.addEventListener("click",()=>{
//     gap()
// })

// function loadVoices(){
//     voices = window.speechSynthesis.getVoices();

//     if (voices.length > 0) {
//         select.innerHTML ="";
//         voices.forEach((voices, index) => {
//             const option = document.createElement("option");
//             option.value = index;
//             option.textContent=`${voice.name} (${voice.lang})`;
//             select.appendChild(option)
//         });
//     } else {
//         select.innerHTML =`<option disabled>No voices available</option>`;
//     }
// }

// function ensureVoicesLoaded(){
//     if(voice.length === 0) {
//         loadVoices();
//          if (voices.length === 0) {
//             setTimeout(ensureVoicesLoaded, 500)
//         }
//     }
// }

// window.speechSynthesis.onvoiceschanged = loadVoices;
// ensureVoicesLoaded();

// function gap() {
//     const ovoz =new SpeechSynthesisUtterance();
//     ovoz.text = input.value;

//     const selectVoiceIndex= select.value;

//     if (selectVoiceIndex) {
//         ovoz.voice = voices[selectVoiceIndex];
//     } else {
//         alert("Iltimos, ovoz tanlang!");
//         return;
//     }

//     speechSynthesis.speak(ovoz)
// }




document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('btn');
    const textInput = document.getElementById('input');
    const voiceSelect = document.getElementById('select');
    let voices = [];

    btn.addEventListener("click", () => {
        gap();
    });

    function loadVoices() {
        voices = window.speechSynthesis.getVoices();

        if (voices.length === 0) {
            voiceSelect.innerHTML = '<option disabled>No voices available</option>';
            return;
        }

        voiceSelect.innerHTML = "";
        voices.forEach((voice, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = `${voice.name} (${voice.lang})`;
            voiceSelect.appendChild(option);
        });
    }

    function ensureVoicesLoaded() {
        if (voices.length === 0) {
            loadVoices();
        }
        if (voices.length === 0) {
            setTimeout(ensureVoicesLoaded, 500);
        }
    }

    window.speechSynthesis.onvoiceschanged = loadVoices;
    ensureVoicesLoaded();

    function gap() {
        if (!textInput.value.trim()) {
            alert("Iltimos soz yozing!");
            return;
        }

        const ovoz = new SpeechSynthesisUtterance();
        ovoz.text = textInput.value;

        const selectedVoiceIndex = parseInt(voiceSelect.value, 10);

        if (!isNaN(selectedVoiceIndex)) {
            ovoz.voice = voices[selectedVoiceIndex];
        } else {
            alert("Iltimos tili tanlang!");
            return;
        }

        speechSynthesis.speak(ovoz);
    }
});