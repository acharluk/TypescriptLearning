module.exports = {
    'ping': { description: "Just a test command that returns pong!", run() { return "pong!" } },
    'time': { description: "Tells the current time", run() { return new Date().toLocaleTimeString() } },
    'date': { description: "Tells the current date", run() { return new Date().toLocaleDateString() } },
    'random': { description: "Returns a random number between the two arguments given", run(args) { return Math.floor(Math.random() * (args[2] - args[1])) + parseInt(args[1]) } },
    'help': { description: "Gives help about any command", run(args) { return module.exports[args[1]] ? args[1] + ": " + module.exports[args[1]].description : "Command not found" } }
}