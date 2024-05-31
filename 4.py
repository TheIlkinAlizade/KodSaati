n  = input("Telebenin qiymeti: ")

while(not n.isdigit()):
    n = input("Reqem daxil edin ")
    while int(n) <= 0 or int(n) >= 100:
        n  = input("Yeniden daxil edin (0-100): ")
    
while int(n) <= 0 or int(n) >= 100:
    n  = input("Yeniden daxil edin (0-100): ")
    while(not n.isdigit()):
        n = input("Reqem daxil edin ")
 
n = int(n)

if(n>90 and n <=100):
    print("A")
if(n>70 and n <=90):
    print("B")
if(n>50 and n <=70):
    print("C")
if(n>30 and n <=50):
    print("D")
if(n>=0 and n <=30):
    print("E")