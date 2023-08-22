// longest valid parentheses substring is "()"
//longest valid parentheses substring is "()()"
//longestValidparentheses("()))))(()())(()") => 6

function longestValidparentheses(str) {
    let max = 0;
    let stack = [-1];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    return max;
}

console.log(longestValidparentheses("(()"));
console.log(longestValidparentheses(")()())"));
console.log(longestValidparentheses("()))))(()())(()"));