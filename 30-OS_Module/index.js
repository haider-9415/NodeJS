const os = require('os')

// to see you system archetechture
console.log(`\nos.arch() --> ${os.arch()} \n`);

// to see free ram
console.log(`os.freemem() --> ${os.freemem()} in bytes`);
console.log(`os.freemem() --> ${os.freemem()/(1024*1024)} in MB`);
console.log(`os.freemem() --> ${os.freemem()/(1024*1024*1024)} in GB\n`);

// to see total ram
console.log(`os.totalmem() --> ${os.totalmem()} in bytes`);
console.log(`os.totalmem() --> ${os.totalmem()/(1024*1024)} in MB`);
console.log(`os.totalmem() --> ${os.totalmem()/(1024*1024*1024)} in GB\n`);

// to see hostname
console.log(`os.hostname() --> ${os.hostname()} \n`);

// to see platform
console.log(`os.platform() --> ${os.platform()} \n`);

// to see user information
console.log(`os.userInfo().username --> ${os.userInfo().username} `);
console.log(`os.userInfo().gid --> ${os.userInfo().gid} `);
console.log(`os.userInfo().uid --> ${os.userInfo().uid} `);
console.log(`os.userInfo().homedir --> ${os.userInfo().homedir} `);
console.log(`os.userInfo().shell --> ${os.userInfo().shell} \n`);
