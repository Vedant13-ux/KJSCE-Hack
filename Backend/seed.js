const db = require('./models/index');


async function seedDB() {
    data = {
        name:"huzaifapro",
        password:"123",
        email:"123"
    }
    // data = [
    //     {
    //         text: "Hey Are You!",
    //         created: new Date(),
    //         author: "606853563714bc38fc80db0e"
    //     },
    //     {
    //         text: "I am Fine",
    //         created: new Date(),
    //         author: "60685381b839e9392b6cef67"
    //     }
    // ]
    // data = {
    //     date: new Date(),
    // time: '2 pm',
    // counsellor: [
    //     "606853738052e03915b893e2"
    // ],
    // counsultant: "606853563714bc38fc80db0e",
    // messages: [
    //     {
    //         text:"hey",
    //         author:"606853563714bc38fc80db0e"
    //     },{
    //         text:"hello",
    //         author:"606853563714bc38fc80db0e"
    //     },{
    //         text:"plz respond",
    //         author:"606853563714bc38fc80db0e"
    //     },{
    //         text:"plz shut up",
    //         author:"606853738052e03915b893e2"
    //     }
    // ]
    // }
    db.User.create(data)
        .then((message) => console.log(message))
        .catch(err => console.log(err))
}

module.exports = seedDB;