
# A = [88, 34, 12, 55, 90, 4, 10, 44];N = len(A); # создание массива
# from random import randint	# подкл. генератора случайных чисел

# for k in range(1, N-1):   	# номер прохода
#     for i in range(N-k):  	# просмотр за один проход
#         if A[i] > A[i+1]:	# если соседние неупорядочены
#             A[i], A[i+1] = A[i+1], A[i]    # меняем их местами 
# print(A)
# while 
task04 = [88, 34, 12, 55, 90, 4, 10, 44]
k = 4  # размер окна

# 1. Считаем сумму первого окна (первые 4 элемента)
current_sum = sum(task04[:k])
max_sum = current_sum

# 2. "Скользим" по массиву, начиная с 4-го элемента (индекс k)
for i in range(k, len(task04)):
    # Прибавляем текущий элемент, вычитаем тот, что "выпал" слева
    current_sum = current_sum + task04[i] - task04[i - k]
    
    # Обновляем максимум, если новая сумма больше
    if current_sum > max_sum:
        max_sum = current_sum

print(f"Максимальная сумма: {max_sum}")
