import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsvalidPresupuesto
}) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            


            {isValidPresupuesto ? (
            <ControlPresupuesto 
            
            presupuesto={presupuesto}
           
            />
            )     :(
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsvalidPresupuesto={setIsvalidPresupuesto}

                />
            )}


        </header>
    )
}

export default Header
