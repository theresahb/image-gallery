import React from 'react'
import { social_icons } from '../../data'
import { policies } from '../../data'
import './style.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer flex">
            <ul className="icons flex">
                {social_icons.map((icons) => (
                    <li key={icons.id}>
                        <a href={icons.link}><img src={icons.image} alt="" /></a>
                    </li>
                ))}
            </ul>
            <ul className="policies flex">
                {policies.map((policy) => (
                    <li key={policy.id}><a href={policy.link}>{policy.text}</a></li>
                ))}
            </ul>
            <p>© 2023 Arc by Theresah Boateng</p>
        </div>
    </footer>
  )
}

export default Footer