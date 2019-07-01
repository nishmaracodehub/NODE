var fs = require("fs");

fs.rename('hello.txt', 'world.txt', (err) => {
    if (err) throw err;
    console.log('renamed complete');
});

fs.stat('world.txt', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);

});