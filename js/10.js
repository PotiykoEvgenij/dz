// Change code below this line
function findMatches(...args) {
    const matches = []; // Don't change this line
    for (let i = 1; i < args.length; i +=1) {
        const arg = args[i];
const firstArg = args[0].includes(arg)
        if (firstArg) {
            matches.push(arg);
        };
    };
    console.log(matches);
    // Change code above this line
    return matches;
}
findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
findMatches([63, 11, 8, 29], 4, 7, 16);