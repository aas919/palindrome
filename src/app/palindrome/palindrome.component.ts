import { Component, OnInit } from '@angular/core';
import {LargestPalindrome} from './largestpalindrome';
import {PalindromeService} from '../palindrome.service';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css'],
  providers: [PalindromeService]
})
export class PalindromeComponent implements OnInit {

	largestPalindrome: LargestPalindrome = {
		lowerBound: null,
		upperBound: null,
		largestPalindrome: null
	};	

  constructor(private palindromeService: PalindromeService) { }

  ngOnInit() {
  }

  findLargestPalindrome(lowerBound: number, upperBound: number): void {
		this.largestPalindrome.largestPalindrome = this.palindromeService.findLargestPalindrome(lowerBound, upperBound)
	};
}
