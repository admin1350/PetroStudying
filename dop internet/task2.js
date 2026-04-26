let lightLevel = 350; 
let currentHour = 19; 
let peoplePresent = true; 

let brightness = 0; // Базовая яркость
let power = 0;      // Потребление энергии

// 1. Проверяем базовую яркость по условиям
if (lightLevel < 200) {
    brightness = 100;
} else if (lightLevel >= 200 && lightLevel <= 400) {
    brightness = 70;
} else if (lightLevel > 400 && lightLevel <= 600) {
    brightness = 40;
} else {
    brightness = 0;
}

// 2. Учитываем режим энергосбережения (18:00 - 23:00)
let isEnergySaving = currentHour >= 18 && currentHour <= 23;
if (isEnergySaving && brightness > 0) {
    brightness -= 20; // Уменьшаем на 20%
}

// 3. Проверка на наличие людей (самое важное условие)
if (!peoplePresent) {
    brightness = 0;
}

// 4. Расчет потребления (100% = 60Вт -> 1% = 0.6Вт)
power = (brightness / 100) * 60;

// Вывод результатов
console.log(`Уровень освещённости: ${lightLevel} lux`);
console.log(`Режим: ${isEnergySaving ? "Энергосбережение активен" : "Стандартный"}`);
console.log(`Статус: ${brightness > 0 ? "Свет включен" : "Свет выключен"}`);
console.log(`Яркость: ${brightness}% ${isEnergySaving && brightness > 0 ? "(с учётом энергосбережения)" : ""}`);
console.log(`Потребление энергии: ${power} Вт`);