# Search Component

O `Search` é um componente React que cria uma barra de pesquisa interativa. Os usuários podem inserir consultas de pesquisa e clicar no botão "Buscar" para acionar a função de envio.

## Uso

Importe o `Search` e adicione-o ao seu componente ou página onde deseja incluir uma barra de pesquisa.

```jsx
import React from "react";
import Search from "./caminho/do/seu/componente/Search";

const SuaPagina = () => {
  return (
    <div>
      {/* Outros componentes da sua página */}
      <Search />
      {/* Mais conteúdo da sua página */}
    </div>
  );
};

export default SuaPagina;
```

## Funcionalidades

- Campo de entrada para consulta de pesquisa.
- Manipulação de estado usando o hook `useState`.
- Função de manipulação de envio que exibe a consulta de pesquisa no console (substitua por sua lógica de pesquisa real).

## Estilo Personalizado

Os estilos da barra de pesquisa podem ser personalizados no arquivo `Search.scss`. Sinta-se à vontade para ajustar conforme necessário para se adequar ao seu design.

## Licença

Este componente é fornecido sob a [Licença MIT](./LICENSE). Sinta-se à vontade para usar, modificar e distribuir conforme necessário para seus projetos.
