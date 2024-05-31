n = 5
arr=[]
for i in range(n):
    k = input("")
    if(not k.isdigit()):
        print("Not digit")
        break
    k = int(k)
    while(k%2 == 0):
        k = int(input("Tek eded daxil et "))
        
    print("Ela!")
    arr.append(k)
if(len(arr) != 0):
    print("Daxil etdiyiniz tek ededler ", arr)