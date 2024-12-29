import { useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const navConfig = [
    {
      id: 1,
      title: '商品介紹',
      subItems: ['各國 eSIM', '各國 SIM 卡', '台灣WiFi機(長租優惠)'],
    },
    {
      id: 2,
      title: '快速租借與試算',
    },
    {
      id: 3,
      title: '租借WiFi機&SIM卡',
      subItems: [
        '台灣WiFi機',
        '日本WiFi機&SIM卡',
        '韓國WiFi機',
        '中港澳WiFi機',
      ],
    },
  ];

  //
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制漢堡選單
  const [activeDropdown, setActiveDropdown] = useState(null); // 控制當前展開的下拉選單（手機版）

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };

  return (
    <nav className={styles.navbar}>
      {/* Hamburger menu for mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {navConfig.map((navItem) => {
        return (
          // Desktop menu
          <div key={navItem.title} className={styles['desktop-menu']}>
            <div className={styles.links}>
              {/* Dropdown */}
              <div className={styles.dropdown}>
                <div className={styles['dropdown-toggle']}>
                  {navItem.title}

                  {navItem.subItems && (
                    <ul className={styles['dropdown-menu']}>
                      {navItem.subItems.map((subItem) => (
                        <li key={subItem}>{subItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Mobile menu */}
      <div
        className={`${styles['mobile-menu']} ${
          isMenuOpen ? styles.active : ''
        }`}
      >
        <div className={styles.links}>
          {/* Dropdown 1 */}
          <div
            className={`${styles.dropdown} ${
              activeDropdown === 1 ? styles['mobile-active'] : ''
            }`}
          >
            {navConfig.map((navItem) => {
              return (
                <div key={navItem.title} className={styles['menu-item']}>
                  <div
                    className={styles['dropdown-toggle']}
                    onClick={() => toggleDropdown(navItem.id)}
                  >
                    {navItem.title}
                    <span className={styles.arrow}>
                      {navItem?.subItems && navItem?.subItems.length > 0
                        ? '+'
                        : ''}
                    </span>
                  </div>

                  {activeDropdown === navItem.id && navItem.subItems && (
                    <ul className={styles['dropdown-menu']}>
                      {navItem.subItems.map((subItem) => (
                        <li key={subItem}>{subItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
