import React from 'react'

const NavbarContact = ({githubLogo,linkedinLogo}) => {
  return (
    <div className="navbar--contact">
    <a
        href="https://github.com/IagoSoler"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img
            className="navbar--contact--github__image"
            src={githubLogo}
            alt="GitHub"
        />
    </a>
    <a
        href="https://www.linkedin.com/in/iago-soler-veira-73a2a9188"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img
            className="navbar--contact--linkedin__image"
            src={linkedinLogo}
            alt="LinkedIn"
        />
    </a>
</div>
  )
}

export default NavbarContact