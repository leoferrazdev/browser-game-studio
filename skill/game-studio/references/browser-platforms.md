# Distribuição em plataformas de navegador

## Modelo de camadas

O mesmo jogo pode compartilhar `base-game`, conteúdo e contratos de save, mas cada plataforma deve ter um `platform-adapter` e um `submission-profile` próprio. O perfil contém SDK, lifecycle, anúncios, consentimento, analytics, orientação, input, metadata, covers, vídeos e checklist.

O build-base deve permanecer executável sem depender de um portal. Requests externos, fontes, analytics, anúncios ou bibliotecas de terceiros só entram quando autorizados pelo perfil e quando foram verificados para o alvo. Um mock local mostra o formato de integração, não substitui o SDK nem prova a aprovação.

## Matriz mínima por portal

| Portal | Perfil que deve ser isolado | Evidência mínima antes de enviar |
| --- | --- | --- |
| CrazyGames | SDK/lifecycle, monetização, orientação, previews, checklist de lançamento e requisitos de domínio | build release, preview/QA, browser/mobile checks e checklist atual respondido com evidência |
| GamePix | build/metadata, integração exigida pelo portal, assets e revisão do cadastro | artefato enviado, dados do jogo, resultado do portal e estado público separado |
| GameDistribution | SDK, checklist, upload, assets de loja e regras de distribuição | build/upload, checklist de SDK e resultado da revisão do portal |
| Poki | processo de acesso/submissão, SDK/lifecycle, monetização, assets e requisitos de aprovação | aprovação de acesso quando exigida, build/profile e confirmação do estado no portal |
| Outro portal | adaptar a mesma matriz após ler documentação oficial atual | requisito específico, teste/preview, envio e verificação pública quando disponível |

Os nomes acima são roteamento operacional; requisitos, APIs e elegibilidade podem mudar. Releia a documentação oficial do portal no momento da adaptação e registre a data da verificação.

## Lifecycle e anúncios

Mapeie estados de jogo e eventos do portal (`loading`, `ready`, `gameplay start/stop`, pausa, foco, fim de partida e retomada) antes de integrar. Eventos idempotentes e travas de estado evitam disparos duplicados. Durante um anúncio ou pausa externa, suspenda controles, simulação e áudio conforme o contrato atual do portal, e restaure-os somente pelo caminho de retomada validado.

## O que não pode ser inferido

- Upload não é submissão aceita.
- Checklist preenchido não é aprovação.
- Aprovação não prova distribuição ampla.
- Preview local não prova comportamento público.
- Mock de SDK não prova contrato de produção.
- Build pequeno ou sem erros não prova retenção, monetização ou conformidade editorial.

Registre esses estados em notas separadas no cofre e nunca use credenciais, tokens ou dados sensíveis em uma skill ou nota geral.

## Fontes de revalidação

Comece pelos portais oficiais: [CrazyGames Developer](https://developer.crazygames.com/), [GameDistribution Developer](https://developer.gamedistribution.com/), [GamePix Developer](https://my.gamepix.com/) e [Poki Developers](https://developers.poki.com/). Se o portal exigir login para os requisitos, trate a evidência do portal como estado externo e não invente o que não foi observado.
