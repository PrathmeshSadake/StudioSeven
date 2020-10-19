const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            video.play();
        }
    } catch (error) {
        
    }
}

button.addEventListener('click', async ()=>{
    //Disable button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});

//on load
selectMediaStream();