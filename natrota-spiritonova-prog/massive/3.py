import random # Импорт библиотеки рандом
import math
count = 0 # cчетчик чисел
x = [ ] # Создаем пустой массив
user= int(input(f'Введите длиунну массива: '))
while  count < user: 
    cislo = random.randint(10,99)
    count += 1
    x.append(cislo)
print(f'Сам массив: {x}')
print(f'Минимальное число: {min(x)}')
print(f'Максимальое число: {max(x)}')
logika = sum(x) / len(x)
print(f'Средне арифмитическое: {logika} ')