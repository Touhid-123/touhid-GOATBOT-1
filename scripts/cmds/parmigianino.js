module.exports = {
    config: {
        name: "aryan",
        version: "1.0",
        author: "NTKhang",
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
    if (event.body && event.body.toLowerCase() == "aryan") return message.reply("aryan g ap kaha ho?\nap ko koi dhun raha hen");
}
};
