def count_derangements(n):
    MOD = 10**9 + 7
    
    if n == 0:
        return 1
    if n == 1:
        return 0
    
    # Initialize base cases
    derangements = [0] * (n + 1)
    derangements[0] = 1
    derangements[1] = 0
    
    # Fill the derangements array using the recursive formula
    for i in range(2, n + 1):
        derangements[i] = (i - 1) * (derangements[i - 1] + derangements[i - 2]) % MOD
    
    return derangements[n]

# Read the input value for n
n = int(input().strip())

# Output the number of derangements modulo 10^9+7
print(count_derangements(n))
