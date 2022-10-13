function funcMes(valor_mes) {
    let mes = parseInt(valor_mes);
    let mes_extenso;

    // dentro do switch passa o elemento verificador
    switch (mes) {
        case 1:
            mes_extenso = "Janeiro";
            break;
        case 2:
            mes_extenso = "Fevereiro";
            break;
        case 3:
            mes_extenso = "Março";
            break;
        case 4:
            mes_extenso = "Abril";
            break;
        case 5:
            mes_extenso = "Maio";
            break;
        case 6:
            mes_extenso = "Junho";
            break;
        case 7:
            mes_extenso = "Julho";
            break;
        case 8:
            mes_extenso = "Agosto";
            break;
        case 9:
            mes_extenso = "Setembro";
            break;
        case 10:
            mes_extenso = "Outubro";
            break;
        case 11:
            mes_extenso = "Novembro";
            break;
        case 12:
            mes_extenso = "Dezembro";
            break;
        //Se não for nenhum desses faz essa tratativa
        default:
            mes_extenso = "Mês inválido";
            break;
    }

    document.getElementById("txtMes").innerHTML = mes_extenso;
}