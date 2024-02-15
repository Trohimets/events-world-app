

export async function getData(search_name) {
    const link = `https://jnvlpcalc.spbeias.ru/api/JNVLP/GetFilteredData?chunkName=${search_name}&chunkPackage=&chunkProducer=`;
  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Возвращаем пустой массив в случае ошибки
  }
}

export function filterObjects(inputArray) {
  return inputArray.map(item => ({
    name: item.name,
    package: item.package,
    producer: item.producer,
    price: item.price
  }));
}