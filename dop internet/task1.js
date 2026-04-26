let temp1 = 18;
let temp2 = 23;
let temp3 = 21;

let srtemp = (temp1 + temp2 + temp3) / 3 ;
console.log(`Средняя температура: ${srtemp.toFixed(2)}°C`);
 
let rek;
if (srtemp < 20) {
    rek = "Прохладно, включите пожалуйста отопление";
}else if (srtemp > 26){
    rek = "Думаю не стоит устраивать сауну, понизьте температру на кондее";
} else{
    rek = "комфортный режим";
}
console.log(`Рекомендации: ${rek} `);
let minTemp = Math.min(temp1, temp2, temp3);
let maxTemp = Math.max(temp1, temp2, temp3);

// Функция для получения названия комнаты по значению температуры
function getRoomName(temp) {
    if (temp === temp1) return "Комната 1";
    if (temp === temp2) return "Комната 2";
    if (temp === temp3) return "Комната 3";
}

let coldestRoom = getRoomName(minTemp);
let warmestRoom = getRoomName(maxTemp);

// Выводим д информацию по комнатам
console.log(`Самая холодная комната: ${coldestRoom} (${minTemp}°C) - рекомендуется увеличить отопление`);
console.log(`Самая тёплая комната: ${warmestRoom} (${maxTemp}°C)`); 