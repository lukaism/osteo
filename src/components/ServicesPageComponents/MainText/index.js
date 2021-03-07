import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { ElementBox, ElementContainer, ElementParagraph} from "./MainTextElements"



const MainText = () => {
    return (
        <>


        <ElementContainer>
        <ElementBox/>
        <ElementParagraph>

        <h3>Hugo</h3>
        At Wellthy Clinic we offer a full body service with Osteopathy, Nutritionist and Pilates services. To support better health and wellness through meaningful treatment, nourishment and movement
        </ElementParagraph>
        </ElementContainer>
        
        <ElementContainer>
        <ElementParagraph>
        <h3>Integrated Approach</h3>
        We believe that by making a number of small changes in different domains is better than one big change in a single area. This is why we have an integrated approach combining knowledge learnt from different fields into treatments to gain the best results for patients.
        </ElementParagraph>
        <ElementBox/>
        </ElementContainer>


        <ElementContainer>
        <ElementBox/>
        <ElementParagraph>
        <h3>Advice service</h3>
        We will advise on best stretching and strengthening home exercises and stress management strategies. Also top hydration and nutrition tips, heat therapy and sleep hygiene techniques to optimise healing.
        </ElementParagraph>  
        </ElementContainer>

        </>
    )
}

export default MainText