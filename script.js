// fetch('./arquivo.json')
//   .then((response) => response.json())
//   .then((data) => {
//     // Criar a lista HTML
//     const list = document.createElement('ul');
//     const stringify = JSON.stringify(data);
//     // Adicionar cada item do JSON à lista
//     stringify.forEach((item) => {
//       const li = document.createElement('li');
//       li.innerText = item;
//       list.appendChild(li);
//     });

//     // Adicionar a lista à página
//     document.querySelector('#list-push').appendChild(list);
//   });
// async function pushData() {
//   const dadosResponse = await fetch('./arquivo.json');
//   const dadosJSON = await dadosResponse.json();
//   const list = document.querySelector('#list-push');
//   list.innerText = JSON.stringify(dadosJSON);
//   const style = document.createElement('style');
//   style.innerText = dadosJSON;
// }

// function regexItem() {
//   let cleanData = this.dadosJSON.map((item) => {
//     return {
//       nome: item.nome,
//       endereco: item.endereco.replace(/[^a-zA-Z0-9,. ]/g, ''),
//     };
//   });

//   let cleanJsonString = JSON.stringify(cleanData);
// }

// pushData();

fetch('arquivo.json')
  .then((response) => response.json())
  .then((data) => {
    // Criar a lista HTML
    const list = document.createElement('ul');

    // Adicionar cada item da lista ao HTML
    data.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = JSON.stringify(item);
      list.appendChild(li);
      li.style.listStyle = 'none';
      li.style.padding = '20px 20px';
    });

    // Adicionar a lista ao documento
    document.body.appendChild(list);
  });
