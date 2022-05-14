const Header = ()=> {
    return(
        <div className='header'>
            <div className='header-left'>
                <h1>Pack Hacker</h1>
                <h3>Never pack from wrong clothes again!</h3>
            </div>
            <div className='header-right'>
                <button className='login'>Log In</button>
                <button className='signup'>Sign Up</button>
            </div>
        </div>
    )
}

export default Header;