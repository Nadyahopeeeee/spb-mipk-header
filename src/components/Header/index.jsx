import React from 'react';
import styles from './index.module.scss';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.headerConteiner}>
          <div className={styles.headerContent}>
            <div className={styles.headerInfo}>
              <div className={styles.headerInfoCity}></div>
              <a href="/" className={styles.headerInfoLogo}>
                <img src="/" alt="logo"></img>
              </a>
            </div>
            <div className={styles.headerSocial}>
              <a href="/" className={styles.headerSocialItem}>
                <img src="/" alt="VK"></img>
              </a>
              <a href="/" className={styles.headerSocialItem}>
                <img src="/" alt="WhatsApp"></img>
              </a>
              <a href="/" className={styles.headerSocialItem}>
                <img src="/" alt="Telegram"></img>
              </a>
            </div>
            <form className={styles.headerForm}>
              <input placeholder="НАЙТИ" className={styles.headerFormInput}></input>
              <button className={styles.headerFormBtn}>Поиск</button>
              <span className={styles.headerFormIco}></span>
            </form>
            <div className={styles.headerContacts}>
              <span className={styles.headerContactsSchedule}>ПН-ВС 09:00 - 18:00 (МСК)</span>
              <span className={styles.headerContactsPhone}>8 (800) 000-00-00</span>
              <span className={styles.headerContactsEmail}>info@spmipk.com</span>
            </div>
          </div>
          <hr className={styles.headerDelimetr}></hr>
          <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
              <li className={styles.navigationItem}>
                <a href="/" className={styles.navigationLink}>
                  направления
                </a>
              </li>
              <li className={styles.navigationItem}>
                <a href="/" className={styles.navigationLink}>
                  обучение
                </a>
              </li>
              <li className={styles.navigationItem}>
                <a href="/" className={styles.navigationLink}>
                  партнерам
                </a>
              </li>
              <li className={styles.navigationItem}>
                <a href="/" className={styles.navigationLink}>
                  об институте
                </a>
              </li>
              <li className={styles.navigationItem}>
                <a href="/" className={styles.navigationLink}>
                  контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
