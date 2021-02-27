// 22.58 components folder for all components, create header.js file
// rafce tab for shortcut for boilerplate from extension es7
// take out the import react
import PropTypes from 'prop-types'
import Button from './Button'




const Header = ({ title }) => {
  return (
    <header className = 'header'>
      <h1>{title}</h1>
      <Button  color='green' text='Add'/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header
