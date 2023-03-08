export default function initMarco() {
  var indicesToChangeColor = [];
  var indicesNotDefine = [];

  fetch('marco.json')
    .then((response) => response.json())
    .then((data) => {
      // Criar a lista HTML
      const list = document.createElement('ul');
      // Adicionar cada item da lista ao HTML
      data.forEach((item, index) => {
        const li = document.createElement('li');
        list.appendChild(li);
        li.style.border = '0.5px solid #131313';
        li.style.listStyle = 'none';
        li.style.padding = '26px 26px';
        li.style.borderRadius = '10px';

        // Mudando a cor do índices
        if (indicesToChangeColor.includes(index + 1)) {
          li.style.color = '#ffd700';
          li.style.textShadow = '0.5px 0.5px 1px #333';
        } else if (indicesNotDefine.includes(index + 1)) {
          li.style.color = '#D2691E';
          li.style.textShadow = '0.5px 0.5px 1px #333';
        }

        li.textContent = item;
        li.textContent = JSON.stringify(item).replace(/["{}]/g, '');
        list.appendChild(li);
      });

      // Adicionar a lista ao documento
      document.body.appendChild(list);
    });
}
