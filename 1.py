n = input("Hansi Fiqur? ").lower()

if (n  == "dordbucaqli"):
    arr = []
    for i in range(4):
        arr.append(int(input("Teref"+str(i+1) + " ")))
    arr.sort()
    if (arr[0] <= 0 or arr[1] <= 0 or arr[2] <= 0 or arr[3] <= 0):
        print("No side with theese length!")
    else:
        if(sum(arr) == 4 * arr[0]):
           print("Kvadrat ve ya romb")
        elif(arr[0] == arr[1] and arr[2] == arr[3]):
            print("Duzbucaqli ve ya pareloloqram")
        else:
            print("Adi Dordbucaqli")
if (n == "ucbucaqli"):
    arr = []
    for i in range(3):
        arr.append(int(input("Teref"+str(i+1) + " ")))
    arr.sort()
    if (arr[0] <= 0 or arr[1] <= 0 or arr[2] <= 0):
        print("No side with Theese length!")
    else:
        if((arr[0] + arr[1] > arr[2] and arr[1] - arr[0] < arr[2])or(arr[0] + arr[2] > arr[1] and arr[2] - arr[0] < arr[1]) or (arr[2] + arr[1] > arr[0] and arr[2] - arr[1] < arr[0])):
            if(sum(arr) == arr[0]*3):
                print("Beraberterefli")
            elif(arr[0] == arr[1] or arr[1] == arr[2]):
                print("Beraberyanli")
            elif(arr[0]**2 + arr[1]**2 == arr[2]**2):
                print("Duzbucaqli")
            else:
                print("Adi ucbucaqli")
        else:
            print("Ucbucaqli deyil")


