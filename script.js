var indicesToChangeColor = [0, 1, 2, 5, 6, 7, 20, 36];

fetch('arquivo.json')
  .then((response) => response.json())
  .then((data) => {
    // Criar a lista HTML
    const list = document.createElement('ul');

    // Adicionar cada item da lista ao HTML
    data.forEach((item, index) => {
      const li = document.createElement('li');
      list.appendChild(li);
      li.style.border = '1px solid #131313';
      li.style.listStyle = 'none';
      li.style.padding = '20px 20px';

      // Mudando a cor do índices
      if (indicesToChangeColor.includes(index + 1)) {
        li.style.color = '#ffd700';
        li.style.border = '1px solid #131313';
        li.style.textShadow = '0.5px 0.5px 1px #333';
      }

      li.textContent = item;
      li.textContent = JSON.stringify(item);
      list.appendChild(li);
    });

    // Adicionar a lista ao documento
    document.body.appendChild(list);
  });
