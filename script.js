var indicesToChangeColor = [1, 2, 3, 6, 7, 8, 21, 36];

fetch('arquivo.json')
  .then((response) => response.json())
  .then((data) => {
    // Criar a lista HTML
    const list = document.createElement('ul');

    // Adicionar cada item da lista ao HTML
    data.forEach((item, index) => {
      const li = document.createElement('li');
      list.appendChild(li);
      li.style.listStyle = 'none';
      li.style.padding = '20px 20px';

      if (indicesToChangeColor.includes(index + 1)) {
        li.style.color = 'yellow';
        li.style.borderColor = 'black';
      }

      li.textContent = item;
      li.textContent = JSON.stringify(item);
      list.appendChild(li);
    });

    // Adicionar a lista ao documento
    document.body.appendChild(list);
  });
