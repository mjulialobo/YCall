//==Receives inputs, calculate bill, insert results into Modal==//


function calculating(event) {
    const from = document.getElementById("from").value
    const to = document.getElementById("to").value
    const planSelected = document.getElementById("falemais").value
    const durationSelected = document.getElementById("quantity").value

    //==CALCULATOR==

    //==011-016 and 011-018==//
    if (from == "011" && to == "016" || from == "018" && to == "011") {
        let noPlan = ((Number(durationSelected) * 1.90).toFixed(2))
        document.getElementById('noplan-result').innerHTML = `R$${noPlan}`

        if (planSelected == "30") {
            if (durationSelected > 30) {
                let min = (Number(durationSelected) - 30) * 1.90
                let fale30 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale30}`

            } else {
                let fale30 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }
        } else if (planSelected == "60") {
            if (durationSelected > 60) {
                let min = (Number(durationSelected) - 60) * 1.90
                let fale60 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale60}`

            } else {
                let fale60 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }

        } else if (planSelected == "120") {
            if (durationSelected > 120) {
                let min = (Number(durationSelected) - 120) * 1.90
                let fale120 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale120}`

            } else {
                let fale120 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }
        }
    }

    //==011-017==//
    else if (from == "011" && to == "017") {
        let noPlan = ((Number(durationSelected) * 1.70).toFixed(2))
        document.getElementById('noplan-result').innerHTML = `R$${noPlan}`

        if (planSelected == "30") {
            if (durationSelected > 30) {
                let min = (Number(durationSelected) - 30) * 1.70
                let fale30 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale30}`

            } else {
                let fale30 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }
        } else if (planSelected == "60") {
            if (durationSelected > 60) {
                let min = (Number(durationSelected) - 60) * 1.70
                let fale60 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale60}`

            } else {
                let fale60 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }

        } else if (planSelected == "120") {
            if (durationSelected > 120) {
                let min = (Number(durationSelected) - 120) * 1.70
                let fale120 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale120}`

            } else {
                let fale120 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }
        }

    }

    //==011-018==//
    else if (from == "011" && to == "018") {
        let noPlan = ((Number(durationSelected) * 0.90).toFixed(2))
        document.getElementById('noplan-result').innerHTML = `R$${noPlan}`


        if (planSelected == "30") {
            if (durationSelected > 30) {
                let min = (Number(durationSelected) - 30) * 0.90
                let fale30 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale30}`

            } else {
                let fale30 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }
        } else if (planSelected == "60") {
            if (durationSelected > 60) {
                let min = (Number(durationSelected) - 60) * 0.90
                let fale60 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale60}`

            } else {
                let fale60 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }

        } else if (planSelected == "120") {
            if (durationSelected > 120) {
                let min = (Number(durationSelected) - 120) * 0.90
                let fale120 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale120}`

            } else {
                let fale120 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }
        }

    }

    //==016-011==//
    else if (from == "016" && to == "011") {
        let noPlan = ((Number(durationSelected) * 2.90).toFixed(2))
        document.getElementById('noplan-result').innerHTML = `R$${noPlan}`


        if (planSelected == "30") {
            if (durationSelected > 30) {
                let min = (Number(durationSelected) - 30) * 2.90
                let fale30 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale30}`
            } else {
                let fale30 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }
        } else if (planSelected == "60") {
            if (durationSelected > 60) {
                let min = (Number(durationSelected) - 60) * 2.90
                let fale60 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale60}`

            } else {
                let fale60 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }

        } else if (planSelected == "120") {
            if (durationSelected > 120) {
                let min = (Number(durationSelected) - 120) * 2.90
                let fale120 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale120}`

            } else {
                let fale120 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }
        }
    }

    //==017-011==//
    else if (from == "017" && to == "011") {
        let noPlan = ((Number(durationSelected) * 2.70).toFixed(2))
        document.getElementById('noplan-result').innerHTML = `R$${noPlan}`


        if (planSelected == "30") {
            if (durationSelected > 30) {
                let min = (Number(durationSelected) - 30) * 2.70
                let fale30 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale30}`
            } else {
                let fale30 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }
        } else if (planSelected == "60") {
            if (durationSelected > 60) {
                let min = (Number(durationSelected) - 60) * 2.70
                let fale60 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale60}`

            } else {
                let fale60 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }

        } else if (planSelected == "120") {
            if (durationSelected > 120) {
                let min = (Number(durationSelected) - 120) * 2.70
                let fale120 = ((min + (min * 0.10)).toFixed(2))
                document.getElementById('plan-result').innerHTML = `R$${fale120}`

            } else {
                let fale120 = 0
                document.getElementById('plan-result').innerHTML = `Não gastou nada!`

            }
        }

    }

    //==No tax==//
    else {
        let noTax = "--"
        document.getElementById('main-text').innerHTML = "Desculpe, ainda não temos essa simulação."
        document.getElementById('main-text').style.marginTop = "80px"
        document.getElementById('plan-result').innerHTML = `${noTax}`
        document.getElementById('noplan-result').innerHTML = `${noTax}`
        document.getElementById('hide').style.display = "none"
        document.getElementById('icon-one').style.display = "none"
        document.getElementById('icon-two').style.display = "none"
    }

}