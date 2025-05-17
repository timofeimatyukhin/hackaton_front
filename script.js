const video = document.getElementById('webcam');
const statusText = document.getElementById('status-text');

// Функция для обновления текста из сервера
async function updateServerData() {
    try {
        
        statusText.value = 'Here will be placed zalupa from server'
        
    } catch (err) {
        statusText.value = `Ошибка получения данных: ${err.message}`;
    }
}

async function setupWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                width: { ideal: 1280 },
                height: { ideal: 720 },
                facingMode: 'user' 
            }, 
            audio: false
        });
        
        video.srcObject = stream;
        
        // Обновляем данные каждые 3 секунды
        setInterval(updateServerData, 3000);
        updateServerData(); // Первоначальный вызов
        
    } catch (err) {
        statusText.value = `Ошибка доступа к камере: ${err.message}`;
        console.error('Ошибка доступа к камере:', err);
    }
}

window.addEventListener('DOMContentLoaded', setupWebcam);

window.addEventListener('beforeunload', () => {
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }
});