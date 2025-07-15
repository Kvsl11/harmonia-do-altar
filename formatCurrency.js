function formatCurrency(value) {
    if (typeof value !== 'number' || isNaN(value)) return 'R$ 0,00';
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

module.exports = formatCurrency;
