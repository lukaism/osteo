import React from 'react'
import PriceCard from './../PriceCard'
import { CardDivider, CategoryTitle } from './ContainerElements'

const CardsContainer = () => {
    return (
        <>
            <CategoryTitle>Servicios de Salud</CategoryTitle>
            <br />
            <CardDivider>
                <PriceCard />
                <PriceCard />
            </CardDivider>
            <br />
            <CategoryTitle>Entrenamiento Personal</CategoryTitle>
            <br />
            <CardDivider>
                <PriceCard />
                <PriceCard />
                <PriceCard />
            </CardDivider>
        </>
    )
}
export default CardsContainer
