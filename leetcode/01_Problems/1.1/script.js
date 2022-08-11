// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Input: nums = [2,5], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

var search = function(nums, target) {

    let start = 0
    let end = nums.length-1

    while(start<=end) {

        if (start == end) {
            console.log("Last guess. " + start)
            if (nums[start] == target) {
                console.log(nums[start] + ". Match found! " + start)
                return start
            }
            else {
                console.log(nums[start] + ". No match found!")
                return -1
            }
        }

        let midpoint = parseInt((start + end)/2)
        console.log("Guessing... " + midpoint)
        if (nums[midpoint] == target) {
            console.log(target + ". Match found! " + midpoint)
            return midpoint
        }

        if (nums[midpoint] < target) {              // 5 < 9
            console.log(nums[midpoint] + ". Higher...")
            start = midpoint + 1;
            if (start > nums.length-1) {
                start = nums.length-1
            }
            console.log(revised(nums, start, end))
        }
        if (nums[midpoint] > target) {              // 5 > 3
            console.log(nums[midpoint] + ". Lower...")
            end = midpoint - 1;
            if (end < 0) {
                end = 0
            }
            console.log(revised(nums, start, end))
        }
    }
}

var revised = function(nums, start, end) {

    if (nums == null || nums.length == 0) {
        return []
    }
    newnums = new Array()
    j = 0
    for(let i=start; i<=end; i++) {
        newnums[j] = nums[i]
        j++;
    }
    return newnums
}


// var nums = [-1,0,3,5,9,12]
// var target = 12

var nums = [2,5]
var target = 6

console.log(nums)
console.log("targets: " + target)

// console.log(revised(nums, 0, 0))
// console.log(revised(nums, 0, 2))
// console.log(revised(nums, 4, 5))

search(nums, target)

