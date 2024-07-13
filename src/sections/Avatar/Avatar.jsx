import styles from './Avatar.module.css'
import personAvatar from '../../assets/myAvatar.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import telegramIconLight from '../../assets/icon-telegram-light.svg'
import telegramIconDark from '../../assets/icon-telegram-dark.svg'
import gitHubDarkMode from '../../assets/github-dark.svg'
import gitHubLightMode from '../../assets/github-light.svg'
import Resume from '../../assets/AntonBearResume.pdf'
import { useTheme } from '../../common/ThemeContext'

function Avatar() {
  const { theme, toggleTheme } = useTheme()
  const themeIcon = theme == 'light' ? sun : moon
  const gitHubIcon = theme == 'light' ? gitHubLightMode : gitHubDarkMode
  const telegramIcon = theme == 'light' ? telegramIconLight : telegramIconDark

  return (
    <section id="avatar" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.avatar}
          src={personAvatar}
          alt="Profile picture of Anton Bear"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Anton
          <br />
          Ber
        </h1>
        <h2>Juniour Frontend Developer</h2>
        <span>
          <a href="https://t.me/BerAnton" target="_blank">
            <img src={telegramIcon} alt="telegramIcon" />
          </a>
          <a href="https://github.com/AntonBear" target="_blank">
            <img src={gitHubIcon} alt="github icon" />
          </a>
        </span>
        <p className={styles.description}>
          С любовью к самым продвинутым разработкам PHP для комерческого бизнеса
          и капитализма
        </p>
        <a href={Resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Avatar
