import styles from './SkillList.module.css'

function SkillList({ src, skill }) {
  return (
      <span className={styles.span}>
        <img className={styles.icon} src={src} alt="IconOfSkill" />
        <p>{skill}</p>
      </span>
  )
}

export default SkillList
