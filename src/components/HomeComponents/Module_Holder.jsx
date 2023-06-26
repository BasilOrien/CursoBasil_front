import React from 'react'
import Styles from '../../styles/HomeHolders.module.css'
const ModuleHolder = () => {
    return (
        <div className={Styles.m_holderContainer}>
            <div className={Styles.roud_square_child}>
                <h2>Modulo Inicial</h2>
                <h4>Fundamentos</h4>
            </div>
            <div className={Styles.roud_square_child}>
                <h2>Modulo 1</h2>
                <h4>JavaScript Basico I</h4>
            </div>
            <div className={Styles.roud_square_child}>
                <h2>Modulo 2</h2>
                <h4>JavaScript Basico II</h4>
            </div>
            <div className={Styles.roud_square_child}>
                <h2>Modulo 3</h2>
                <h4>JavaScript Intermedio I</h4>
            </div>
            <div className={Styles.roud_square_child}>
                <h2>Modulo 4</h2>
                <h4>JavaScript Intermedio II</h4>
            </div>
        </div>
    )
}

export default ModuleHolder