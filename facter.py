

def Factorial(N: int):
    x = 2
    while x <= N:
        if N % x == 0:
            print(x, end=' ')
        x = x+1


Factorial(23)
