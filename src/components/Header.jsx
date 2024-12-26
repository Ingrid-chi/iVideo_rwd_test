import styles from './Header.module.scss';
import logo from '../assets/images/logo_header.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt='Logo' />
      </div>
      {/* <div className={styles.community}>
        <a href='/login' className={styles.Line}>
          Line
        </a>
      </div> */}
      <div className={styles.auth}>
        <a href='/login' className={styles.login}>
          Login
        </a>
        <a href='/signup' className={styles.signup}>
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
