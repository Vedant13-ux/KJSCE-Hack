const db = require('./models/index');


async function seedDB() {
    // data = {
    //     name:"huzaifapro",
    //     password:"123",
    //     email:"123"
    // }
    data = {
        content: "Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id",
        title: "Lorem Ipsum",
        author: "60688919f87b291b94bcab71"
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
    db.Blog.create(data)
        .then((message) => console.log(message))
        .catch(err => console.log(err))
}

module.exports = seedDB;