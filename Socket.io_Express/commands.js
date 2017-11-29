const os = require('os')

module.exports = {
    'ping': { description: "Just a test command that returns pong!", run() { return "pong!" } },
    'time': { description: "Tells the current time", run() { return new Date().toLocaleTimeString() } },
    'date': { description: "Tells the current date", run() { return new Date().toLocaleDateString() } },
    'random': { description: "Returns a random number between the two arguments given", run(args) { return Math.floor(Math.random() * (args[2] - args[1])) + parseInt(args[1]) } },
    'help': { description: "Gives help about any command", run(args) { return module.exports[args[1]] ? args[1] + ": " + module.exports[args[1]].description : "Command not found" } },
    'specs': { description: "Gives server specs", run() { return `${os.cpus().length}x ${os.cpus()[0].model} <br/> RAM: Total=${Math.floor(os.totalmem()/(1024*1024))}MB Free=${Math.floor(os.freemem()/(1024*1024))}MB <br/> OS: ${os.type()} ${os.platform()} ${os.arch()} ${os.release()}` } },
    'html': { description: "Let's you write html on a message", run(args) { return args.splice(1,1) } }
}