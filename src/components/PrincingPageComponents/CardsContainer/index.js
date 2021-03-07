import React from 'react'
import PriceCard from './../PriceCard'
import { CardDivider, CategoryTitle } from './ContainerElements'

const CardsContainer = () => {
    return (
        <>
            <CategoryTitle>Servicios de Salud</CategoryTitle>
            <br />
            <CardDivider>
                <PriceCard title={"FISIOTERAPIA"} firstPrice={45} secondPrice={40} />
                <PriceCard title={"OSTEOPATIA"} firstPrice={45} secondPrice={40} />
            </CardDivider>
            <br />
            <CategoryTitle className="test">Entrenamiento Personal</CategoryTitle>
            <br />
            <CardDivider>
                <PriceCard title={"INDIVIDUAL"} firstPrice={35} secondPrice={65} thirdPrice={90} />
                <PriceCard title={"PAREJAS"} firstPrice={50} secondPrice={90} thirdPrice={120} />
                <PriceCard title={"TRES O MÁS"} firstPrice={60} secondPrice={100} thirdPrice={135} />
            </CardDivider>
        </>
    )
}
export default CardsContainer
