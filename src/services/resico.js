let tablaMensual = [
    [25000,0.01],
    [50000,0.0110],
    [83333.33,0.0150],
    [208333.33,0.02],
    [3500000,0.025]
]

let tablaAnual =[
    [300000,0.01],
    [600000,0.0110],
    [1000000,0.0150],
    [2500000,0.02],
    [3500000,0.025]
]

export const calculoIsr=(periodo, ingreso)=>{
    if (periodo === "1") {
        for (let index = 0; index < tablaMensual.length; index++) {
            if (ingreso <= tablaMensual[index][0]) {
                return ingreso * tablaMensual[index][1]
            }
            
        }
    } else {
        for (let index = 0; index < tablaAnual.length; index++) {
            if (ingreso <= tablaAnual[index][0]) {
                return ingreso * tablaAnual[index][1] 
            }
         }
    }
}