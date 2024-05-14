import React from "react";
import { useState } from "react";
import './convertidor.css';
import { converter } from "../services/converter";

export const Convertidor=()=>{
    const [numero, setNumero] = useState('');
    const [base, setBase]=useState(2);
    const [resultado, setResultado]=useState(null);


    function onChangeHandler(e) {
        setNumero(e.target.value);
    }

    function calculate(event){
        event.preventDefault();
        let resultado = converter(numero, base);
        setResultado(resultado);
       
    }

    function onChangeBaseHandler(e){
        setBase(parseInt(e.target.value));   
            
    }


    return(
        <form id="convertir-sistemas" onSubmit={calculate}>
                    <fieldset className="converter-fields">
                    <label htmlFor="numero-decimal">Numero decimal</label>
                    <input id="numero-decimal" value={numero} onChange={onChangeHandler} />
                    
                    </fieldset>
                    <fieldset className="converter-fields">
                    <label htmlFor="base">Base a convertir</label>
                    <select name="base" id="base" onChange={onChangeBaseHandler}>
                        <option value='2'>Binario</option>
                        <option value ='8'>Octal</option>
                        <option value='16'>Hexadecimal</option>
                    </select>                    
                    </fieldset>
                    <input type="submit" value='calcular' />
                    <output>Resultado: {resultado}</output>
                </form>
    )
}