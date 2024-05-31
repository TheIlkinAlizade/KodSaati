class Bankaccount(object):
    def __init__(self , balance = 0):
        self.balance = balance 

    def pul_cek (self , amount):
        self.amount = amount
        k = self.balance - amount 
        if k > 0 :
            self.balance = k
            return k
    def pul_yukle (self , amount):
        self.amount = amount
        self.balance = self.balance + amount 
        return self.balance
    def balansi_goster(self):
        print(self.balance)
    
    def __add__(self, other):
        if (other.balance >= 0):
            other.balance = self.balance + other.balance 
            self.balance = 0
        else:
            print("Transaction Error")

hesab = Bankaccount()
hesab.balansi_goster()
hesab.pul_yukle(500)
hesab.balansi_goster()
hesab2 = Bankaccount(500)
Bankaccount.__add__(hesab,hesab2)

hesab2.balansi_goster()
hesab.balansi_goster()