const reponseFormat = require('response-format');

function getPosts() {
    return Promise.resolve([{
        text: "You'll never find a rainbow if you're looking down",
        userId: 1
    }]);
}

module.exports.handler = async () => {
    try {
        const user = await getPosts();
        return reponseFormat.success(user);
    } catch (e) {
        return reponseFormat.error(e);
    }
}