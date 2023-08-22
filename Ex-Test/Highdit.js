const result = [...'shOrtCAKE']
  .sort((a, b) => /[A-Z]/.test(a) ? /[A-Z]/.test(b) ? 0 : -1 : 0)
  .join('');

console.log(result); 