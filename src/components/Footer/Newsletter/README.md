# Newsletter Component

O `Newsletter` é um componente React que permite aos usuários se inscreverem em uma newsletter. Ele inclui um formulário simples com um campo de entrada para o endereço de e-mail e um botão de envio.

## Uso

Importe o `Newsletter` e adicione-o ao seu componente ou página onde deseja incluir um formulário de inscrição na newsletter.

```jsx
import React from "react";
import Newsletter from "./caminho/do/seu/componente/Newsletter";

const SuaPagina = () => {
  return (
    <div>
      {/* Outros componentes da sua página */}
      <Newsletter />
      {/* Mais conteúdo da sua página */}
    </div>
  );
};

export default SuaPagina;
```

## Funcionalidades

- Campo de entrada para o endereço de e-mail.
- Manipulação de estado usando o hook `useState`.
- Função de manipulação de envio que exibe o endereço de e-mail no console (substitua por sua lógica de envio real).

## Personalização

O estilo do formulário pode ser personalizado no arquivo `Newsletter.scss`. Sinta-se à vontade para ajustar conforme necessário para se adequar ao seu design.

## Licença

Este componente é fornecido sob a [Licença MIT](./LICENSE). Sinta-se à vontade para usar, modificar e distribuir conforme necessário para seus projetos.
