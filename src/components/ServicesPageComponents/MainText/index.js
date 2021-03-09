import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  ElementBox,
  ElementContainer,
  ElementParagraph,
  ElementContainerText,
  ElementContainerFather
} from "./MainTextElements"
import Image from "./../../Image"
import { CardDivider, CategoryTitle } from "./MainTextElements"

const MainText = () => {
  return (
    <ElementContainerFather>
      <ElementContainer>
        <Image
          src="nuage.jpg"
          alt="nuage Image"
          style={{ height: "(50%", width: "50%"}}
        />
        <ElementContainerText>
          <CategoryTitle>We love nature</CategoryTitle>

          <ElementParagraph>
            At Wellthy Clinic we offer a full body service with Osteopathy,
            Nutritionist and Pilates services. To support better health and
            wellness through meaningful treatment, nourishment and movement
          </ElementParagraph>
        </ElementContainerText>
      </ElementContainer>
<br/>
      <ElementContainer>
        <ElementContainerText>
          <CategoryTitle>Massage</CategoryTitle>
          <ElementParagraph>
            We believe that by making a number of small changes in different
            domains is better than one big change in a single area. This is why
            we have an integrated approach combining knowledge learnt from
            different fields into treatments to gain the best results for
            patients.
          </ElementParagraph>
        </ElementContainerText>
        <Image
          src="massage.jpg"
          alt="massage Image"
          style={{ height: "50%", width: "50%"}}
        />
      </ElementContainer>
    <br/>
      <ElementContainer>
        <Image
          src="squelette.jpg"
          alt="squelette Image"
          style={{ height: "50%", width: "50%"}}
        />
        <ElementContainerText>
          <CategoryTitle>Osteopathie</CategoryTitle>
          <ElementParagraph>
            We will advise on best stretching and strengthening home exercises
            and stress management strategies. Also top hydration and nutrition
            tips, heat therapy and sleep hygiene techniques to optimise healing.
          </ElementParagraph>
        </ElementContainerText>
      </ElementContainer>
    </ElementContainerFather>
  )
}

export default MainText
