const discordRPC = require('discord-rpc');
const isBrowser = typeof window !== 'undefined';
const id = '629681763081519125';

discordRPC.register(id);

const rpc = new discordRPC.Client({ transport: isBrowser ? 'websocket' : 'ipc' });

const ready = new Promise((resolve) => {
    rpc.on('ready', () => resolve());
});

async function updatePresence(options) {
    await ready;
    rpc.setActivity(options);
}

rpc.login({clientId: id}).catch(console.error);

module.exports = updatePresence;
