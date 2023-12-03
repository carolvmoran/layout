# Carousel Brands Component

O `CarouselBrands` é um componente React que utiliza a biblioteca `react-slick` para criar um carrossel de marcas parceiras. Este componente é projetado para se adaptar a diferentes tamanhos de tela, proporcionando uma experiência responsiva.

## Pré-requisitos

Certifique-se de ter as dependências necessárias instaladas em seu projeto:

- React
- react-slick
- slick-carousel

```bash
npm install react slick-carousel
```

## Uso

Importe o `CarouselBrands` e adicione-o ao seu componente ou página onde deseja exibir o carrossel de marcas parceiras.

```jsx
import React from "react";
import CarouselBrands from "./caminho/do/seu/componente/CarouselBrands";

const SuaPagina = () => {
  return (
    <div>
      {/* Outros componentes da sua página */}
      <CarouselBrands />
      {/* Mais conteúdo da sua página */}
    </div>
  );
};

export default SuaPagina;
```

## Características

- Carrossel responsivo que se ajusta automaticamente a diferentes tamanhos de tela.
- Mostra um número diferente de marcas com base no tamanho da tela.
- Utiliza a biblioteca `react-slick` para criar uma experiência de carrossel interativa.

## Props

O componente não aceita propriedades adicionais no momento.

## Estilos Personalizados

O estilo do carrossel e dos itens das marcas pode ser personalizado no arquivo `CarouselBrands.scss`. Sinta-se à vontade para ajustar conforme necessário para se adequar ao seu design.

## Licença

Este componente é fornecido sob a [Licença MIT](./LICENSE). Sinta-se à vontade para usar, modificar e distribuir conforme necessário para seus projetos.
