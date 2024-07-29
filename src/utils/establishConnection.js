import { clusterApiUrl, Connection } from '@solana/web3.js';

export async function establishConnection() {
    console.log('▶︎ Establishing connection to the Solana network...');
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    console.log('✅ Connection established!');
    return connection;
}
