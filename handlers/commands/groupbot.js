let cap = `Join Group Bot untuk info ter-update
`
const buttonsDefault = [
    { urlButton: { displayText: `group whatsapp`, url: `https://chat.whatsapp.com/JtreUWX9m9dJaAff9Te1ae` } },
    
]

module.exports = {
    tags: ['others', 'information'],
    cmd: ['groupbot'],
    help: ['groupbot'],
    exec: async (m, client) => {
        await client.sendMessage(m.chat, { text: cap, footer: global.footer, templateButtons: buttonsDefault }, { quoted: m })
    }
}
