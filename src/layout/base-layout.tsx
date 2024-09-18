import { Outlet } from 'react-router-dom';
import { UserImage } from '@/components/ui';
import { LogoIcon } from '@/components/common';
import { FavoriteIcon } from '@/components/common';
import { NotificationIcon } from '@/components/common';
import styles from './base-layout.module.scss';

const BaseLayout = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles['header-content']}>
            <div className={styles.logo}>
              <LogoIcon />
              <span className={styles['logo__text']}>
                at-<span className={styles['logo__text--bold']}>work</span>
              </span>
            </div>

            <div className={styles['header__user']}>
              <div className={styles['header__user-icons']}>
                <div className={styles['header__user-icon']}>
                  <FavoriteIcon />
                </div>
                <div className={styles['header__user-icon']}>
                  <NotificationIcon />
                </div>
              </div>

              <div className={styles['header__user-info']}>
                <UserImage className={styles['header__user-img']} />
                <div className={styles['header__user-name']}>Name</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export { BaseLayout };
