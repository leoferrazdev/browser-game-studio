# Gates de qualidade e release

Use os gates como estados verificáveis. Marque cada item como `pass`, `needs-work` ou `blocked`, com evidência, data e limite conhecido.

## Gate 1 — Conceito

- jogador, ação principal e objetivo entendidos rapidamente;
- condição de falha e reinício claras;
- diferencial, público e hipótese de retorno definidos;
- escopo mínimo e não-objetivos registrados.

## Gate 2 — Protótipo jogável

- entrada → simulação → feedback → sucesso/falha → reinício funciona;
- primeiro toque/controle é descobrível;
- colisão, câmera, ritmo e dificuldade são justos;
- não há dependência de portal para provar o loop.

## Gate 3 — Arquitetura

- engine e versão descobertas no projeto real;
- jogo-base separado de engine, plataforma e submissão;
- ciclo de loading/ready, pausa/foco, áudio, resize e save possui contrato;
- riscos de alvo, tamanho, memória, SDK e dependências externas estão registrados.

## Gate 4 — Qualidade

- testes automatizados disponíveis executados;
- build release reproduzível e servido por HTTP quando aplicável;
- browsers/dispositivos e orientações relevantes verificados;
- console sem erros críticos, input/áudio/pausa/resize funcionando;
- acessibilidade, consentimento, privacidade e ausência de debug avaliados;
- performance, carregamento e tamanho dentro do requisito do alvo.

## Gate 5 — Distribuição

- perfil específico da plataforma revisado contra documentação atual;
- SDK/adapters, anúncios e lifecycle testados sem disparos duplicados;
- capas, vídeos, screenshots, descrição, idioma e metadata prontos;
- upload/preview/checklist registrados, sem confundir esses estados com aprovação;
- nenhum segredo incorporado ao build ou ao repositório.

## Gate 6 — Validação e lançamento

- envio externo confirmado pelo portal;
- aprovação e publicação possuem evidência própria;
- comportamento público foi verificado na URL real quando disponível;
- playtest, retenção, erros e feedback são medidos sem apresentar hipótese como resultado;
- próximo experimento e critério de decisão estão definidos.

## Tipos de evidência

- `local`: arquivo, comando, teste ou screenshot local;
- `repository`: commit, artefato ou workflow no Git;
- `portal`: upload, preview, checklist, submissão ou revisão observados no portal;
- `public`: URL pública, comportamento real, erro reproduzido ou métrica observada.

Uma evidência de nível inferior não substitui a de nível superior. Se um gate depende de um estado externo indisponível, marque-o como `blocked` ou `needs-work`, nunca como aprovado por inferência.
