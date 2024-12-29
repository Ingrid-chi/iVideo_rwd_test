import styles from './Header.module.scss';
import logo from '../assets/images/logo_header.png';
import cart from '../assets/icons/add_cart.svg';
import fb from '../assets/icons/FB_3.svg';
import line from '../assets/icons/line_2.svg';
import ig from '../assets/icons/instagram.svg';

const Header = () => {
  const communityIcon = [
    {
      id: 1,
      src: cart,
    },
    {
      id: 2,
      src: fb,
    },
    {
      id: 3,
      src: line,
    },
    {
      id: 4,
      src: ig,
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt='Logo' />
      </div>

      <div className={styles.buttonWrap}>
        <div className={styles.auth}>
          <a href='/login' className={styles.login}>
            Login
          </a>
          <a href='/signup' className={styles.signup}>
            Sign Up
          </a>
        </div>

        <div className={styles.community}>
          {communityIcon.map((icon) => (
            <a key={icon.id} href='/cart' className={styles.communityItem}>
              <img src={icon.src} alt={'icon.src'} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
