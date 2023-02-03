const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "..Paste your own api key..";
const revise = new Revise({auth: AUTH_TOKEN});

const API = async function() {
  const options = [
    {level: 'Silver', offense: '82', defense: '51', stamina: '82', skill: '79', image: "https://revise-testing.fra1.cdn.digitaloceanspaces.com/players/silver.png"},
    {level: 'Gold', offense: '98', defense: '64', stamina: '92', skill: '87', image: "https://revise-testing.fra1.cdn.digitaloceanspaces.com/players/gold.png"}
  ]
  const randomIndex =  Math.floor(Math.random() * 2)
  return options[randomIndex];
}

async function run() {

  revise.every('2s').listenTo(API).start(async (data) => {
    const player = await revise.fetchNFT("ebe0798c-f31b-41ba-ae81-822ddce2fbe3")
    revise.nft(player)
      .setProperty("level", data.level)
      .setProperty("offense", data.offense)
      .setProperty("defense", data.defense)
      .setProperty("stamina", data.stamina)
      .setProperty("skill", data.skill)
      .setImage(data.image)
      .save()

			console.log(`${player.name}'s is now at level ${data.level}`)
  })

}
run()