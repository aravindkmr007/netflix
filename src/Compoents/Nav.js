import React, {useEffect,useState}from 'react'
import './Nav.css'

function Nav() {
    const [Show, sethandleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",() =>
        {
            if(window.scrollY > 100)
            {
                sethandleShow(true)
            }
            else sethandleShow(false)
        })
        return () => {
            window.addEventListener('scroll')
        }
    }, [])
    return (
        <div className ={Show ? 'nav_black nav' : 'nav'}>
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png' alt='Logo' />
            <img className='avatar' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png' alt='proflie'/>
        </div>
    )
}

export default Nav
