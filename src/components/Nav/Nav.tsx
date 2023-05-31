import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Nav.module.scss';
import { navLinks } from './NavLinks';
import { useMemo, useState } from 'react';

export const Nav = () => {
  // Temporary
  const [auth, setAuth] = useState(false);

  const checkedNavLinks = useMemo(() => {
    if (!auth) {
      return navLinks.filter((link) => link.href !== '/bookmarks');
    } else {
      return navLinks;
    }
  }, [auth]);

  return (
    <nav className={styles['nav']}>
      <ul className={styles['nav__list']}>
        {checkedNavLinks.map((link) => (
          <li className={styles['nav__item']} key={link.href}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                cn(styles['nav__link'], {
                  [styles['nav__link--active']]: isActive,
                })
              }
            >
              {link.img}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
