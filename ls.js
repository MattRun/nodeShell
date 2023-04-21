const fs = require('fs');

// `files` will be an array of filenames, like ['bash.js', 'pwd.js']
module.exports = function(){
    process.stdin.on('data',(data)=>{

        const cmd = data.toString().trim()
        if (cmd == "ls"){
            
            fs.readdir('./', 'utf8', (err, files) => {
                if (err) {
                    throw err;
                } else {
                    process.stdout.write(files.join('\n'));
                    process.stdout.write('prompt > ');
                }
            });
        }
    });
}