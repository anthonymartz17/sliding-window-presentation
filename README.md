# Independent Learning Project - Sliding Window

## Introduction

The Sliding Window algorithm is a technique for finding a subset of elements that satisfy a certain condition in a given problem. It is a  powerful approach to efficiently solve problems involving arrays or  strings by maintaining a moving “window” of sequencial elements and performing operations as the window slides through the data. This technique helps reduce time complexity compared to brute-force methods.


## Algorithm Description


1. Initialization: Initilize the maxAvg variable to the minimum value possible. This ensures that any negative value will still be greater than the initial value. The currSum variable is initialized at 0 and it keeps track of the running sum  which is used to find the average.


```js
	let maxAvg = -Infinity; 
	let currSum = 0;
```


2. Loop through the array, element by element. 
```js


	for (let i = 0; i < nums.length; i++) {
		currSum += nums[i];

		if (i >= k - 1) {
			maxAvg = Math.max(maxAvg, currSum / k);

			currSum -= nums[i - (k - 1)];
		}
	}`
```


3. Adding  to the running sum and to the subarray: adding to the running sum also acts as adding a new element to the subarray. The current number added also represents a new element added in the subarray  * key concept of the technique *.


```js
currSum += nums[i]; 

//nums = [4, 7, 3, 9, 1]
// 4 + 7 + 3 represents subarray => [4,3,2] 
```


4. Identifying the subarrays: When "i" first becomes equal to the given subarray size - 1, we know that  we are at the first subarray. This means that we can now calculate the average for the current subarray. From that moment on, 'i' will be greater than the given size, so that means that at every iteration, we will be getting a  new subarray formed,(in combination with step 6), where the new last element of the subarray will be the current element we add in step 3.


```js
if (i >= k - 1) {  //* key concept of the technique *
  //...
}
```


5. Updating the max average: using the max method of the Math object to update the maxAvg variable by comparing the previously stored max value against the current value.


```js
 maxAvg = Math.max(maxAvg, currSum / k);

```

6. Sliding the window: to slide the window, we subtract the left most value from the current subarray, from the running sum. To find the left most value of the current subarray, we just look k - 1 places to the left of whereever "i" is. Remember K is the size of the subarray.


```js

	currSum -= nums[i - (k - 1)]; // subtract the value of the first element in the subarray. It s when the first element of the subarray is deleted to prepare room for the next last element in the subarray. * key concept of the technique *
```


The combination of step 6  and 3 is what does the sliding of the window.


```js
 	// for (let i = 0; i < nums.length; i++) {
		currSum += nums[i];

		//if (...) {
		//.........

			currSum -= nums[i - (k - 1)]; 
	// 	}
	// }
```



![Sliding window Animation](https://miro.medium.com/v2/resize:fit:1400/1*m1WP0k9cHRkcTixpfayOdA.gif)



## Big O Evaluation

### Time Complexity

The time complexity for the fixed size sliding window is linear. Since we are iterating over the array once from 0 to n-1, the worst we can get is `O(n)`.


### Space Complexity

Space complexity remains constant O(1). We are just creating two variables which size do not depend on the size of the given input array.



## Use Cases

This technique is useful for working with subsets of contiguous elements in a string or array. Common problems include Maximum/Minimum Subarray Sum, Longest Substring with K Distinct Characters, and others.


## Edge Cases and Concerns
Considerations for edge cases involve scenarios where the array is empty or when the subarray size is bigger than the array size. Other than that, the algorithm is very efficient.



## Resources

[Medium.com - Sliding Window](https://medium.com/@rishu__2701/mastering-sliding-window-techniques-48f819194fd7)

[Ryan Schachte YT Channel - Sliding Window](https://www.youtube.com/watch?v=MK-NZ4hN7rs)
