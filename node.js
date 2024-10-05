class Motor {
    constructor(potencia, tipo) {
        this._potencia = potencia
        this._tipo = tipo
    }

    get potencia() {
        return this._potencia
    }
    set potencia(valor) {
        this._potencia = valor
    }
    get tipo() {
        return this._tipo
    }
    set tipo(valor) {
        this._tipo = valor
    }
}

class Carro {
    constructor(cor, modelo, velocidadeMaxima, motor) {
        this._cor = cor
        this._velocidadeAtual = 0
        this._velocidadeMaxima = velocidadeMaxima
        this._modelo = modelo
        this._motor = motor
    }
    liga() {
        console.log(this._motor.tipo === "Elétrico" ? "O carro elétrico está ligado." : "O carro está ligado.")
    }

    acelera(quantidade) {
        this._velocidadeAtual += quantidade
        if (this._velocidadeAtual > this._velocidadeMaxima) {
            this._velocidadeAtual = this._velocidadeMaxima
            console.log("Velocidade máxima atingida!")
        }
    }

    informaMarcha() {
        if (this._velocidadeAtual < 0) {
            return -1
        } else if (this._velocidadeAtual <= 39) {
            return 1
        } else if (this._velocidadeAtual <= 79) {
            return 2
        } else {
            return 3
        }
    }

    get velocidadeMaxima() {
        return this._velocidadeMaxima
    }

    set velocidadeMaxima(valor) {
        if (valor > 0) {
            this._velocidadeMaxima = valor
        } else {
            console.log("A velocidade máxima deve ser maior que zero.")
        }
    }

    get velocidadeAtual() {
        return this._velocidadeAtual
    }

    verificaVelocidade() {
        if (this._velocidadeAtual > this._velocidadeMaxima) {
            console.log("Atenção: Velocidade acima do limite permitido!")
        }
    }
}

const motorGasolina = new Motor(150, "Gasolina")
const fusca = new Carro("Verde", "Fusca", 80, motorGasolina)

fusca.liga()

fusca.acelera(20)
console.log("Velocidade atual:", fusca.velocidadeAtual)
console.log("Marcha atual:", fusca.informaMarcha())

fusca.acelera(30)
console.log("Velocidade atual:", fusca.velocidadeAtual)
console.log("Marcha atual:", fusca.informaMarcha())

fusca.acelera(40)
console.log("Velocidade atual:", fusca.velocidadeAtual)
console.log("Marcha atual:", fusca.informaMarcha())

const motorEletrico = new Motor(200, "Elétrico")
const carroEletrico = new Carro("Azul", "Tesla", 150, motorEletrico)

carroEletrico.liga()
carroEletrico.acelera(50)
console.log("Velocidade atual:", carroEletrico.velocidadeAtual)
console.log("Marcha atual:", carroEletrico.informaMarcha())

carroEletrico.acelera(200)
console.log("Velocidade atual após tentar exceder:", carroEletrico.velocidadeAtual)
carroEletrico.verificaVelocidade()
