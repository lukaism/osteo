import React from "react"
import {StaticImage} from "gatsby-plugin-image"


const Image = (props) => {
    console.log(props.image)

  return (
  <div>
  {props && props.image && <StaticImage
  src={props.image}
  width={300}
  quality={95}
  formats={["AUTO"]}
  alt="astro"
  style={{ marginBottom: `1.45rem`, minWidth: `50px`, minHeight:`120px`}}/>}
  </div>
  )
}

export default Image