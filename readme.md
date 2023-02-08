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

Sendo que 'Welcome' não precisa ser necessáriamente o mesmo nome colocado na exportação.
