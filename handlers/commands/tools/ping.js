const { processTime } = require("../../../utils")
const fs = require('fs')
let mulai = fs.statSync('./src/start.txt')
const os = require('os')
let date = moment.duration(moment(moment()).diff(mulai))

module.exports = {
    tags: ['others', 'information'],
    cmd: ['ping', 'stat'],
    help: ['ping'],
    exec: (m, client, { prefix }) => {
      
        const btn = [
            { quickReplyButton: { displayText: `β¬ππππ  π©π€ π’ππ£πͺ`, id: `${prefix}menu` } },
            
            { urlButton: { displayText: `πππ€π£π π£πͺπ’πππ§`, url: `https://wa.me/+6287773710155` } },
        ]

        client.sendMessage(m.chat, { caption: ` γπ±ππ πΈππππππππππγ

β³ Bot Status : Online
β³ Latency : ${processTime(client.timestamp, moment())} _ms_
β³ Bot Run Time : ${moment.duration(mulai.mtimeMs, 'milliseconds').humanize()}
β³ System Up Time : ${moment.duration(os.uptime(), 'seconds').humanize()}
`, footer, templateButtons: btn, image: {url: 'https://telegra.ph/file/37ef5da9806ee6ed01e08.jpg'}
		}, { quoted: m })
    }
}
