import React from 'react'
import Logo from '../../assets/images/logo.png'
import MenuItem from '../Menu/MenuItem'
import {BiBook} from 'react-icons/bi'
import {AiOutlineBarChart} from 'react-icons/ai'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {GiWhiteBook} from 'react-icons/gi'
import {BsChat} from 'react-icons/bs'
import {AiFillWarning} from 'react-icons/ai'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {MdRssFeed} from 'react-icons/md'
import './Menu.css'

const Header = () => {

    return <div className="container-fluid header-top">
            <div className="col-md-12 col-xs-12">
                <div className="row">
                    <div className="col-md-3">
                        <div className="logo">
                            <img src={Logo} />
                        </div>
                    </div>
                    <div className="col-md-9 main-navigation">
                        <ul className="main-menu">
                            <MenuItem pathname="/" ><BiBook className="icon"/> Home</MenuItem>
                            <MenuItem pathname="/"><AiOutlineBarChart className="icon"/> Projects</MenuItem>
                            <MenuItem pathname="/"><AiFillQuestionCircle className="icon"/> How it works</MenuItem>
                            <MenuItem pathname="/"><GiWhiteBook className="icon"/> FAQ</MenuItem>
                            <MenuItem pathname="/"><BsChat className="icon"/> About Us</MenuItem>
                            <MenuItem pathname="/"><AiFillWarning className="icon"/> Disclaimer</MenuItem>
                            <MenuItem pathname="/"><BsFillEnvelopeFill className="icon"/> Contact Us</MenuItem>
                            <MenuItem pathname="/"><MdRssFeed className="icon"/> Blog</MenuItem>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
}

export default Header;