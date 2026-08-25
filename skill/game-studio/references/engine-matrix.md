# Matriz de engines

Use esta tabela para orientar a inspeção inicial. Confirme versão, configuração e suporte do alvo na documentação oficial atual antes de alterar o projeto.

| Engine | Sinais para descobrir | Áreas a verificar | Gate principal |
| --- | --- | --- | --- |
| Unreal Engine | `Content/`, `Source/`, `Config/`, `.uproject`, Blueprints | versão, renderer, plugins, módulos, toolchain, shaders, memória, tamanho e estratégia web | provar o alvo pretendido em PoC; não assumir export web/HTML5 |
| Unity | `Assets/`, `Packages/`, `ProjectSettings/`, cenas e prefabs | versão, render pipeline, Input System, pacotes, stripping, memória, compressão, perfis e plugins | build release reproduzível e teste no navegador/dispositivo real quando WebGL for aplicável |
| Godot Engine | `project.godot`, cenas, scripts, recursos e presets | versão, renderer, templates, addons, GDScript/C#, caminhos, carregamento e configurações web | export limpo, servidor local e execução no alvo com console sem erro |
| GameMaker | `.yyp`, objetos, rooms, scripts, extensões e configurações | versão, target, HTML5, JavaScript externo, extensões, assets, fontes, áudio, input e escala | export por perfil e teste servido por HTTP no browser/dispositivo alvo |
| Web sem engine listada | `index.html`, CSS/JS, manifests, bundler e assets | origem dos recursos, requests, build, canvas, resize, input, áudio, armazenamento e tamanho | jogo-base carregável, compreensível e sem dependências externas não autorizadas |

## Regras de diagnóstico

- Não presuma que a presença de uma pasta comprova a engine ou que um preset comprova suporte ao alvo.
- Execute apenas comandos disponíveis no ambiente e coerentes com o projeto; se o CLI não existir, registre a limitação em vez de simular sucesso.
- Separe problema de projeto, exportação, servidor, navegador, dispositivo, integração de plataforma e conteúdo.
- Para browser, valide carregamento via HTTP, resize/orientação, input, áudio, pausa/foco, performance, tamanho e console.
- Para Unreal com destino web, valide primeiro a estratégia de entrega; Pixel Streaming, cloud e wrapper não são equivalentes a um build HTML5 local.
- Para Unity/Godot/GameMaker, reexporte o perfil release após a correção e repita a execução no alvo.

## Fontes oficiais para revalidação

Os links abaixo são pontos de partida, não uma cópia da documentação nem uma garantia de que a versão atual seja igual:

- [Unreal Engine documentation](https://dev.epicgames.com/documentation/en-us/unreal-engine)
- [Unity Manual](https://docs.unity3d.com/Manual/index.html)
- [Godot documentation](https://docs.godotengine.org/en/stable/)
- [GameMaker manual](https://manual.gamemaker.io/)
