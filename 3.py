for i in range(1,101):
    for j in range(i+1, 101):
        for k in range(j+1, 101):
            c = i**2 + j**2
            if(c == k**2):
                print(i,j,k)