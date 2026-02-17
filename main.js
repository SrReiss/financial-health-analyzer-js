const empresas = [
    { nome: "Loja do João", faturamento: 38000, custos: 35000, regime: "Simples", ativo: true },
    { nome: "Mercado Ideal", faturamento: 70000, custos: 62000, regime: "Lucro Presumido", ativo: true },
    { nome: "Tech Serviços", faturamento: 30000, custos: 28000, regime: "Simples", ativo: false },
    { nome: "Oficina ProCar", faturamento: 45000, custos: 20000, regime: "Simples", ativo: true }
];

function classificarMargem (margem){
    if (margem < 0.1) {
        return "Crítica";
    } else if (margem <= 0.2) {
        return "Atenção";
    } return "Saudável";
}

const relatorio = empresas.filter(empresa => empresa.ativo).map(empresa => {
    const lucro = empresa.faturamento - empresa.custos;
    const margem = empresa.faturamento === 0 ? 0 : lucro / empresa.faturamento;

    const situacao = classificarMargem(margem);

    return {
        nome: empresa.nome,
        faturamento: empresa.faturamento,
        custos: empresa.custos,
        lucro,
        margem,
        situacao
    };
});

console.log("******** Relatório Empresas ********");
relatorio.forEach (emp => {
    const faturamentoFormatado = emp.faturamento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const custosFormatado = emp.custos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const lucroFormatado = emp.lucro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const margemFormatada = (emp.margem * 100).toFixed(2);
    
    console.log(`Empresa: ${emp.nome}`);
    console.log(`Faturamento: ${faturamentoFormatado} | Custos: ${custosFormatado}`);
    console.log(`O Lucro Bruto foi de ${lucroFormatado}, com uma margem de ${margemFormatada}%.`);
    console.log(`Situação: ${emp.situacao}`);
    console.log("-----------------------------------------");
});
