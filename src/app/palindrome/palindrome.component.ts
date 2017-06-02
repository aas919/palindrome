import { Component, OnInit } from '@angular/core';
import {LargestPalindrome} from './largestpalindrome';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {

	largestPalindrome: LargestPalindrome = {
		lowerBound: 0,
		upperBound: 0,
		largestPalindrome: 0
	};	

  constructor() { }

  ngOnInit() {
  }

  findLargestPalindrome(lowerBound: number, upperBound: number): void {
		for(var i=Number(upperBound);i>=Number(lowerBound);i--) {
			if(this.isPalindrome(i)===true) {
				this.largestPalindrome.largestPalindrome = i;
				return;
			}
		}
	};
	
	isPalindrome(x: number): boolean {
    if(x>0 && x<10) return true;
    if (x<0 || (x!==0 && x%10===0)) return false;
    var rev = 0;
    while (x>rev){
    	rev = rev*10 + x%10;
    	x = Math.floor(x/10);
    }
    return (x===rev || x===Math.floor(rev/10));
	};
}
