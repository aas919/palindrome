import { Injectable } from '@angular/core';
import {LargestPalindrome} from './palindrome/largestpalindrome';

@Injectable()
export class PalindromeService {

  constructor() { }

	findLargestPalindrome(lowerBound: number, upperBound: number): number {
		for(var i=Number(upperBound);i>=Number(lowerBound);i--) {
			if(i>-1) {
				if(this.isPalindrome(i)===true)
					return i;
			}
			else {
				if(this.isPalindrome(-1*i)===true)
					return i;
			}
		}
	};

	isPalindrome(n: number): boolean {
		if(n>-10 && n<10) return true;
		if(n%10===0) return false;
		var rev = 0;
		while (n>rev){
			rev = rev*10 + n%10;
			n = Math.floor(n/10);
		}
		return (n===rev || n===Math.floor(rev/10));
	};
}
