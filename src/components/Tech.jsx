import React from 'react'
import { BallCanvas } from './canvas'
import { Wrapper } from '../hoc'
import { useSelector } from 'react-redux'
// import { technologies } from '../constants'

const Tech = () => {
  const { allKnowledges } = useSelector((state) => state.constants)
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {allKnowledges.technologies.map((technology) => {
        return (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        )
      })}
    </div>
  )
}

export default Wrapper(Tech, "")
