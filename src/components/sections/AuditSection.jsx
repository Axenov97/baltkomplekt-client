import React from 'react';
import auditImage from "../../img/audit.svg";
import newService from "../../img/newService.svg";
import './../../scss/auditSection.scss'
import {useNavigate} from "react-router-dom";

const AuditSection = ({auditButtonDisable}) => {
    const navigation = useNavigate();

    return <>
        <section className="audit__section">
            <div className="container">
                <div className="flex-container">

                    <div className="audit__section_left">
                        <img src={auditImage} alt='Таможенный аудит балткомплект' />
                    </div>

                    <div className="audit__section_right">
                        <img src={newService} alt="Балткомплект услуги"/>
                        <h1>Таможенный аудит</h1>
                        <p>
                            Задача таможенного аудита - поиск  решений, позволяющих своевременно выявить риски
                            в ведении компанией ВЭД и минимизировать их негативные последствия для импортера.
                        </p>
                        <button style={!auditButtonDisable ? {display: "none"} : {display: "block"}} className="btn btn__blue" onClick={()=>navigation('/services/audit')}>Читать об услуге</button>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default AuditSection;