const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log('Client connected');
    
    setInterval(() => {
        const weatherUpdate = {
            name: 'Random City',
            main: {
                temp: 273.15 + Math.random() * 40 
            },
            weather: [{
                description: 'clear sky',
                icon: '01d'
            }]
        };
        ws.send(JSON.stringify(weatherUpdate));
    }, 5000);

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
