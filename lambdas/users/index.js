const reponseFormat = require('response-format');

function getUsers() {
    return Promise.resolve([{
        id: 1,
        name: "Charlie",
        age: 130
    }]);
}

module.exports.handler = async () => {
    try {
        const user = await getUsers();
        return reponseFormat.success(user);
    } catch (e) {
        return reponseFormat.error(e);
    }
}