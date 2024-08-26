module.exports = {
    config: {
        name: "bot",
        version: "1.0",
        author: "NTkhang",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "bot") return message.reply("bot na bole amke <.bby ki koro > ata lekhe dako 🤭");
}
};
