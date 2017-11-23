module.exports = {
    'ping': { description: "Just a test command that returns pong!", run() { console.log("PONG!"); return "pong!" } },
    'time': { description: "Tells the current time", run() { return new Date().toLocaleTimeString() } },
    'date': { description: "Tells the current date", run() { return new Date().toLocaleDateString() } }
}