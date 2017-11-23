module.exports = {
    'ping': { description: "Just a test command that returns pong!", run() { console.log("PONG!"); return "pong!" } },
    'time': { description: "Tells the current time", run() { return new Date().toLocaleTimeString() } },
    'date': { description: "Tells the current date", run() { return new Date().toLocaleDateString() } },
    'random': { description: "Returns a random number between the two arguments given", run(args) { return Math.floor(Math.random() * (args[2] - args[1])) + parseInt(args[1]) } }
}