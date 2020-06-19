import React from 'react';
import './NavHeader.css';

const NavHeader = () => {

  const buildWeeks = () => {
    let weeks = [];
    for (let i = 1; i < 18; i++) {weeks.push(i)}
    return weeks;
  }

  return (
    <section className='nav-outer-container'>
      <h1>NFL Genie 🧞‍♂️</h1>
      <select className='week-drop-box'>
        { buildWeeks().map(week => <option>week {week}</option>) }
      </select>
    </section>
  )

}

export default NavHeader;
