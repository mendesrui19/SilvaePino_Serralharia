# Serralharia Silva & Pina — Site

Site institucional moderno e futurista para a **Serralharia Silva & Pina**
(Pedroso, Vila Nova de Gaia). Construído em **HTML + CSS + JavaScript puro**,
sem dependências nem passo de build — abre em qualquer browser e aloja-se
em qualquer servidor estático.

## Estrutura

```
index.html     → conteúdo e estrutura de todas as secções
styles.css     → tema "Forja do Futuro" (aço + laranja forja + ciano)
script.js      → loader, animações de scroll, contadores, faíscas, formulário
.claude/       → config de pré-visualização (não é preciso para publicar)
```

## Ver localmente

Basta abrir o `index.html` no browser. Ou, para servir corretamente:

```bash
python3 -m http.server 4180
# depois abrir http://localhost:4180
```

## Publicar

É um site estático. Pode ser alojado **de graça** em:

- **Netlify** ou **Vercel** — arrastar a pasta para o site deles.
- **GitHub Pages** — fazer push e ativar Pages.
- Qualquer alojamento web — enviar os ficheiros por FTP.

## O que personalizar

| O quê | Onde |
|---|---|
| Telefone / WhatsApp (`964 053 721`) | `index.html` e `script.js` (procurar `351964053721`) |
| Morada e horário | `index.html`, secção `#contacto` |
| Textos e serviços | `index.html` |
| **Fotos reais das obras** | secção `#obras` — substituir os `<svg>` ilustrativos por `<img>` das fotografias do cliente |
| Cores do tema | `styles.css`, variáveis `:root` (`--forge`, `--cyan`, etc.) |

## Funcionalidades

- Animações de "casas que se desenham" (line-art SVG) no hero e na galeria.
- Fundo animado com faíscas de forja (canvas) e grelha futurista.
- Contadores animados, revelações ao scroll, brilho nos cartões ao passar o rato.
- Formulário de orçamento que abre o **WhatsApp** com a mensagem já preenchida.
- Botões flutuantes de chamada e WhatsApp.
- Totalmente responsivo (desktop, tablet, telemóvel) com menu deslizante.
- Respeita `prefers-reduced-motion` para acessibilidade.

## Notas

As ilustrações da secção **Obras** são placeholders animados, prontos a
substituir pelas fotografias reais das obras do cliente (mantendo o mesmo
layout de cartões).
