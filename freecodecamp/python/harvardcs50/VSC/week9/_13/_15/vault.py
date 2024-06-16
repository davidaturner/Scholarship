#operator overload
#special methods name (lookit up)
class Vault:
    def __init__(self, galleons, sickles, knuts):
        self.galleons = galleons
        self.sickles = sickles
        self.knuts = knuts
    def __str__(self):
        return f"{self.galleons} galleons {self.sickles} sickles {self.knuts} knuts"
    
    def __add__(self, other):
        galleons = self.galleons + other.galleons
        sickles = self.sickles + other.sickles
        knuts = self.knuts + other.knuts
        return Vault(galleons, sickles, knuts)
    ...

potters_vault = Vault(100, 50, 25)
weasleys_vault = Vault(25, 50, 100)

print(potters_vault)
print(weasleys_vault)

total = potters_vault + weasleys_vault
print(total)