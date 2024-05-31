import React from "react";
import { useState, useEffect } from "react";
import './facalculator.css'


export const Facalculator = () => {

    {/*Refactor this code, split in more components */ }
    return (
        <div>
            <h1 id="title"> Calculadora enajenacion de activos fijos</h1>

            <form id="fa-calculator">
                <div class="field">
                    <label for="adqDate">Fecha de adquisicion</label>
                    <input type="date" id="adqDate" value="" onchange="getDate(this.id, this.value)" /><br />
                </div>
                <div class="field">
                    <label for="dispDate">Fecha de venta</label>
                    <input type="date" id="dispDate" value="" onchange="getDate(this.id, this.value)" /><br />

                </div>

                <div class="choose">
                    <legend>Desea considerar el mes de la fecha de venta como ultimo periodo de uso?</legend>
                    <label for="optYes">Si</label>
                    <input type="radio" name="option" id="optYes" value="yes" />
                    <label for="optNo">No</label>
                    <input type="radio" name="option" id="optNo" value="no" />

                </div>

                {/*<!--If no is selected display the next fieldset-->*/}
                <fieldset id="fieldOpt">
                    <label for="inpcMonth">cual es el ultimo mes del periodo de uso?</label>
                    <select name="month" id="select" onchange="getDate(this.id, this.value)">
                        <option value="0"></option>
                        <option value="1">Enero</option>
                        <option value="2">Febrero</option>
                        <option value="3">Marzo</option>
                        <option value="4">Abril</option>
                        <option value="5">Mayo</option>
                        <option value="6">Junio</option>
                        <option value="7">Julio</option>
                        <option value="8">Agosto</option>
                        <option value="9">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                    </select>

                </fieldset><br />
                <div class="field">
                    <label for="moi">Monto original de la inversion</label>
                    <input type="number" id="moi" onchange="calculateBookValue(this.id, this.value)" min="0" required /><br />
                </div>
                <div class="field">
                    <label for="accDep"> Depreciacion acumulada</label>
                    <input type="number" id="accDep" onchange="calculateBookValue(this.id, this.value)" min="0" required /><br />
                </div>
                <div class="field">
                    <label for="bookValue">Valor en libros</label>
                    <input type="number" id="bookValue" disabled /><br />
                </div>
                <div class="field">
                    <label for="sellPrice">Precio de venta</label>
                    <input type="number" id="sellPrice" onchange="calculateBookValue(this.id, this.value)" required /><br />
                </div>
                <div class="field">
                    <label for="result">Utilidad o Perdida</label>
                    <input type="number" id="result" disabled /><br />
                </div>


                <fieldset>
                    <legend>Calculo de la ganancia o perdida fiscal en ventas de activo fijo</legend>
                    <input id="calculate" type="button" value="Calcular" />
                </fieldset>
                <fieldset id="summary"></fieldset>
            </form>

        </div>

    )
}