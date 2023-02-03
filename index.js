const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "..Paste your own api key...";
const revise = new Revise({auth: AUTH_TOKEN});

async function run() {
  

    const collection = await revise.addCollection({name: "My Dynamic Football Team", uri: "spectreReviseCollection"})
    

    const nft = await revise.addNFT({
        image: 'https://revise-testing.fra1.cdn.digitaloceanspaces.com/players/bronze.png',
        name: 'Kylian Mbappe',
        tokenId: '1',
        description: 'Forward with exceptional abilities. Legend to have on your team'
    }, [
        {team: "PSG"}, {position: "Forward"}, {level: "Bronze"}, {offense: "75"}, {defense: 45}, {stamina: "76"}, {skill: "71"}
    ], collection.id)

    console.log(nft)
}
run()