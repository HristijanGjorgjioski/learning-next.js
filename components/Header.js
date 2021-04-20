import classes from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={classes.title}>
                <span>WebDev</span>News
            </h1>
            <p className={classes.description}>Keep up to date!</p>
        </div>
    )
}

export default Header
