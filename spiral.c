/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>
int spiral(int a , int b , int n ){
    int arr[n][n];
    int k = 1;
    
    for (int i = 0; i < n ; i++ ){
        arr[i][i] = k ;
        k += 2*(i+1);
   
        if (i%2 == 0){
            for(int j = i-1; j >= 0; j--){
                arr[i][j] = arr[i][i] -(i-j);
                arr[j][i] = arr[i][i] +(i-j);
            }
        }
        else{
            for(int j = i-1; j >= 0; j--){
                arr[j][i] = arr[i][i] -(i-j);
                arr[i][j] = arr[i][i] +(i-j);
            }
        }
    }
    
    return arr[a-1][b-1];

    
}

int main()
{
    int n ;
    int t;
    scanf("%d", &t);
    
    for(int i = 0; i < t ; ++ t){
        int a , b;
        scanf("%d%d" , &a,&b);
        n = a > b ? a : b;
        printf("%d", spiral(a,b , n));
    }
  
    
  
    

    return 0;
}
