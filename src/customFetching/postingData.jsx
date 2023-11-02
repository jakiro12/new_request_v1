
export function sendNewProduct(data) {
  const url = 'https://web-production-0986.up.railway.app/api/v1/productos/';


  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error en la solicitud POST');
    }
    return response.json();
  });
}