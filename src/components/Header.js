import {Link} from 'react-router-dom'

const Header = ()=> {
    return(
        <div className='header'>
            <div className='header-left'>
            <nav>
            <Link className='header-title' to='/'>
                <div>Pack Hacker</div>
            </Link>
            </nav>
                <h3 className='subtitle'>Never pack the wrong clothes again!</h3>
            </div>
            {/* <div className='header-right'>
                <button className='login'>Log In</button>
                <button className='signup'>Sign Up</button>
            </div> */}
        </div>
    )
}

export default Header;