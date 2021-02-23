// Counting Sheep
function countSheep(num) {
    // Base case
    if (num === 0) {
        return 'All sheep jumped over the fence';
    }

    // General case
    return `${num}: Another sheep jumps over the fence \n` + countSheep(num - 1);
}

console.log(countSheep(3));

// Power Calculator
function powerCalculator(base, exponent) {
    if (exponent < 0) {
        return 'exponent should be >= 0';
    }
    // Base case
    if (exponent === 0) {
        return 1;
    }

    // General case
    return base * powerCalculator(base, exponent - 1);
}

console.log(powerCalculator(10, 2));

// Reverse String
function reverseString(string) {
    // Base case
    if (string.length === 1) {
        return string[0];
    }

    // General case
    return string[string.length - 1] + reverseString(string.slice(0, -1));
}

console.log(reverseString('hello'));

// nth Triangle Number
function nthTriangleNum(num) {
    // Base case
    if (num === 1) {
        return 1;
    }
    // General case
    return num + nthTriangleNum(num - 1);
}

console.log(nthTriangleNum(3));

// String Splitter
function stringSplitter(str, separator) {
    // Base case
    if (!str.includes(separator)) {
        return [str.slice(0, str.length)];
    }
    // General Case
    return [str.slice(0, str.indexOf(separator)), ...stringSplitter(str.slice(str.indexOf(separator) + 1), separator)];
}

console.log(stringSplitter('02/20/2020', '/'));

// Fibonacci
function fibonacci(num) {
    // Base case
    if (num === 1) {
        return 1;
    } else if (num === 2) {
        return 1;
    }
    // General case
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(7));

// Factorial
function factorial(num) {
    // Base case
    if (num === 1) {
        return 1;
    }
    // General case
    return num * factorial(num - 1);
}   

console.log(factorial(5));

// Find a way out of the maze
function escapeMaze(maze, pos = 0, row = 0, col = 0, path = [], direction='S') {
    if (row >= maze.length || col >= maze[0].length) {
        return;
    }
    if (row < 0 || col < 0) {
        return;
    }

    path[pos] = direction;
    pos++;

    if (maze[row][col] === 'e') {
        console.log(path);
        return;
    }
    if (maze[row][col] === ' ') {
        maze[row][col] = 'x';
        escapeMaze(maze, pos, row, col + 1, path, 'R');
        escapeMaze(maze, pos, row, col - 1, path, 'L');
        escapeMaze(maze, pos, row + 1, col, path, 'D');
        escapeMaze(maze, pos, row - 1, col, path, 'U');
    }
    pos--;
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
  
let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

escapeMaze(mySmallMaze);
escapeMaze(maze);

// Find all ways out of the maze
function escapeMazeAllWays(maze, pos = 0, row = 0, col = 0, path = [], direction='S') {
    if (row >= maze.length || col >= maze[0].length) {
        return;
    }
    if (row < 0 || col < 0) {
        return;
    }

    path[pos] = direction;
    pos++;

    if (maze[row][col] === 'e') {
        console.log(path);
        return;
    }
    if (maze[row][col] === ' ') {
        maze[row][col] = 'x';
        escapeMaze(maze, pos, row, col + 1, path, 'R');
        escapeMaze(maze, pos, row, col - 1, path, 'L');
        escapeMaze(maze, pos, row + 1, col, path, 'D');
        escapeMaze(maze, pos, row - 1, col, path, 'U');
        maze[row][col] = ' ';
    }
    pos--;
}

escapeMazeAllWays(maze);

// 12. Binary Representation
function binary(num) {
    if (num === 0) {
        return '';
    }

    return `${num % 2}` + `${binary(Math.floor(num / 2))}`;
}
console.log(binary(25));
console.log(binary(3));