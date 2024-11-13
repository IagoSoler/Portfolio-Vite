import React from 'react'

const NavbarLanguage = ({textData,setLanguage,language}) => {
  return (
    <div className="navbar--language">
    <img
        className="navbar--language--flag"
        src={textData.flagSrc}
        alt={language + "Flag"}
    />
    <select
        className="navbar--language--selector"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
    >
        <option value="spanish">{textData.selectorOption1}</option>
        <option value="english">{textData.selectorOption2}</option>
    </select>
</div>
  )
}

export default NavbarLanguage