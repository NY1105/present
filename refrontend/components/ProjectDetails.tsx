import { Project } from '@/utils/types'
import React from 'react'
import RenderContainer from './RenderContainer'

const ProjectDetails = (props: Project) => {
  const { title, name, description, url, image } = props

  return (
    <RenderContainer childrenClassName="">
      <div className="flex justify-between w-full">
        <div className="flex flex-col sm:flex-row m-2 h-20">
          <div className="flex flex-col justify-center text-xl md:text-4xl">
            {title}
          </div>
          <div className="flex-1"></div>
          <div className="">
            <img
              src={image}
              alt={name}
              className="m-2 h-full object-scale-down"
            ></img>
          </div>
        </div>
      </div>
    </RenderContainer>
  )
}

export default ProjectDetails
