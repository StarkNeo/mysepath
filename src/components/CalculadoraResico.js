import React from "react";
import { useState, useEffect } from "react";
import './calculadoraresico.css';
import { calculoIsr } from "../services/resico";

export const CalculadoraResico = () => {
    const [periodo, setPeriodo] = useState("1")
    const [ingreso, setIngreso] = useState(0);
    const [retencion, setRetencion] = useState(0);
    const [provisionales, setProvisionales] = useState(0);
    const [isrCargo, setIsrCargo]= useState(0);

    const handleInputChange = (e) => {
        let value = e.target.value;
        switch (e.target.id) {
            case "ingreso":
                setIngreso(value)
                break;
            case "retencion":
                setRetencion(value)
                break;
            case "provisionales":
                setProvisionales(value)
                break;
            default:
                break;
        }
       
    }

    const handleSelectPeriod = (e) => {
        setPeriodo(e.target.value)
        if (e.target.value === "1") {
            setProvisionales(0);
        }
    }

    const handleOnsubmit=(event)=>{
        event.preventDefault();
        const isr = calculoIsr(periodo, ingreso);
        return isr <0? setIsrCargo(0):setIsrCargo(isr);
    }

    const clearForm=()=>{
        setPeriodo("1");
        setIngreso(0);
        setRetencion(0);
        setProvisionales(0);
        setIsrCargo(0);
    }


    return (
        <div id="calculadora-resico">
            <h1 id="resico-title">RESICO Personas Fisicas</h1>
            <h2 id="resico-subtitle">Calculadora de ISR</h2>

            <section id="seccion-calculo">
                <form onSubmit={handleOnsubmit}>

                    <fieldset className="resico-fieldset">
                        <label htmlFor="periodo">Periodo</label>
                        <select name="periodo" id="periodo" onChange={handleSelectPeriod} required>
                            <option value="1">Mensual</option>
                            <option value="2">Anual</option>

                        </select>
                    </fieldset>
                    <fieldset className="resico-fieldset">
                        <label htmlFor="ingreso">Ingreso</label>
                        <input name="ingreso" id="ingreso" value={ingreso} min={0} onChange={handleInputChange} required></input>

                    </fieldset>
                    <fieldset className="resico-fieldset">
                        <label htmlFor="retencion">Retencion</label>
                        <input name="retencion" id="retencion" value={retencion} onChange={handleInputChange} min={0} required></input>
                    </fieldset>
                    
                    {periodo === "1" ? '' :
                        <fieldset className="resico-fieldset">
                            <label htmlFor="provisionales">Pagos provisionales</label>
                            <input name="provisionales" id="provisionales" value={provisionales} onChange={handleInputChange} min={0} />
                        </fieldset>
                    }

                    <fieldset className="resico-fieldset">
                        <input id="calcular" type="submit" value="Calcular" />
                        <input id="borrar" type="button" value="Borrar" onClick={clearForm} />
                    </fieldset>
                </form>

            </section>
            <h3>{/*{% if resultado[0] == 1 %}
                {{ "Resumen Mensual"}}
                {% else %}
                {{ "Resumen Anual"}}
                   {% endif %}*/}
            </h3>
            <table id="resultado">
                <thead>
                    <tr>
                        <th>Concepto</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ingresos</td>
                        <td>{ingreso}</td>
                    </tr>
                    <tr>
                        <td>ISR a cargo</td>
                        <td>{isrCargo}</td>
                    </tr>
                    
                    <tr>
                        <td>(-) Retenciones</td>
                        <td>{retencion}</td>
                    </tr>
                    <tr>
                        <td>(-) Pagos provisionales</td>
                        <td>{provisionales}</td>
                    </tr>
                    <tr>
                        <td>(=) ISR a Pagar</td>
                        <td>{(isrCargo-retencion-provisionales)<0?0:(isrCargo-retencion-provisionales)}</td>
                    </tr>

                </tbody>

            </table>


        </div>




    )
}