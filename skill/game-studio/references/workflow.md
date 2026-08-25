# Workflow de produção

## 1. Descobrir antes de editar

Registre projeto, engine/versão, alvo, dispositivos, estado atual, scripts, testes, repositório e restrições. Leia as instruções locais e apenas as notas do cofre relevantes. Uma pasta ou extensão esperada é uma heurística; a inspeção do projeto real é a evidência.

## 2. Definir o núcleo

Descreva em poucas linhas o jogador, ação principal, condição de sucesso/falha, feedback, onboarding, ritmo, progressão e retorno. Defina o menor loop jogável e uma hipótese de retenção que possa ser testada. Não aumente escopo de conteúdo antes de provar que o loop funciona.

## 3. Prototipar e implementar

Separe o jogo-base das integrações da engine. Faça a menor implementação vertical que percorra entrada → simulação → feedback → estado final → reinício. Preserve contratos de pausa, foco, redimensionamento, áudio e carregamento desde o primeiro protótipo quando o alvo for navegador.

## 4. Validar

Use testes automatizados quando existirem, execução no alvo real e evidência visual/console. Reproduza falhas no menor caso, classifique-as como editor, export, runtime, servidor, plataforma ou conteúdo, e só declare correção após repetir o caminho que falhava.

## 5. Adaptar para distribuição

Mantenha adaptadores e perfis de submissão fora do núcleo. Para cada plataforma, registre lifecycle, SDK, monetização, orientação, input, consentimento, metadata, covers/videos e limites. Um build comum não elimina contratos diferentes.

## 6. Encerrar com estados separados

Registre separadamente: build local, artefato no GitHub, upload no portal, preview/checklist, envio, aprovação, publicação e comportamento público. Logs locais, mocks e um upload concluído não são evidência de aprovação ou de métricas de jogadores.

## Aplicação ao cofre de jogos

Em projetos com uma base de conhecimento operacional, use essa governança como contexto. Relacione o trabalho ao R.E.T.E.R. (clareza, satisfação, progressão, retorno e monetização responsável) e ao B.S.M.P.A.L. (build, apresentação, medição, playtest, amplificação e lançamento), sem confundir uma recomendação com um resultado medido.

## Decisões e limites

Toda decisão arquitetural deve registrar motivo, alternativa descartada, evidência e risco restante. Prossiga autonomamente em ações locais reversíveis; pare para confirmar quando houver ação destrutiva, credencial, nova autoridade, submissão externa final ou publicação.
