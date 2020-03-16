import React, { Component } from 'react';
//import INGlogo from '../Assets/Images/Logo.png'
import './Header.css'
import { Link, withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';


class Header extends Component {
    selectedLang = (event) => {
        console.log(event.target.value);
        const { i18n } = this.props;
        i18n.changeLanguage(event.target.value);
    }
    render() {
        console.log(this.props)
        let { t } = this.props;
        return (
            <div>
                <div style={{ backgroundColor: '#ff6200', color: '#fff' }}>
                    <img src="https://static.puzzlefactory.pl/puzzle/189/950/original.jpg" alt='not found' width="200px" height="100px" />
                        <span className='' style={{ color: '#fff', fontSize: '30px', margin: '15%',fontStyle: 'italic' }}>  InstaTradE – Invest And Grow With US </span>
                    {
                        this.props.isLoggedIn ?
                            <span ><button className="bt" onClick={() => this.props.redirect('/logout', this.props.history)} data-toggle="tooltip" title="Logout" >Logout</button></span> :
                            <span><button className="bt" onClick={() => this.props.redirect('/login', this.props.history)} data-toggle="tooltip" title="Login" >Login</button></span>
                    }

                    {/* <span><Link to="/register" data-toggle="tooltip" title="Register" className="link2">Create Account</Link></span>
                    
                    <span><select className="drp" onChange={this.selectedLang}>
                        <option value="en">English</option>
                        <option value="sp">Spanish</option>
                    </select></span> */}
                </div>

            </div>  
        )
    }
}
export default withTranslation()(withRouter(Header));
