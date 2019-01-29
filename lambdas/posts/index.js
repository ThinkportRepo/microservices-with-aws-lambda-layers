const reponseFormat = require('response-format');

function getPosts() {
    return Promise.resolve([{
        text: "You'll never find a rainbow if you're looking down",
        userId: 1
    }]);
}

module.exports.handler = async () => {
    try {
        const posts = await getPosts();
        return reponseFormat.success(posts);
    } catch (e) {
        return reponseFormat.error(e);
    }
}