import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { useSelector } from 'react-redux';
// import { experiences } from "../constants";
import { Wrapper } from "../hoc";
import { textVariant } from "../utlits/motion";
import { ExperienceCard } from './ExperienceCard';


const Experience = () => {
  const { allKnowledges } = useSelector((state) => state.constants)
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {allKnowledges.experiences.map((experience, index) => {
            return (
              <ExperienceCard key={index} experience={experience} />
            )
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}
export default Wrapper(Experience, "work")
