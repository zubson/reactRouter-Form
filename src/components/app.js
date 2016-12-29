import React, {Component} from 'react';
import {Link} from 'react-router';


export default class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">Home</Link>
                        </div>
                        <div className="navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/posts/new" activeStyle={{color: '#3CBFE7'}}>Add new post</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="col-xs-12">
                    {this.props.children}
                </div>
            </div>

        );
    }
}
