import styles from './Skills.module.css'
import IconForJavaScript from '../../assets/icon-dot-javascript.png'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1>I am learning and practising with Skills:</h1>
      <div className={styles.SkillList}>
        <SkillList src={IconForJavaScript} skill="Javascript" />
        <SkillList src={IconForJavaScript} skill="HTML" />
        <SkillList src={IconForJavaScript} skill="CSS/SASS" />
        <SkillList src={IconForJavaScript} skill="React" />
        <SkillList src={IconForJavaScript} skill="Git" />
        <SkillList src={IconForJavaScript} skill="API/REST API" />
      </div>
    </section>
  )
}

export default Skills
