async function pushData() {
  const dadosResponse = await fetch('./arquivo.json');
  const dadosJSON = await dadosResponse.json();
  const list = document.querySelector('#list-push');
  list.innerText = JSON.stringify(dadosJSON);
  regexItem();
}

function regexItem() {
  let cleanData = this.dadosJSON.map((item) => {
    return {
      nome: item.nome,
      endereco: item.endereco.replace(/[^a-zA-Z0-9,. ]/g, ''),
    };
  });

  let cleanJsonString = JSON.stringify(cleanData);
}

pushData();
