import { Event } from "$structures/Event"

export default new Event("ready", async (client) => {
	console.log(client.user.displayName + " is now online!")
})
