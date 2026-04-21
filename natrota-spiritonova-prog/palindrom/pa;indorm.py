slovo = input() #Пользователь ввидит слово
rev=slovo.lower()
rev_slovo = slovo[::-1].lower() 
print(rev_slovo) 
if rev == rev_slovo: 
    print("Палиндром")
else:    print("Не палиндром")