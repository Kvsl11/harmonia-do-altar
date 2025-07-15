const formatCurrency = require('./formatCurrency');

describe('formatCurrency', () => {
  test('formats positive numbers correctly', () => {
    expect(formatCurrency(0)).toBe('R$ 0,00');
    expect(formatCurrency(1234.56)).toBe('R$ 1234,56');
    expect(formatCurrency(10)).toBe('R$ 10,00');
  });

  test('returns placeholder for invalid inputs', () => {
    expect(formatCurrency(NaN)).toBe('R$ 0,00');
    expect(formatCurrency('123')).toBe('R$ 0,00');
    expect(formatCurrency(undefined)).toBe('R$ 0,00');
  });
});
