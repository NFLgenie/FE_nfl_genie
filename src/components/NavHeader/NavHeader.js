import React from 'react';
import './NavHeader.css';

const NavHeader = () => {

  const buildWeeks = () => {
    let weeks = [];
    for (let i = 1; i < 18; i++) {weeks.push(`week ${i}`)}
    weeks.push('WC', 'DV', 'CG', 'SB');
    return weeks;
  }

  return (
    <section className='nav-outer-container'>
      <h1>NFL Genie 🧞‍♂️</h1>
      <select className='week-drop-box'>
        { buildWeeks().map(week => <option key={week}>{week}</option>) }
      </select>
      <p>predictions made: <strong>50%</strong></p>
      <p>userName</p>
      <button className='save-button'>save</button>
      <button className='login-button'>log in</button>
    </section>
  )
}

export default NavHeader;
