# DOCUMENTAÇÃO

## SELETORES CSS

```
'.' = seletor de classe CSS
```

```
'#' = seletor de ID CSS
```

```
'sem nada' = seletor de <tag> CSS
```

```
'espaço' seleciona o que está dentro (filhos) CSS
```

CLASSES podem ter dois nomes. Exemplo:

```
<p> className="padrao blue">Clique no botão para jogar</p>
```

Neste caso chamo a classe no CSS:

```
.welcome .padrao.blue { }
```

## JAVASCRIPT

### Importação

Export

```
export const Welcome = () => { }

```

Se eu exportar como no exemplo, eu preciso importar assim:

```
import { Welcome } from "./welcome";
```

Onde, '{Welcome}' é o nome da const que está sendo exportada, e "./welcome" é o caminho do onde se encontra o arquivo.

Export Default

```
const Welcome = () => { }

export default Welcome

```

Se eu exportar como 'export default', preciso importar assim:

```
import Welcome from "./welcome";

```

Sendo que 'Welcome' não precisa ser necessariamente o mesmo nome colocado na exportação.

### Conceitos React

A estrutura de um componente é:

```
const NomeComponente = () => {

  return(
  <div> HTML </div>
  )

}

export default NomeComponente
```

OU

```
function NomeComponent () {

  return(
    <div> HTML </div>
  )
}

export default NomeComponente
```

- Um componente sempre retorna um HTML

#### Conectando Componentes

Para conectar um componente ao outro eu preciso utilizar de funcões.

1. Crio uma função que terá um state, onde eu posso alterar o estado de uma variavel.
2.

SEMPRE QUE EU FIZ UM MAP, NO RETURN DE UM COMPONENTE, ELE PRECISA DA PROPRIEDADE 'KEY', E ELA TEM QUE TER UM VALOR UNICO. SEMPRE NO PRIMEIRO, OU SEJA, O CHILD DO RETURN!
