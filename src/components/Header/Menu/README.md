# Menu Component

O `MenuItems` é um componente React que gera um menu com base nos dados fornecidos no arquivo `items`. Este componente é flexível e pode se adaptar a diferentes dispositivos usando a propriedade `device`.

## Uso

Importe o `MenuItems` e adicione-o ao seu componente ou página onde deseja exibir o menu.

```jsx
import React from "react";
import MenuItems from "./caminho/do/seu/componente/MenuItems";

const SuaPagina = () => {
  return (
    <div>
      {/* Outros componentes da sua página */}
      <MenuItems device="desktop" />
      {/* Mais conteúdo da sua página */}
    </div>
  );
};

export default SuaPagina;
```

## Estrutura dos Dados

O conteúdo do menu é definido no arquivo `items`. Certifique-se de ajustar ou expandir esse arquivo conforme necessário para atender às suas necessidades de menu.

## Propriedades

O componente aceita uma propriedade chamada `device`, que pode ser definida como `"desktop"` ou `"mobile"`. Isso permite que o componente ajuste seu layout e estilo de acordo com o dispositivo.

## Ícones

O componente suporta a exibição de ícones associados a cada item do menu. Certifique-se de fornecer os caminhos corretos para os ícones no arquivo `items`.

## Estilo Personalizado

Os estilos do menu podem ser personalizados no arquivo `menu.scss`. Sinta-se à vontade para ajustar conforme necessário para se adequar ao seu design.

## Licença

Este componente é fornecido sob a [Licença MIT](./LICENSE). Sinta-se à vontade para usar, modificar e distribuir conforme necessário para seus projetos.
