const db = require('./models/index');


async function seedDB() {
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
    // db.Appointment.create(data)
    //     .then((internship) => console.log(internship))
    //     .catch(err => console.log(err))
}

module.exports = seedDB;