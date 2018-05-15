#include <stdlib.h>
#include <stdio.h>


//Esercizio 1
int fibonacci(){

	int f1=1,f2=1;
	int sum = 0;
	while(sum<1000){
		
		sum = f1+f2;
		f1 = f2;
		f2 = sum;
		
	}
	
	return sum;
		

}

//Esercizio 2
int fibonacci_even(){
		int f1=1,f2=1;
		int sum = 0, even_sum = 0;
		while(f2<4000000){
			
			if(f1%2 == 0)
				even_sum = even_sum + f1;
			if(f2%2 == 0)
				even_sum = even_sum + f2;
				
			sum = f1+f2;
			f1 = f2;
			f2 = sum;
			
			
		}

		return even_sum;
}

int main(){
	
	printf("Il primo numero ad avere 3 cifre e' %d\n",fibonacci());
	printf("La somma dei numeri di fibonacci pari e minori di 4 milioni e' %d\n",fibonacci_even());
	
	
	
	
	
	return 0;
}


