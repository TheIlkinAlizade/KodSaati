

def generateGrayCode(n):
    # Base Case: If n is 1, return ["0", "1"]
    if n == 1:
        return ["0", "1"]
    
    # Recursively calculate the Gray codes for n-1 length
    prevGrayCode = generateGrayCode(n - 1)
    
    # Reverse the previous Gray Code for n-1 length
    reversedPrevGrayCode = prevGrayCode[::-1]
    
    prevSize = len(prevGrayCode)
    index = 0
    while index < prevSize:
        # Prepend "0" to the previous Gray Codes
        appendedZero = "0" + prevGrayCode[index]
        
        # Prepend "1" to the reversed previous Gray Codes
        prevGrayCode[index] = "1" + reversedPrevGrayCode[index]
        
        # Append the modified "0" version to the previous Gray Codes
        prevGrayCode.append(appendedZero)
        index += 1
    
    return prevGrayCode

# Main function
if __name__ == "__main__":
    n = int(input())
    grayCode = generateGrayCode(n)
    for code in grayCode:

        print(code)

