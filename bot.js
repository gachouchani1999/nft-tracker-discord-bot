const test = require()
const axios = require('axios');

// Set NFT project address and discord url to post at in ENV
if (!process.env.PROJECT_ADDRESS || !process.env.DISCORD_URL) {
    console.log("please set your environment variables!");
    return;
}

const projectPubKey = new solanaWeb3.PublicKey(process.env.PROJECT_ADDRESS);
// [TODO] Connect to cosmjs-cosmwasm-stargate and connect to read only wallet
const { metadata: { Metadata } } = programs;
const pollingInterval = 2000; // in ms
// marketplace addresses in the Andromeda/ Juno blockchain
const marketplaceMap = {
    "andr1...": "Andromeda Marketplace",
    "andr1...": "Bark marketplace",
};

const runSalesBot = async () => {
    console.log("starting sales bot...");

    
    const options = {};
    while (true) {
        try {
            // get latest block
           // keep track of events using https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#searchTx fort the marketplace contracts for a List event or sale eventw
           // Post to discord using axios function below (postToDiscord)
           // Keep track of latest block searched to search for block+1 after that 
            }
        } catch (err) {
           // Throw error if querying fails
        }

    
    }
}
runSalesBot();
// Print the sales info from the searchTX event grabbed
const printSalesInfo = (date, price, title, marketplace, imageURL) => {
    console.log("-------------------------------------------")
    console.log(`Sale at ${date} ---> ${price} ANDR`)
    console.log("Name: ", title)
    console.log("Image: ", imageURL)
    console.log("Marketplace: ", marketplace)
}
// Set timer to limit searching to not DDOS server
const timer = ms => new Promise(res => setTimeout(res, ms))

// Get metadata of NFT to post picture to discord 
const getMetadata = async (token_address, token_id) => {
    try {
        // Query contract address of token to get token info of token ID

        return data;
    } catch (error) {
       // Return an error if unable to get metadata
    }
}

const postSaleToDiscord = (title, price, date, signature, imageURL) => {
    axios.post(process.env.DISCORD_URL,
        {
            "embeds": [
                {
                    "title": `SALE`, // Or list if you want to add it 
                    "description": `${title}`,
                    "fields": [
                        {
                            "name": "Price",
                            "value": `${price} SOL`,
                            "inline": true
                        },
                        {
                            "name": "Date",
                            "value": `${date}`,
                            "inline": true
                        },
                        {
                            "name": "Explorer",
                            "value": `` // Address of marketplace listing
                        }
                    ],
                    "image": {
                        "url": `${imageURL}`, // from metadata
                    }
                }
            ]
        }
    )
}