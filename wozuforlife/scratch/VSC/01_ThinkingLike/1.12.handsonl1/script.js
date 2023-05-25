// You have a bag filled with jelly beans of three different colors: pink, green, 
// and yellow and 3 cups that cannot be moved arranged in a line in front of you. 
// The end result should be that all the jelly beans have been removed from the bag 
// and placed into cups. Each cup should only contain 1 color. The jelly beans should 
// be placed into the cups so that the pile that is the smallest is on the left, and 
// the pile that is the largest is on the right. Jelly beans cannot be placed anywhere 
// except in the bag or in a cup.

console.log("1. Pull a jelly bean from the bag.");
console.log("2. Put the jelly bag into a cup containing only jelly beans of its color. If there are no cups with the jelly beans of its color, put in an empty cup.");
console.log("3. Repeat steps 1 and 2 until the bag is empty and you have three cups of jelly beans of various colors.");
console.log("4. Count the number of jelly beans in each cup. Take note of the cup having the least number of jelly beans.");
console.log("5. Go to the first cup. If the cup does not contain the least number of jelly beans. Empty the cup back into the bag.");
console.log("6. If there are jelly beans in the bag locate the cup with the least number of jelly beans and empty the cup to the empty cup at the far left.");
console.log("7. Once leftmost cup has the least number of jelly beans in it. Pour the jelly beans from the bag into the newly empty cup.");
console.log("8. Go to the second cup. If the cup contains more jelly beans than the rightmost cup, empty this cup back into the bag.");
console.log("9. If there are jelly beans in the bag pour the jelly beans of the rightmost cup into the the newly emptied cup.");
console.log("10. Pour the jelly beans from the bag to the newly emptied cup.");