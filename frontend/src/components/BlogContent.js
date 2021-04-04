import Nav from '../containers/global/Nav';
import React from 'react';
import Footer from '../containers/global/Footer'
import { apiCall } from '../services/api'

class BlogContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: {},
            start: true
        }
    }
    componentDidMount() {
        apiCall('get', '/blog/blogContent/' + this.props.match.params.id)
            .then((blog) => {
                return this.setState({ blog, start: false });
            }).catch((err) => {
                console.log(err);
            });
    }
    render() {
        if (this.state.start) {
            return <h4>Loading</h4>
        }
        return (
            <div>
                <Nav />

                <div class="ui piled segment">
                    <h4 class="ui header">A header</h4>
                    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
                    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
                    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default BlogContent;