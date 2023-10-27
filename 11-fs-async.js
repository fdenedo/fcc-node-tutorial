const { readFile, writeFile } = require('fs');

console.log('start');

// Remember, to use these, we need to supply a callback

// If we don't supply utf8, we get a buffer value:
// <Buffer 48 65 6c 6c 6f 2c 20 74 68 69 73 20 69 73 20 6d 79 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 20 f0 9f 91 8b>

// Callback Hell? 👀
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                }

                console.log('done with this task'); // Will be shown after everything, Node offloads these
            }
        );
    })
})

console.log('starting next task');