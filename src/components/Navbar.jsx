import { useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      {/* Hamburger menu */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Links and Dropdown */}
      <div className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
        <div className={styles.dropdown}>
          <div
            className={styles['dropdown-toggle']}
            onClick={toggleDropdown}
            role='button'
            tabIndex={0}
          >
            商品介紹
          </div>
          {isDropdownOpen && (
            <ul className={styles['dropdown-menu']}>
              <li>各國 eSIM</li>
              <li>各國 SIM 卡</li>
              <li>台灣WiFi機(長租優惠)</li>
            </ul>
          )}
        </div>
        <a href='/'>快速租借與試算</a>
        <div className={styles.dropdown}>
          <div
            className={styles['dropdown-toggle']}
            onClick={toggleDropdown}
            role='button'
            tabIndex={0}
          >
            租借WiFi機&SIM卡
          </div>
          {isDropdownOpen && (
            <ul className={styles['dropdown-menu']}>
              <li>台灣WiFi機</li>
              <li>日本WiFi機&SIM卡</li>
              <li>韓國WiFi機</li>
              <li>中港澳WiFi機</li>
            </ul>
          )}
        </div>
      </div>
      <div
        className={`${styles['mobile-menu']} ${
          isMenuOpen ? styles.active : ''
        }`}
      >
        <div className={styles.links}>
          <div className={styles.dropdown}>
            <div
              className={styles['dropdown-toggle']}
              onClick={toggleDropdown}
              role='button'
              tabIndex={0}
            >
              商品介紹
            </div>
            {isDropdownOpen && (
              <ul className={styles['dropdown-menu']}>
                <li>各國 eSIM</li>
                <li>各國 SIM 卡</li>
                <li>台灣WiFi機(長租優惠)</li>
              </ul>
            )}
            {isDropdownOpen && (
              <ul className={styles['dropdown-menu']}>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
              </ul>
            )}
          </div>
          <a href='/'>快速租借與試算</a>
          <div className={styles.dropdown}>
            <div
              className={styles['dropdown-toggle']}
              onClick={toggleDropdown}
              role='button'
              tabIndex={0}
            >
              租借WiFi機&SIM卡
            </div>
            {isDropdownOpen && (
              <ul className={styles['dropdown-menu']}>
                <li>台灣WiFi機</li>
                <li>日本WiFi機&SIM卡</li>
                <li>韓國WiFi機</li>
                <li>中港澳WiFi機</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
