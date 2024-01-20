// Find maximun subarray average:

//brute force
function findMaxAverageBF(nums, k) {
	let maxAvg = -Infinity; //initialized to the minimum value possible. This ensures that any negative value will still be greater than the initial value.

	for (let i = 0; i <= nums.length - k; i++) {
		//runs up to the element that would be the first element in the last subarray.
		let currSum = 0; // keeps track of the current sum for the current subarray;

		for (let j = i; j < i + k; j++) {
			//runs from where i currently is, up to k elements forward.

			currSum += nums[j]; // add up all the elements in the current subarray
		}
		maxAvg = Math.max(maxAvg, currSum / k); //updates the maxAvg by comparing the previously stored max average against the current avg.
	}
	return maxAvg; // returns the max subarray average found
}


//------------------------------------------------- Fixed size sliding window technique-------------------------------------------------

function findMaxAverage(nums, k) {
	let maxAvg = -Infinity; //initialized to the minimum value possible. This ensures that any negative value will still be greater than the initial value.
	let currSum = 0; // keeps track of the running sum. It is used to find the avg.

	for (let i = 0; i < nums.length; i++) {
		currSum += nums[i]; // adds the current num to the running sum. It eventually becomes the next last element of the subarray * key concept of the technique *

		if (i >= k - 1) {
			//indicates when the size of the subarray has been reached. * key concept of the technique *

			maxAvg = Math.max(maxAvg, currSum / k); //updates the maxAvg by comparing the previously stored max average against the current avg.

			currSum -= nums[i - (k - 1)]; // subtract the value of the first element in the subarray. It s when the first element of the subarray is deleted to prepare room for the next last element in the subarray. * key concept of the technique *
		}
	}
	return maxAvg; // returns the max subarray average found
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // Expected output: 12.75
console.log(findMaxAverage([-1, -2, -3, -4, -5], 3)); // Expected output: -2
console.log(findMaxAverage([4, 7, 3, 9, 1], 2)); // Expected output: 6
console.log(findMaxAverage([9, 7, 3, 5, 6], 2)); // Expected output: 8
console.log(findMaxAverage([10], 1)); // Expected output: 10
console.log(findMaxAverage([5, 5, 5, 5], 2)); // Expected output: 5
console.log(findMaxAverage([1.5, 2.5, 3.5, 4.5], 2)); // Expected output: 4



//------------------------------------------------- Dynamic Sliding Window  -------------------------------------------------

//Find minimun length subarray sum

function minSubArrayLen(nums, target) {

	let minSize = Infinity; //initialized to the maximun value possible, since we are trying to minimize the size.
	let currSum = 0;  //keeps track of the running sum.
	let l = 0;  // left pointer. Aka slow pointer.

	for (let r = 0; r < nums.length; r++) {
		currSum += nums[r]; // adds the current num to the running sum. It eventually becomes the next last element of the subarray * key concept of the technique *

		while (currSum >= target) { 
      minSize = Math.min(minSize, r - l + 1); // updates the previously stored minimun size found. the current size is the difference between the right pointer and the left pointer plus 1 since we need the length of the subarray.
      
      currSum -= nums[l];  // since we are shrinking the windlow from the left, we need to subtract the left most value. to prepare room for the next last element in the subarray * key concept of the technique *
      
			l++;// shrinks window from the left. * key concept of the technique *
		}
	}
	return minSize === Infinity ? 0 : minSize; // if no s
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // expected 2
console.log(minSubArrayLen([1, 4, 4], 4)); // expected 1
console.log(minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)); // expected 0
console.log(minSubArrayLen([1, 2, 3, 4, 5], 11)); // expected 3
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8], 15)); // expected 2
console.log(minSubArrayLen([5, 1, 3, 5, 10, 7, 4, 9, 2, 8], 20)); // expected 3
