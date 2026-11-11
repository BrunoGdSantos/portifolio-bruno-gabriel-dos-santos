AUDITORIA_IA: Registro de Copilotagem Crítica

Projeto: Bootcamps e o Mercado Tech Júnior
Autores: Bruno Gabriel dos Santos e Alex Sander de Jesus Carvalho

Ficha 1: Quiz interativo (teste.html)

Ferramenta: Gemini Pro 3.1

Prompt:


Desenvolva uma microaplicação interativa de questionário para a página `teste.html` do projeto, utilizando exclusivamente **HTML5, CSS3 e JavaScript Vanilla**.

A aplicação deverá funcionar como um instrumento de autoavaliação sobre preparação técnica, autonomia no desenvolvimento de software e equilíbrio socioemocional diante das exigências do mercado de tecnologia.

Antes de começar, analise a estrutura atual do projeto e sua identidade visual. A nova página deve seguir o mesmo padrão estético das demais páginas, mantendo consistência de cores, tipografia, espaçamentos, cabeçalho e rodapé.

## 1. Estrutura da aplicação

Crie uma página com o título:

**Diagnosticador de Preparação Técnica e Alinhamento de Mercado**

Subtítulo:

"Um instrumento interativo de autopercepção técnica e socioemocional para auxiliar estudantes no planejamento de suas trajetórias em desenvolvimento de software."

Inclua uma nota metodológica em destaque discreto:

"Este instrumento possui caráter estritamente pedagógico e formativo. Não se trata de uma avaliação psicológica clínica nem de uma garantia de empregabilidade, mas sim de uma ferramenta de autoanálise sobre hábitos de estudo, autonomia técnica e expectativas profissionais."

## 2. Questionário interativo

Implemente as cinco questões abaixo, preservando integralmente seus enunciados, alternativas e pontuações.

Cada questão deverá apresentar três alternativas (A, B e C), com pontuações de 1, 2 e 3 pontos, respectivamente.

**Questão 1 — Planejamento de estudos**

Como você estrutura seu plano de estudos em termos de tempo e expectativas de colocação profissional?

- A) [1 ponto] Busco uma colocação rápida (até 6 meses), focando exclusivamente nas linguagens e frameworks solicitados em anúncios de vagas de emprego.
- B) [2 pontos] Planejo meu aprendizado em um horizonte de 1 a 2 anos, combinando cursos livres com a prática de projetos pessoais.
- C) [3 pontos] Compreendo que a formação em engenharia de software é contínua e de longo prazo, integrando conceitos fundamentais de ciência da computação e formação acadêmica ou autoral sólida.

**Questão 2 — Construção de portfólio**

Qual é o método predominante utilizado por você na construção do seu portfólio no GitHub?

- A) [1 ponto] Reproduzo o código demonstrado em videoaulas, tutoriais passo a passo ou projetos guiados fornecidos por cursos.
- B) [2 pontos] Faço adaptações visuais e insiro pequenas funcionalidades complementares em projetos existentes na internet.
- C) [3 pontos] Desenvolvo aplicações autorais do zero, desenhando a arquitetura, modelando o banco de dados e documentando as decisões técnicas no arquivo README.

**Questão 3 — Resolução de problemas**

Como você procede quando se depara com um erro de execução (bug) ou exceção complexa durante o desenvolvimento?

- A) [1 ponto] Copio a mensagem de erro diretamente em uma ferramenta de IA generativa e aplico a solução sugerida sem analisar a causa raiz do problema.
- B) [2 pontos] Pesquiso o texto de erro em buscadores ou fóruns técnicos e testo as respostas mais votadas até que a aplicação volte a funcionar.
- C) [3 pontos] Utilizo a ferramenta de depuração (debugger), analiso a pilha de execução (stack trace), consulto a documentação oficial e entendo o comportamento do código antes de corrigi-lo.

**Questão 4 — Inteligência Artificial no desenvolvimento**

De que maneira você integra assistentes de Inteligência Artificial Generativa na sua rotina de código?

- A) [1 ponto] Utilizo a IA para gerar blocos inteiros de código, aceitando as sugestões sem realizar verificações de segurança ou desempenho.
- B) [2 pontos] Emprego a IA como um substituto para buscas rápidas de sintaxe e exemplos de funções simples.
- C) [3 pontos] Atuo como um auditor crítico: utilizo a IA para agilizar tarefas repetitivas, mas reviso manualmente todos os trechos de código quanto a requisitos de acessibilidade, segurança e performance.

**Questão 5 — Saúde socioemocional**

Como você gerencia o equilíbrio entre o tempo de estudo técnico e a sua saúde socioemocional?

- A) [1 ponto] Estudo por longas jornadas sem pausas, sinto culpa constante ao me afastar das telas e me sinto desmotivado ao comparar meu progresso com o de outros profissionais em redes sociais.
- B) [2 pontos] Fico ansioso diante da ausência de respostas em seleções, mas tento manter uma rotina irregular de estudos.
- C) [3 pontos] Mantenho limites claros entre o aprendizado e o descanso, pratico o direito à desconexão e encaro as etapas de seleção como processos de aprendizado continuado.

## 3. Funcionamento e interatividade

Implemente os seguintes recursos:

- Cada questão deve permitir selecionar apenas uma alternativa.
- O usuário deve conseguir visualizar claramente qual alternativa está selecionada.
- Utilize botões ou cartões clicáveis para as alternativas.
- Implemente uma barra de progresso indicando quantas questões foram respondidas.
- Não permita finalizar o questionário enquanto houver questões sem resposta.
- Inclua um botão para finalizar e calcular o resultado.
- O cálculo deverá ser feito automaticamente pelo JavaScript.
- Exiba a pontuação total, de 5 a 15 pontos.
- Inclua um botão para reiniciar o questionário e alterar as respostas.

## 4. Sistema de resultados e recomendações

Após finalizar, apresente uma tela de resultado com o perfil correspondente à pontuação.

**De 5 a 8 pontos — Perfil em Fase Inicial / Risco de Dependência Operacional**

Diagnóstico:
Seus hábitos de estudo apresentam forte dependência de instruções prontas, tutoriais passivos e uso não auditado de IA. Existe uma vulnerabilidade a frustrações decorrentes de expectativas irrealistas quanto ao tempo de inserção profissional.

Recomendação:
Reorganize sua rotina de aprendizado priorizando os fundamentos da ciência da computação (lógica, algoritmos, estrutura de dados e redes). Evite copiar códigos de tutoriais e reduza a dependência imediata de IA generativa para resolver erros de sintaxe. Estabeleça metas de estudo realistas a médio e longo prazo.

**De 9 a 12 pontos — Perfil Intermediário / Em Consolidação Autônoma**

Diagnóstico:
Você demonstra compreensão dos desafios do setor e já busca autonomia na escrita de código, mas ainda oscila na aplicação rigorosa de práticas de engenharia e na depuração profunda de sistemas.

Recomendação:
Direcione seus esforços para a construção de projetos autorais no GitHub, documentando os desafios técnicos e as decisões de arquitetura. Aprofunde o hábito de leitura de documentações oficiais e adote uma postura analítica e crítica na revisão de sugestões geradas por assistentes de IA.

**De 13 a 15 pontos — Perfil Avançado / Maturidade Técnica e Socioemocional**

Diagnóstico:
Suas práticas de estudo alinham-se às demandas atuais do setor de desenvolvimento de software. Você demonstra autonomia técnica, pensamento crítico na auditoria de código e equilíbrio socioemocional na gestão da carreira.

Recomendação:
Mantenha a prática de copilotagem crítica e aprimore conhecimentos em arquitetura de sistemas, testes automatizados e segurança da informação. Considere colaborar com projetos de código aberto (open-source) e participar de comunidades de desenvolvimento para expandir sua rede de contatos profissionais de forma consistente.

## 5. Apresentação visual dos resultados

A tela final deverá apresentar:

- Pontuação total obtida.
- Perfil identificado.
- Diagnóstico correspondente.
- Recomendação pedagógica.
- Uma representação visual da pontuação, como uma barra de progresso ou indicador circular.
- Botão para refazer o teste.

Evite apresentar o resultado como uma classificação absoluta da capacidade profissional do estudante. Deixe claro que se trata de uma autoavaliação baseada nas respostas fornecidas.

## 6. Requisitos técnicos obrigatórios

Desenvolva a aplicação separando os arquivos:

- `teste.html` — estrutura e conteúdo da página.
- `teste.css` — estilização, responsividade, animações e estados visuais.
- `teste.js` — perguntas, alternativas, pontuação, validações, barra de progresso e lógica de resultados.

Não coloque todo o código em um único arquivo.

Utilize JavaScript Vanilla, sem frameworks como React, Vue ou Angular.

Organize o JavaScript de maneira simples e compreensível, utilizando funções com responsabilidades bem definidas.

Garanta:
- Funcionamento em navegadores modernos.
- Compatibilidade com computadores e celulares.
- Código organizado e identado.
- Ausência de erros na consola (F12).
- Boa acessibilidade, incluindo navegação por teclado e identificação das alternativas selecionadas.
- Separação correta entre estrutura, estilo e comportamento.

## 7. Diretrizes de qualidade

- Não invente questões ou altere as pontuações.
- Não resuma as alternativas fornecidas.
- Não utilize textos genéricos de preenchimento.
- Não altere o conteúdo das outras páginas do site.
- Não introduza dependências desnecessárias.
- Mantenha o visual coerente com o restante projeto.
- Priorize uma experiência intuitiva, fluida e profissional.

## 8. Entrega obrigatória

Implemente os arquivos diretamente no projeto e, ao terminar, apresente separadamente o conteúdo completo de:

1. `teste.html`
2. `teste.css`
3. `teste.js`

Explique brevemente a função de cada arquivo e como eles se comunicam.

Por fim, revise o funcionamento da aplicação, teste as três faixas de pontuação e verifique se todas as cinco perguntas precisam ser respondidas antes da finalização.

**Importante:** não entregue apenas uma demonstração ou protótipo. Quero a microaplicação completa, funcional e integrada ao site, pronta para publicação no GitHub Pages.


Resposta bruta da IA:

Com base em todas as diretrizes técnicas, acadêmicas e visuais estabelecidas para o projeto, desenvolvi os três arquivos que compõem a microaplicação interativa para a página teste.html (Diagnosticador de Preparação Técnica e Alinhamento de Mercado).

Abaixo, apresento o código completo de cada arquivo separado (teste.html, styles.css e app.js), seguido de uma breve explicação de como eles se comunicam e operam.

1. teste.html (Estrutura e Conteúdo)
HTML
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Instrumento interativo de autopercepção técnica e socioemocional para planejamento em desenvolvimento de software.">
        <title>Diagnosticador de Preparação Técnica | Bootcamps e Mercado Tech</title>
        
        <!-- Fontes e Bootstrap 5 -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        
        <!-- CSS Autoral Compartilhado / Específico -->
        <link href="css/styles.css" rel="stylesheet">
    </head>
    <body>
        <!-- Cabeçalho idêntico às demais páginas -->
        <header id="inicio">
            <nav class="navbar navbar-expand-lg bg-body-tertiary" aria-label="Navegação principal">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">Página Inicial</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link" href="index.html">Início</a></li>
                            <li class="nav-item"><a class="nav-link" href="sobre.html">Sobre</a></li>
                            <li class="nav-item"><a class="nav-link" href="dados.html">Dados</a></li>
                            <li class="nav-item"><a class="nav-link active" aria-current="page" href="teste.html">Teste</a></li>
                            <li class="nav-item"><a class="nav-link" href="fontes.html">Fontes</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container py-5 text-center">
                <h1 class="mb-3">Diagnosticador de Preparação Técnica e Alinhamento de Mercado</h1>
                <p class="lead text-muted mx-auto" style="max-width: 800px;">
                    Um instrumento interativo de autopercepção técnica e socioemocional para auxiliar estudantes no planejamento de suas trajetórias em desenvolvimento de software.
                </p>
            </div>
        </header>

        <main class="container my-4">
            <!-- Nota Metodológica -->
            <section class="row justify-content-center mb-5">
                <div class="col-lg-9">
                    <div class="alert alert-secondary border-0 shadow-sm p-4 text-muted small" role="note">
                        <strong>Nota Metodológica:</strong> Este instrumento possui caráter estritamente pedagógico e formativo. Não se trata de uma avaliação psicológica clínica nem de uma garantia de empregabilidade, mas sim de uma ferramenta de autoanálise sobre hábitos de estudo, autonomia técnica e expectativas profissionais.
                    </div>
                </div>
            </section>

            <!-- Seção do Questionário Dinâmico (Renderizado via JS) -->
            <section class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="card shadow-sm border-0 p-4 p-md-5">
                        
                        <!-- Barra de Progresso Visual -->
                        <div class="mb-4">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="fw-semibold text-secondary small" id="progresso-texto">Questão 1 de 5</span>
                                <span class="fw-semibold text-primary small" id="progresso-porcentagem">20%</span>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Progresso do questionário" aria-valuemin="0" aria-valuemax="100" style="height: 10px;">
                                <div class="progress-bar bg-primary transition-all" id="barra-progresso" style="width: 20%"></div>
                            </div>
                        </div>

                        <!-- Formulário / Container das Questões -->
                        <div id="quiz-container">
                            <!-- Inserido dinamicamente pelo app.js -->
                        </div>

                        <!-- Mensagem de Validação / Erro caso tente finalizar sem responder -->
                        <div id="alerta-validacao" class="alert alert-warning mt-3 d-none" role="alert">
                            Por favor, responda a todas as questões antes de finalizar o diagnóstico.
                        </div>

                        <!-- Controles de Navegação -->
                        <div class="d-flex justify-content-between align-items-center mt-5 pt-3 border-top">
                            <button type="button" id="btn-anterior" class="btn btn-outline-secondary px-4 disabled">Anterior</button>
                            <button type="button" id="btn-proximo" class="btn btn-primary px-4">Próxima</button>
                            <button type="button" id="btn-finalizar" class="btn btn-success px-4 d-none">Finalizar e Ver Diagnóstico</button>
                        </div>
                    </div>

                    <!-- Tela de Resultado (Oculta por padrão) -->
                    <div id="resultado-container" class="card shadow-sm border-0 p-4 p-md-5 mt-4 d-none">
                        <h2 class="text-center mb-4 text-primary">Resultado do Diagnosticador</h2>
                        
                        <div class="text-center mb-4">
                            <span class="badge bg-primary fs-5 px-4 py-2 mb-2" id="resultado-pontuacao">Pontuação Total: 0 / 15</span>
                            <h3 class="h4 fw-bold mt-2" id="resultado-perfil">Nome do Perfil</h3>
                        </div>

                        <div class="mb-4">
                            <h4 class="h5 text-secondary fw-semibold">Diagnóstico:</h4>
                            <p class="text-muted" id="resultado-diagnostico" style="text-align: justify;"></p>
                        </div>

                        <div class="mb-4">
                            <h4 class="h5 text-secondary fw-semibold">Recomendação Pedagógica:</h4>
                            <p class="text-muted" id="resultado-recomendacao" style="text-align: justify;"></p>
                        </div>

                        <div class="alert alert-light border small text-muted text-center mt-3">
                            <em>Observação: Este resultado é uma autoavaliação baseada estritamente nas respostas fornecidas e não constitui uma classificação absoluta da capacidade profissional.</em>
                        </div>

                        <div class="text-center mt-4">
                            <button type="button" id="btn-reiniciar" class="btn btn-outline-primary px-5">Refazer o Teste</button>
                        </div>
                    </div>

                </div>
            </section>
        </main>

        <!-- Rodapé Padrão -->
        <footer class="bg-dark text-light py-4 mt-5" id="rodape">
            <div class="container text-center">
                <p class="small mb-0">&copy; 2026 Bruno Gabriel dos Santos - Alex Sander de Jesus Carvalho</p>
            </div>
        </footer>

        <!-- Scripts Bootstrap e Comportamento Autoral -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <script src="js/app.js" defer></script>
    </body>
</html>
2. styles.css (Estilização e Responsividade)
CSS
/* Importação da Tipografia Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
    --fonte-principal: 'Inter', sans-serif;
    --cor-primaria: #0d6efd;
    --cor-fundo: #f8f9fa;
    --cor-superficie: #ffffff;
    --cor-texto: #212529;
    --transicao-suave: 0.3s ease-in-out;
}

body {
    font-family: var(--fonte-principal);
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    -webkit-font-smoothing: antialiased;
}

/* Estilização dos Cartões de Alternativas */
.alternativa-card {
    border: 2px solid #dee2e6;
    border-radius: 8px;
    padding: 1rem 1.25rem;
    cursor: pointer;
    transition: all var(--transicao-suave);
    background-color: var(--cor-superficie);
}

.alternativa-card:hover {
    border-color: var(--cor-primaria);
    background-color: rgba(13, 110, 253, 0.02);
}

.alternativa-card.selecionada {
    border-color: var(--cor-primaria);
    background-color: rgba(13, 110, 253, 0.08);
    box-shadow: 0 0 0 1px var(--cor-primaria);
}

/* Transições suaves para barras de progresso */
.transition-all {
    transition: width 0.4s ease-in-out;
}

/* Acessibilidade de Foco */
*:focus-visible {
    outline: 3px solid var(--cor-primaria);
    outline-offset: 3px;
    border-radius: 4px;
}
3. app.js (Lógica, Validações e Sistema de Resultados)
JavaScript
document.addEventListener('DOMContentLoaded', () => {
    
    // Base de Dados Oficial das 5 Questões (Enunciados, Alternativas e Pontuações Preservadas)
    const questoes = [
        {
            id: 1,
            titulo: "Questão 1 — Planejamento de estudos",
            enunciado: "Como você estrutura seu plano de estudos em termos de tempo e expectativas de colocação profissional?",
            alternativas: [
                { texto: "Busco uma colocação rápida (até 6 meses), focando exclusivamente nas linguagens e frameworks solicitados em anúncios de vagas de emprego.", pontos: 1 },
                { texto: "Planejo meu aprendizado em um horizonte de 1 a 2 anos, combinando cursos livres com a prática de projetos pessoais.", pontos: 2 },
                { texto: "Compreendo que a formação em engenharia de software é contínua e de longo prazo, integrando conceitos fundamentais de ciência da computação e formação acadêmica ou autoral sólida.", pontos: 3 }
            ]
        },
        {
            id: 2,
            titulo: "Questão 2 — Construção de portfólio",
            enunciado: "Qual é o método predominante utilizado por você na construção do seu portfólio no GitHub?",
            alternativas: [
                { texto: "Reproduzo o código demonstrado em videoaulas, tutoriais passo a passo ou projetos guiados fornecidos por cursos.", pontos: 1 },
                { texto: "Faço adaptações visuais e insiro pequenas funcionalidades complementares em projetos existentes na internet.", pontos: 2 },
                { texto: "Desenvolvo aplicações autorais do zero, desenhando a arquitetura, modelando o banco de dados e documentando as decisões técnicas no arquivo README.", pontos: 3 }
            ]
        },
        {
            id: 3,
            titulo: "Questão 3 — Resolução de problemas",
            enunciado: "Como você procede quando se depara com um erro de execução (bug) ou exceção complexa durante o desenvolvimento?",
            alternativas: [
                { texto: "Copio a mensagem de erro diretamente em uma ferramenta de IA generativa e aplico a solução sugerida sem analisar a causa raiz do problema.", pontos: 1 },
                { texto: "Pesquiso o texto de erro em buscadores ou fóruns técnicos e testo as respostas mais votadas até que a aplicação volte a funcionar.", pontos: 2 },
                { texto: "Utilizo a ferramenta de depuração (debugger), analiso a pilha de execução (stack trace), consulto a documentação oficial e entendo o comportamento do código antes de corrigi-lo.", pontos: 3 }
            ]
        },
        {
            id: 4,
            titulo: "Questão 4 — Inteligência Artificial no desenvolvimento",
            enunciado: "De que maneira você integra assistentes de Inteligência Artificial Generativa na sua rotina de código?",
            alternativas: [
                { texto: "Utilizo a IA para gerar blocos inteiros de código, aceitando as sugestões sem realizar verificações de segurança ou desempenho.", pontos: 1 },
                { texto: "Emprego a IA como um substituto para buscas rápidas de sintaxe e exemplos de funções simples.", pontos: 2 },
                { texto: "Atuo como um auditor crítico: utilizo a IA para agilizar tarefas repetitivas, mas reviso manualmente todos os trechos de código quanto a requisitos de acessibilidade, segurança e performance.", pontos: 3 }
            ]
        },
        {
            id: 5,
            titulo: "Questão 5 — Saúde socioemocional",
            enunciado: "Como você gerencia o equilíbrio entre o tempo de estudo técnico e a sua saúde socioemocional?",
            alternativas: [
                { texto: "Estudo por longas jornadas sem pausas, sinto culpa constante ao me afastar das telas e me sinto desmotivado ao comparar meu progresso com o de outros profissionais em redes sociais.", pontos: 1 },
                { texto: "Fico ansioso diante da ausência de respostas em seleções, mas tento manter uma rotina irregular de estudos.", points: 2 },
                { texto: "Mantenho limites claros entre o aprendizado e o descanso, pratico o direito à desconexão e encaro as etapas de seleção como processos de aprendizado continuado.", pontos: 3 }
            ]
        }
    ];

    let indiceAtual = 0;
    const respostasUsuario = {}; // Armazena a pontuação escolhida por índice de questão (ex: {0: 2, 1: 3, ...})

    // Elementos da DOM
    const quizContainer = document.getElementById('quiz-container');
    const resultadoContainer = document.getElementById('resultado-container');
    const btnAnterior = document.getElementById('btn-anterior');
    const btnProximo = document.getElementById('btn-proximo');
    const btnFinalizar = document.getElementById('btn-finalizar');
    const btnReiniciar = document.getElementById('btn-reiniciar');
    const barraProgresso = document.getElementById('barra-progresso');
    const progressoTexto = document.getElementById('progresso-texto');
    const progressoPorcentagem = document.getElementById('progresso-porcentagem');
    const alertaValidacao = document.getElementById('alerta-validacao');

    // Validação de existência dos elementos na página
    if (!quizContainer) return;

    function renderizarQuestao(index) {
        const questao = questoes[index];
        const respostaSelecionada = respostasUsuario[index];

        let html = `
            <div class="questao-wrapper">
                <span class="badge text-bg-primary mb-2">${questao.titulo}</span>
                <h3 class="h5 fw-bold mb-4">${questao.enunciado}</h3>
                <div class="d-flex flex-column gap-3" role="radiogroup" aria-label="${questao.titulo}">
        `;

        questao.alternativas.forEach((alt, altIndex) => {
            const letra = String.fromCharCode(65 + altIndex); // A, B, C
            const isChecked = respostaSelecionada === alt.pontos ? 'selecionada' : '';
            const ariaChecked = respostaSelecionada === alt.pontos ? 'true' : 'false';

            html += `
                <div class="alternativa-card ${isChecked}" 
                     role="radio" 
                     aria-checked="${ariaChecked}" 
                     tabindex="0" 
                     data-pontos="${alt.pontos}" 
                     data-index="${altIndex}">
                    <div class="form-check m-0 pointer-event-none">
                        <input class="form-check-input" type="radio" name="questao_${index}" id="q${index}_a${altIndex}" value="${alt.pontos}" ${respostaSelecionada === alt.pontos ? 'checked' : ''}>
                        <label class="form-check-label text-dark fw-medium w-100 ps-2 cursor-pointer" for="q${index}_a${altIndex}">
                            <strong>${letra})</strong> ${alt.texto}
                        </label>
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
        quizContainer.innerHTML = html;

        atualizarProgresso();
        configurarEventosAlternativas();
        atualizarBotoesNavegacao();
        alertaValidacao.classList.add('d-none');
    }

    function configurarEventosAlternativas() {
        const cards = quizContainer.querySelectorAll('.alternativa-card');
        cards.forEach(card => {
            // Clique do mouse
            card.addEventListener('click', () => {
                selecionarAlternativa(card);
            });
            // Acessibilidade por teclado (Enter ou Espaço)
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selecionarAlternativa(card);
                }
            });
        });
    }

    function selecionarAlternativa(cardSelecionado) {
        const pontos = parseInt(cardSelecionado.getAttribute('data-pontos'));
        
        // Remove seleção visual dos irmãos
        const cardsIrmaos = quizContainer.querySelectorAll('.alternativa-card');
        cardsIrmaos.forEach(c => {
            c.classList.remove('selecionada');
            c.setAttribute('aria-checked', 'false');
            const radio = c.querySelector('input[type="radio"]');
            if (radio) radio.checked = false;
        });

        // Adiciona seleção ao card ativo
        cardSelecionado.classList.add('selecionada');
        cardSelecionado.setAttribute('aria-checked', 'true');
        const radioAtual = cardSelecionado.querySelector('input[type="radio"]');
        if (radioAtual) radioAtual.checked = true;

        // Salva resposta do usuário
        respostasUsuario[indiceAtual] = pontos;
        alertaValidacao.classList.add('d-none');
    }

    function atualizarProgresso() {
        const total = questoes.length;
        const atual = indiceAtual + 1;
        const porcentagem = Math.round((atual / total) * 100);

        progressoTexto.textContent = `Questão ${atual} de ${total}`;
        progressoPorcentagem.textContent = `${porcentagem}%`;
        barraProgresso.style.width = `${porcentagem}%`;
        barraProgresso.setAttribute('aria-valuenow', porcentagem);
    }

    function atualizarBotoesNavegacao() {
        // Botão Anterior
        if (indiceAtual === 0) {
            btnAnterior.classList.add('disabled');
        } else {
            btnAnterior.classList.remove('disabled');
        }

        // Botões Próximo / Finalizar
        if (indiceAtual === questoes.length - 1) {
            btnProximo.classList.add('d-none');
            btnFinalizar.classList.remove('d-none');
        } else {
            btnProximo.classList.remove('d-none');
            btnFinalizar.classList.add('d-none');
        }
    }

    // Navegação Avançar
    btnProximo.addEventListener('click', () => {
        if (respostasUsuario[indiceAtual] === undefined) {
            alertaValidacao.textContent = "Por favor, selecione uma alternativa antes de prosseguir.";
            alertaValidacao.classList.remove('d-none');
            return;
        }
        if (indiceAtual < questoes.length - 1) {
            indiceAtual++;
            renderizarQuestao(indiceAtual);
        }
    });

    // Navegação Voltar
    btnAnterior.addEventListener('click', () => {
        if (indiceAtual > 0) {
            indiceAtual--;
            renderizarQuestao(indiceAtual);
        }
    });

    // Finalizar e Calcular Resultado
    btnFinalizar.addEventListener('click', () => {
        // Verifica se todas as 5 questões foram respondidas
        if (Object.keys(respostasUsuario).length < questoes.length) {
            alertaValidacao.textContent = "Existem questões sem resposta. Por favor, responda a todas as perguntas antes de finalizar.";
            alertaValidacao.classList.remove('d-none');
            return;
        }

        calcularEExibirResultado();
    });

    function calcularEExibirResultado() {
        // Soma os pontos
        let pontuacaoTotal = 0;
        for (let chave in respostasUsuario) {
            pontuacaoTotal += respostasUsuario[chave];
        }

        // Esconde o quiz e mostra o resultado
        quizContainer.parentElement.querySelector('.mb-4').classList.add('d-none'); // Esconde barra de progresso
        quizContainer.classList.add('d-none');
        btnAnterior.classList.add('d-none');
        btnFinalizar.classList.add('d-none');
        alertaValidacao.classList.add('d-none');

        // Preenche os dados da tela de resultado
        const lblPontuacao = document.getElementById('resultado-pontuacao');
        const lblPerfil = document.getElementById('resultado-perfil');
        const lblDiagnostico = document.getElementById('resultado-diagnostico');
        const lblRecomendacao = document.getElementById('resultado-recomendacao');

        lblPontuacao.textContent = `Pontuação Total: ${pontuacaoTotal} de 15 pontos`;

        if (pontuacaoTotal >= 5 && pontuacaoTotal <= 8) {
            lblPerfil.textContent = "Perfil em Fase Inicial / Risco de Dependência Operacional";
            lblDiagnostico.textContent = "Seus hábitos de estudo apresentam forte dependência de instruções prontas, tutoriais passivos e uso não auditado de IA. Existe uma vulnerabilidade a frustrações decorrentes de expectativas irrealistas quanto ao tempo de inserção profissional.";
            lblRecomendacao.textContent = "Reorganize sua rotina de aprendizado priorizando os fundamentos da ciência da computação (lógica, algoritmos, estrutura de dados e redes). Evite copiar códigos de tutoriais e reduza a dependência imediata de IA generativa para resolver erros de sintaxe. Estabeleça metas de estudo realistas a médio e longo prazo.";
        } else if (pontuacaoTotal >= 9 && pontuacaoTotal <= 12) {
            lblPerfil.textContent = "Perfil Intermediário / Em Consolidação Autônoma";
            lblDiagnostico.textContent = "Você demonstra compreensão dos desafios do setor e já busca autonomia na escrita de código, mas ainda oscila na aplicação rigorosa de práticas de engenharia e na depuração profunda de sistemas.";
            lblRecomendacao.textContent = "Direcione seus esforços para a construção de projetos autorais no GitHub, documentando os desafios técnicos e as decisões de arquitetura. Aprofunde o hábito de leitura de documentações oficiais e adote uma postura analítica e crítica na revisão de sugestões geradas por assistentes de IA.";
        } else {
            lblPerfil.textContent = "Perfil Avançado / Maturidade Técnica e Socioemocional";
            lblDiagnostico.textContent = "Suas práticas de estudo alinham-se às demandas atuais do setor de desenvolvimento de software. Você demonstra autonomia técnica, pensamento crítico na auditoria de código e equilíbrio socioemocional na gestão da carreira.";
            lblRecomendacao.textContent = "Mantenha a prática de copilotagem crítica e aprimore conhecimentos em arquitetura de sistemas, testes automatizados e segurança da informação. Considere colaborar com projetos de código aberto (open-source) e participar de comunidades de desenvolvimento para expandir sua rede de contatos profissionais de forma consistente.";
        }

        resultadoContainer.classList.remove('d-none');
        resultadoContainer.scrollIntoView({ behavior: 'smooth' });
    }

    // Reiniciar Teste
    btnReiniciar.addEventListener('click', () => {
        indiceAtual = 0;
        for (let prop in respostasUsuario) {
            delete respostasUsuario[prop];
        }
        resultadoContainer.classList.add('d-none');
        quizContainer.classList.remove('d-none');
        quizContainer.parentElement.querySelector('.mb-4').classList.remove('d-none');
        renderizarQuestao(indiceAtual);
    });

    // Inicialização
    renderizarQuestao(indiceAtual);
});
Comunicação entre os Arquivos
teste.html: Fornece o esqueleto estático da página, incorporando o layout padrão do site (navbar, títulos e rodapé), a nota metodológica e os containers vazios (#quiz-container e #resultado-container) onde a aplicação injetará os elementos dinamicamente. Ele importa o Bootstrap via CDN para manter a identidade visual corporativa, o arquivo styles.css para regras visuais personalizadas e o app.js (com o atributo defer) para gerenciar o comportamento.

styles.css: Responsável pelo design system visual da microaplicação. Ele estiliza os cartões de alternativas (.alternativa-card), adicionando transições suaves, estados interativos (.selecionada) e suporte completo a foco de acessibilidade (:focus-visible), mantendo a consistência cromática com o restante do portal.

app.js: Centraliza toda a regra de negócio e lógica interativa em JavaScript Vanilla puro. O script armazena o banco de dados oficial das 5 questões, controla o índice da questão ativa, gerencia a barra de progresso dinâmica, valida se todas as respostas foram preenchidas antes de permitir a conclusão, calcula o escore final (de 5 a 15 pontos) e renderiza de forma automatizada o perfil correspondente junto com o diagnóstico e recomendações pedagógicas.


Diagnóstico:

1 erro de digitação na Questão 5, alternativa B: o código usa points: 2 em vez de pontos: 2. A soma vira NaN, e o resultado cai sempre no perfil "Avançado". A IA não testou as três faixas, apesar de o prompt pedir.
2 Nomes de arquivo ignorados: o prompt pedia teste.css e teste.js, mas a IA entregou styles.css e app.js, que sobrescreveriam os arquivos do site.
3 Links do menu quebrados: apontavam para dados.html e fontes.html, que não existem (o correto é fonte.html). Isso gera erro 404.
4 Classes inexistentes no Bootstrrp: pointer-event-none, cursor-pointer e transition-all.
5 Cor fixa que quebra o modo escuro: text-dark na label deixa o texto ilegível no tema escuro.
6 Acessibilidade duplicada: cada card tem role="radio" e tabindex="0", com um <input type="radio"> nativo dentro. O teclado passa duas vezes e o leitor de tela repete a leitura.
7 Barra de progresso incoerente: o prompt pedia "questões respondidas", mas a barra mostra a questão atual.
8 Requisito não entregue: a representação visual da pontuação no resultado não foi gerada.
9 Código frágil: querySelector('.mb-4') para achar a barra, atualizarBotoesNavegacao()` chamada duas vezes e estilo inline.


Refatoração:
Corrigimos points para pontos na Questão 5, restaurando a soma correta.
Mantivemos os arquivos compartilhados do site (styles.css e app.js) e integramos o quiz neles, protegido por if (quizContainer), para não sobrescrever o resto.
Ajustamos os links do menu para as páginas reais (fonte.html, contato.html).
Removemos text-dark e passamos a usar var(--bs-body-color) no CSS, para o card funcionar nos dois temas.
Trocamos a barra do Bootstrap por um elemento progress, atualzado pela propriedade value.

Aprendizado: a IA entrega código com aparência de pronto, mas com erro de digitação e classes inventadas. Só o teste manual (as três faixas de pontuação e o console) encontra isso.

Ficha 2: Pesquisa e textos do site

Ferramenta: Gemini Pro 3.1

Prompt:

Faça uma pesquisa aprofundada sobre o tema *“Bootcamps de programação e a promessa de mudar de carreira em 6 meses: a realidade do mercado júnior de tecnologia”*, utilizando todo o conteúdo apresentado como base.

- Utilize fontes confiáveis e verificáveis, como Brasscom, IBGE, CAGED, LinkedIn, Stack Overflow, pesquisas acadêmicas e reportagens de veículos reconhecidos.
- Não invente estatísticas, pesquisas, porcentagens, relatórios ou referências bibliográficas. Se algum dado não existir, informe isso claramente.
- Investigue principalmente o mercado brasileiro entre 2020 e 2026, incluindo vagas júnior, layoffs, bootcamps, exigências das empresas e influência da IA generativa.
- Aprofunde os impactos financeiros e psicológicos nos estudantes, incluindo ansiedade, endividamento, síndrome do impostor e frustração profissional.
- Desenvolva textos específicos para cada seção das cinco páginas do site, evitando repetições, argumentos superficiais e explicações genéricas.
- Apresente dados concretos, exemplos reais, comparações históricas e análises críticas, sempre contextualizando o significado das informações.
- Diferencie fatos comprovados, estimativas e opiniões. Não transforme hipóteses em verdades.
- Ao final, forneça as referências completas, com links diretos, datas de publicação e indicação de quais informações cada fonte sustenta.
- Preserve a estrutura original das cinco páginas (Index, Sobre, Dados, Teste e Fontes), aprimorando o conteúdo sem descaracterizar a proposta central do projeto.
- Na página de dados, substitua números sem comprovação por estatísticas reais e documentadas. Não crie médias de candidatos por vaga ou percentuais de saúde mental sem pesquisas que sustentem esses valores.
- Na página do teste, mantenha a proposta interativa, mas revise a fundamentação dos diagnósticos e das recomendações para evitar conclusões psicológicas ou profissionais sem respaldo.

*Objetivo:* produzir conteúdo acadêmico de alto nível, com linguagem formal, elaborada e tecnicamente rigorosa. Desenvolva análises aprofundadas, utilizando terminologia especializada, conceitos econômicos, sociológicos, tecnológicos e psicológicos quando pertinentes. Os textos devem apresentar argumentação consistente, fundamentação teórica, contextualização histórica e interpretação crítica dos dados. Evite explicações superficiais, conclusões óbvias, frases genéricas e simplificações excessivas. Priorize densidade informativa, precisão conceitual e sofisticação textual, mantendo coesão entre as seções e fundamentando as afirmações em evidências verificáveis.

Resposta bruta da IA:

Conteúdo Textual Estruturado para as 5 Páginas do SitePÁGINA 1: index.html — Página Inicial (Home)Header / Hero SectionTítulo Principal: A Promessa da Formação Acelerada e o Realismo do Mercado Tech JúniorSubtítulo: Uma investigação crítica sobre o ciclo de expansão dos bootcamps de programação, a mercantilização da formação técnica e o impacto socioemocional da saturação na entrada da carreira de desenvolvimento de software.   Seção 1: Resumo Executivo — O Ilusionismo da Formação em 6 MesesEntre os anos de 2020 e 2022, o ecossistema tecnológico brasileiro viveu um ciclo de expansão atípico. A necessidade de digitalização imediata das empresas, aliada à liquidez de capital de risco, alimentou uma narrativa de escassez irrestrita de mão de obra. Nesse ambiente, empresas de educação livre (edtechs) comercializaram formações de curta duração sob a premissa de transformar profissionais sem bagagem prévia em desenvolvedores prontos para o mercado em prazos de 6 meses, prometendo salários iniciais atrativos.Contudo, a partir de 2023, o cenário macroeconômico global passou por uma reestruturação rigorosa. O aumento do custo do capital reduziu os aportes financeiros em empresas de tecnologia, resultando em cortes de contingente e na desaceleração das contratações formais de iniciantes. O modelo de ensino intensivo, pautado na replicação rápida de sintaxe e no uso de frameworks sem o devido aprofundamento conceitual, encontrou um mercado focado em eficiência. A contradição entre a promessa publicitária de retorno rápido e a exigência por maturidade técnica consolidou um gargalo estrutural na porta de entrada da carreira de TI.   Seção 2: Os Três Pilares da Crise de Entrada1. Mercantilização do Ensino e Promessa ComercialA conversão da formação em engenharia de software em produto de consumo imediato. Cursos intensivos priorizaram a memorização mecânica de comandos e a reprodução de tutoriais genéricos em detrimento do ensino de lógica de programação, estrutura de dados, arquitetura de sistemas e redes computacionais.   2. Seleção Algorítmica e Saturação da Base JúniorA proliferação de milhares de egressos com portfólios idênticos sobrecarregou os sistemas automatizados de triagem de currículos (Applicant Tracking Systems — ATS). Essa saturação fez com que processos seletivos para vagas júnior passassem a atrair centenas de candidatos por posto de trabalho, levando as empresas a utilizarem filtros eliminatórios rígidos e impessoais.   3. Desgaste Socioemocional e Vulnerabilidade FinanceiraO impacto psicológico enfrentado por estudantes e transicionantes de carreira que comprometeram suas reservas financeiras ou assumiram dívidas contratuais de longo prazo. A ausência de retornos nos processos seletivos desencadeia quadros severos de ansiedade de performance, sensação de incapacidade e Síndrome do Impostor.   Seção 3: A Assimetria do Funil de ContrataçãoA afirmação de que "o setor de tecnologia possui um déficit estrutural de centenas de milhares de profissionais" exige uma interpretação analítica refinada. Os relatórios setoriais da Associação das Empresas de Tecnologia da Informação e Comunicação (Brasscom) indicam uma demanda contínua por talentos em TIC no Brasil; contudo, essa demanda não é homogênea.A escassez real de mão de obra concentra-se em posições sêniores, especialistas em segurança cibernética, engenharia de dados e arquitetura de nuvem. Por outro lado, a base da pirâmide profissional foi sobrecarregada por formações aceleradas que não preparam os estudantes para as exigências técnicas atuaise. Cria-se, assim, um funil assimétrico: sobram candidatos para vagas de nível operacional e faltam profissionais qualificados para posições de alta complexidade.   PÁGINA 2: sobre.html — Análise Crítica e Contextualização TeóricaHeader / IntroduçãoTítulo Principal: Do Entusiasmo à Frustração: Uma Radiografia Econômica e ComportamentalSubtítulo: A articulação entre as mutações macroeconômicas no setor de software, o avanço das ferramentas de automação inteligente e os desafios socioemocionais enfrentados pelos novos profissionais.   Seção 1: Eixo A — As Mutações Estruturais no Mercado de TI (2020–2026)Retração de Capital de Risco e Mudança de Paradigma OperacionalA alteração nas políticas monetárias internacionais a partir de 2022 encerrou a era do "crescimento a qualquer custo" no setor de tecnologia. Com o aumento das taxas de juros, os fundos de Venture Capital passaram a exigir lucratividade e disciplina financeira das startups. Esse movimento culminou nos movimentos de demissão em massa (layoffs) que afetaram milhares de trabalhadores em todo o mundo.No Brasil, os cortes operacionais atingiram grandes empresas de tecnologia, liberando no mercado profissionais com experiência prévia que passaram a concorrer por vagas de menor senioridade, pressionando ainda mais o segmento júnior.   O Avanço da Pejotização e da Informalidade no Setor de TICDados dos relatórios setoriais da Brasscom sobre o mercado de trabalho em TIC indicam que, no período entre 2022 e 2025, o crescimento de contratações sob regimes de Microempreendedor Individual (MEI), contratos de prestação de serviços (PJ) e postos informais superou a expansão dos empregos formais regidos pela CLT.Para o desenvolvedor júnior, essa tendência implica maior instabilidade contratual, ausência de direitos trabalhistas tradicionais e transferência dos custos de infraestrutura e aperfeiçoamento contínuo para o próprio trabalhador, intensificando a precarização das relações de trabalho no início da carreira.A Reconfiguração do Perfil Profissional Frente às LLMsA rápida integração de modelos de linguagem de grande porte (LLMs) e assistentes de copilotagem no fluxo de desenvolvimento alterou os requisitos de entrada para profissionais iniciantes. Tarefas repetitivas de escrita de código inicial (boilerplate), geração de rotas simples e confecção de rotinas básicas de testes passaram a ser executadas de forma automatizada.   Consequentemente, o papel do desenvolvedor júnior deslocou-se da mera digitação de sintaxe para a auditoria crítica de código, verificação de requisitos de segurança, análise de complexidade e prevenção de bugs. As formações que continuam focadas em ensino mecânico tornaram-se incompatíveis com essa nova realidade tecnológica.   A Economia dos Contratos de Renda Compartilhada (ISA)Parte significativa do modelo de negócios dos bootcamps sustentou-se no Contrato de Renda Compartilhada (Income Share Agreement — ISA). Por meio desse instrumento financeiro, o estudante realiza a formação sem pagamento imediato, comprometendo-se a repassar um percentual fixo de seus ganhos futuros (geralmente entre 15% e 20%) durante um período determinado, até atingir um teto quitatório.Com a saturação do mercado e a estagnação das contratações de nível júnior, muitos egressos viram-se impossibilitados de obter uma colocação formal na área dentro dos prazos previstos, permanecendo vinculados a obrigações contratuais, pendências de auditoria de renda e insegurança financeira.Seção 2: Eixo B — Dimensões Socioemocionais e Psicológicas da Geração AtualA Síndrome do Impostor Mediada pela AutomaçãoA interação diária com assistentes de IA generativa apresenta desafios psicológicos para os desenvolvedores em formação. Ao observar a velocidade com que os modelos de IA geram blocos complexos de código, o iniciante pode ter sua percepção de autoeficácia comprometida. Surge a dúvida sobre o próprio valor profissional em um mercado onde a geração de código é instantânea, alimentando um sentimento recorrente de inaptidão técnica.   Ansiedade de Produtividade e o Fenômeno "Always-On"Diante da ausência de retornos em candidaturas de emprego, muitos estudantes recorrem ao acúmulo compulsivo de certificados de cursos livres na tentativa de sinalizar competência. Essa dinâmica é agravada pela exposição contínua às redes sociais corporativas, onde o sucesso profissional alheio é enfatizado. O resultado é a fragmentação da atenção, a exaustão pelo excesso de tempo de tela e a ocorrência de episódios de Burnout antes mesmo da inserção no mercado de trabalho.   O Risco do "Analfabetismo Funcional em Código"Sob a perspectiva pedagógica, o uso passivo de ferramentas de IA generativa e a dependência de tutoriais prontos podem conduzir ao analfabetismo funcional em código. O estudante consegue publicar uma aplicação seguindo instruções passo a passo, mas demonstra incapacidade de raciocinar sobre a lógica subjacente, depurar erros de execução ou adaptar a arquitetura a novos requisitos funcionais.     ┌─────────────────────────────────────────────────────────────────┐
  │              CICLO DE REPETIÇÃO DO ANALFABETISMO FUNCIONAL      │
  └─────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
        ┌─────────────────────────────────────────────────────┐
        │  Dependência Passiva de Tutoriais & Prompts de IA   │
        └─────────────────────────────────────────────────────┘
                                   │
                                   ▼
        ┌─────────────────────────────────────────────────────┐
        │    Incapacidade de Depurar & Compreender Lógica     │
        └─────────────────────────────────────────────────────┘
                                   │
                                   ▼
        ┌─────────────────────────────────────────────────────┐
        │ Rejeição em Testes Técnicos & Insegurança Emocional │
        └─────────────────────────────────────────────────────┘
                                   │
                                   ▼
        ┌─────────────────────────────────────────────────────┐
        │   Acúmulo Compulsivo de Novos Cursos Acelerados     │
        └─────────────────────────────────────────────────────┘
                                   │
                                   └──────────────────────────┘
Governança Educacional e Responsabilidade SocialA transição de carreira envolve investimentos de economias pessoais, reorganização familiar e projetos de vida. Instituições de ensino livre e edtechs possuem a obrigação ética de apresentar dados transparentes sobre suas taxas de empregabilidade, evitando a divulgação de métricas imprecisas ou promessas irrealistas de rápida colocação profissional em cenários de retração de mercado.PÁGINA 3: dados.html — Métricas e Visualização de Dados EmpíricosHeader / IntroduçãoTítulo Principal: Diagnóstico Estatístico e Indicadores do Mercado de TISubtítulo: Apresentação e interpretação de dados oficiais obtidos junto à Brasscom, INEP, CAGED e Stack Overflow sobre contratações, perfil de vagas e adoção de tecnologia.   Seção 1: Indicadores Oficiais do Mercado de Trabalho em TIC no BrasilProjeção de Demanda Setorial vs. Formação Acadêmica (BRASSCOM / INEP)Demanda Histórica Projetada (Brasscom 2021–2025): O estudo Demanda de Talentos em TIC e Estratégia ΣTCEM da Brasscom estimou uma demanda total de 797 mil novos profissionais no setor de tecnologia entre 2021 e 2025, representando uma média anual de 159 mil talentos.Oferta de Formados no Ensino Superior (INEP 2023): Segundo dados do Censo da Educação Superior do INEP (divulgados no Relatório de Perspectivas da Brasscom em 2025), o Brasil registrou 89.696 concluintes em cursos de graduação da área de TIC em 2023, demonstrando que o volume de formados pelo sistema de ensino formal cobria apenas cerca de 56% da demanda total anual estimada de TIC no país.Formações Continuadas e Cursos Livres: O mesmo relatório apontou que o total de certificados emitidos em cursos de formação continuada em TIC saltou para 169.797 em 2023. Notavelmente, 80,4% desses alunos concluíram seus cursos na modalidade EAD, refletindo o avanço das formações aceleradas online no país.Composição Contratual e Crescimento do Trabalho Informal/MEI (BRASSCOM / CAGED)Transformação no Perfil de Ocupações (2022–2025): De acordo com os levantamentos da Brasscom baseados nos dados do Novo CAGED e RAIS, o mercado de TIC no Brasil expandiu seu contingente total de profissionais, atingindo mais de 940 mil ocupações formais CLT em 2024.Prevalência de MEIs e Informais: No entanto, entre 2023 e 2025, do acréscimo total de 111,1 mil profissionais que ingressaram no macrossetor de TIC, 55,6% foram contratados via registros de Microempreendedor Individual (MEI) ou modalidades informais, enquanto apenas 44,4% corresponderam a empregos com carteira assinada (CLT).Estimativas para Vagas Formais: Para o ano de 2026, projeções da Brasscom indicam um incremento moderado de aproximadamente 33 mil novas vagas formais CLT no setor de TIC, evidenciando a desaceleração na criação de postos de trabalho tradicionais de entrada.Seção 2: Pesquisa Global de Desenvolvedores — Adoção de IA e Formação (Stack Overflow 2023–2025)Hábitos de Aprendizado da Comunidade Global (Stack Overflow 2023)Conforme dados do Stack Overflow Developer Survey 2023 (com mais de 86.000 respondentes mundiais):Cursos Online e Certificações: 51,98% dos desenvolvedores profissionais e 84,15% daqueles que estão aprendendo a programar utilizam cursos online ou certificações como fonte primária de aprendizado.Educação Formal (Ensino Superior): Apesar do crescimento dos cursos online, 46,85% dos desenvolvedores profissionais pesquisados possuem grau de Bacharelado e 23,03% possuem Mestrado, demonstrando que a educação formal universitária continua sendo uma credencial predominante entre profissionais contratados.Adoção de Ferramentas de IA Generativa e Queda na Confiança (Stack Overflow 2024–2025)Taxa de Uso de Ferramentas de IA: No levantamento de 2024–2025, mais de 76% dos desenvolvedores relataram utilizar ou planejar utilizar ferramentas de IA generativa (como GitHub Copilot e ChatGPT) em suas rotinas de trabalho.Nível de Confiança nas Respostas de IA: Contudo, o percentual de desenvolvedores que declaram confiar plenamente na precisão do código gerado por IA caiu para aproximadamente 42-43%. A maioria dos profissionais aponta a ocorrência de alucinações de sintaxe, vulnerabilidades de segurança e ausência de contexto de arquitetura como motivos centrais para a necessidade de verificação humana contínua.Seção 3: Quadro de Indicadores ConsolidadosIndicador AnalisadoDado / Estatística RealFonte PrimáriaContexto e Impacto no Mercado JúniorDemanda Média Anual de Talentos em TIC159.000 profissionais/ano (2021–2025)BRASSCOM (2021)Indicação de demanda concentrada em perfis especializados e sêniores.   Graduados em Cursos Superiores de TIC89.696 formandos em 2023INEP / Censo SuperiorCrescimento da formação superior, cobrindo parcialmente a demanda formal.Certificações em Cursos Continuados/Online169.797 certificados em 2023 (80,4% EAD)BRASSCOM / SETEC-MECExpansão das formações livres e bootcamps de curta duração.Proporção de Entradas não-CLT (2023–2025)55,6% via MEI / Trabalho InformalBRASSCOM / Novo CAGEDPrevalência da pejotização na contratação de profissionais iniciantes.Projeção de Novas Vagas CLT formais para 2026~33.000 novos postos formaisBRASSCOM (2026)Desaceleração na expansão de novos empregos celetistas tradicionais.Uso Profissional de Ferramentas de IA> 76% de adoção entre desenvolvedoresStack Overflow (2024/2025)Automação de tarefas operacionais, elevando a exigência técnica de entrada.   PÁGINA 4: teste.html — Microaplicação Interativa (Questionário)Header / IntroduçãoTítulo Principal: Diagnosticador de Preparação Técnica e Alinhamento de MercadoSubtítulo: Um instrumento interativo de autopercepção técnica e socioemocional para auxiliar estudantes no planejamento de suas trajetórias em desenvolvimento de software.   Nota de Isenção e Esclarecimento Metodológico: Este instrumento possui caráter estritamente pedagógico e formativo. Não se trata de uma avaliação psicológica clínica nem de uma garantia de empregabilidade, mas sim de uma ferramenta de autoanálise sobre hábitos de estudo, autonomia técnica e expectativas profissionais.   Formulário de Autoavaliação (5 Questões)Questão 1: Como você estrutura seu plano de estudos em termos de tempo e expectativas de colocação profissional?A) [1 Ponto] Busco uma colocação rápida (até 6 meses), focando exclusivamente nas linguagens e frameworks solicitados em anúncios de vagas de emprego.   B) [2 Pontos] Planejo meu aprendizado em um horizonte de 1 a 2 anos, combinando cursos livres com a prática de projetos pessoais.C) [3 Pontos] Compreendo que a formação em engenharia de software é contínua e de longo prazo, integrando conceitos fundamentais de ciência da computação e formação acadêmica ou autoral sólida.   Questão 2: Qual é o método predominante utilizado por você na construção do seu portfólio no GitHub?A) [1 Ponto] Reproduzo o código demonstrado em videoaulas, tutoriais passo a passo ou projetos guiados fornecidos por cursos.   B) [2 Pontos] Faço adaptações visuais e insiro pequenas funcionalidades complementares em projetos existentes na internet.C) [3 Pontos] Desenvolvo aplicações autorais do zero, desenhando a arquitetura, modelando o banco de dados e documentando as decisões técnicas no arquivo README.   Questão 3: Como você procede quando se depara com um erro de execução (bug) ou exceção complexa durante o desenvolvimento?A) [1 Ponto] Copio a mensagem de erro diretamente em uma ferramenta de IA generativa e aplico a solução sugerida sem analisar a causa raiz do problema.   B) [2 Pontos] Pesquiso o texto de erro em buscadores ou fóruns técnicos e testo as respostas mais votadas até que a aplicação volte a funcionar.C) [3 Pontos] Utilizo a ferramenta de depuração (debugger), analiso a pilha de execução (stack trace), consulto a documentação oficial e entendo o comportamento do código antes de corrigi-lo.   Questão 4: De que maneira você integra assistentes de Inteligência Artificial Generativa na sua rotina de código?A) [1 Ponto] Utilizo a IA para gerar blocos inteiros de código, aceitando as sugestões sem realizar verificações de segurança ou desempenho.   B) [2 Pontos] Emprego a IA como um substituto para buscas rápidas de sintaxe e exemplos de funções simples.C) [3 Pontos] Atuo como um auditor crítico: utilizo a IA para agilizar tarefas repetitivas, mas reviso manualmente todos os trechos de código quanto a requisitos de acessibilidade, segurança e performance.   Questão 5: Como você gerencia o equilíbrio entre o tempo de estudo técnico e a sua saúde socioemocional?A) [1 Ponto] Estudo por longas jornadas sem pausas, sinto culpa constante ao me afastar das telas e me sinto desmotivado ao comparar meu progresso com o de outros profissionais em redes sociais.   B) [2 Pontos] Fico ansioso diante da ausência de respostas em seleções, mas tento manter uma rotina irregular de estudos.C) [3 Pontos] Mantenho limites claros entre o aprendizado e o descanso, pratico o direito à desconexão e encaro as etapas de seleção como processos de aprendizado continuado[cite: 3].Escala de Valoração e Recomendações PedagógicasPontuação: 5 a 8 Pontos — Perfil em Fase Inicial / Risco de Dependência OperacionalDiagnóstico de Perfil: Seus hábitos de estudo apresentam forte dependência de instruções prontas, tutoriais passivos e uso não auditado de IA. Existe uma vulnerabilidade a frustrações decorrentes de expectativas irrealistas quanto ao tempo de inserção profissional.   Recomendação Pedagógica: Reorganize sua rotina de aprendizado priorizando os fundamentos da ciência da computação (lógica, algoritmos, estrutura de dados e redes). Evite copiar códigos de tutoriais e reduza a dependência imediata de IA generativa para resolver erros de sintaxe. Estabeleça metas de estudo realistas a médio e longo prazo.   Pontuação: 9 a 12 Pontos — Perfil Intermediário / Em Consolidação AutônomaDiagnóstico de Perfil: Você demonstra compreensão dos desafios do setor e já busca autonomia na escrita de código, mas ainda oscila na aplicação rigorosa de práticas de engenharia e na depuração profunda de sistemas.   Recomendação Pedagógica: Direcione seus esforços para a construção de projetos autorais no GitHub, documentando os desafios técnicos e as decisões de arquitetura. Aprofunde o hábito de leitura de documentações oficiais e adote uma postura analítica e crítica na revisão de sugestões geradas por assistentes de IA.   Pontuação: 13 a 15 Pontos — Perfil Avançado / Maturidade Técnica e SocioemocionalDiagnóstico de Perfil: Suas práticas de estudo alinham-se às demandas atuais do setor de desenvolvimento de software. Você demonstra autonomia técnica, pensamento crítico na auditoria de código e equilíbrio socioemocional na gestão da carreira.   Recomendação Pedagógica: Mantenha a prática de copilotagem crítica e aprimore conhecimentos em arquitetura de sistemas, testes automatizados e segurança da informação[cite: 1, 2]. Considere colaborar com projetos de código aberto (open-source) e participar de comunidades de desenvolvimento para expandir sua rede de contatos profissionais de forma consistente.   PÁGINA 5: fontes.html — Referências Bibliográficas e Transparência TecnológicaHeader / IntroduçãoTítulo Principal: Referências Bibliográficas, Fontes de Dados e Registro de Auditoria de IASubtítulo: Mapeamento completo das fontes consultadas, links diretos para documentos oficiais e o registro formal de governança no uso de Inteligência Artificial no projeto.   Seção 1: Referências Bibliográficas Acadêmicas e Relatórios SetoriaisBRASSCOM — Associação das Empresas de Tecnologia da Informação e Comunicação. Demanda de Talentos em TIC e Estratégia ΣTCEM. Relatório de Inteligência e Informação BRI2-2021-007. São Paulo: Brasscom, dez. 2021.URL: [https://brasscom.org.br/wp-content/uploads/2021/12/BRI2-2021-007-01-Demanda-de-Talentos-em-TIC-e-Sigma-TCEM-v117.pdf](https://brasscom.org.br/wp-content/uploads/2021/12/BRI2-2021-007-01-Demanda-de-Talentos-em-TIC-e-Sigma-TCEM-v117.pdf)Informações Sustentadas: Estudo contendo a projeção de demanda de 797 mil profissionais entre 2021 e 2025 (média de 159 mil/ano) e dados sobre a formação de 53 mil alunos/ano em cursos superiores de TIC no país.BRASSCOM — Associação das Empresas de Tecnologia da Informação e Comunicação. Relatório Perspectivas do Mercado de Trabalho do Macrossetor TIC. São Paulo: Brasscom, fev. 2025.URL: [https://brasscom.org.br/wp-content/uploads/2025/02/Relatorio-Perspectivas-do-Mercado-de-Trabalho.pdf](https://brasscom.org.br/wp-content/uploads/2025/02/Relatorio-Perspectivas-do-Mercado-de-Trabalho.pdf)Informações Sustentadas: Dados oficiais do Censo Superior do INEP 2023 (89.696 formados em TIC e 169.797 certificados em formação continuada), além de estatísticas sobre o avanço de 55,6% de contratações não-CLT (MEI/informais) entre 2023 e 2025.BRASSCOM — Associação das Empresas de Tecnologia da Informação e Comunicação. Brasscom estima 33 mil vagas formais em TIC em 2026. Comunicado de Imprensa / Teletime, jul. 2026.URL: [https://teletime.com.br/07/07/2026/tic-33-mil-vagas-formais-2026-brasscom/](https://teletime.com.br/07/07/2026/tic-33-mil-vagas-formais-2026-brasscom/)Informações Sustentadas: Projeção de acréscimo de 33 mil vagas formais celetistas no macrossetor de TIC no Brasil para o ano de 2026.STACK OVERFLOW. Stack Overflow Developer Survey 2023. Stack Overflow Labs, jun. 2023.URL: [https://survey.stackoverflow.co/2023/](https://survey.stackoverflow.co/2023/)Informações Sustentadas: Estatísticas sobre métodos de aprendizado de programação (51,98% utilizam cursos online/certificações; 46,85% possuem graduação superior).STACK OVERFLOW. The 2025 Stack Overflow Developer Survey & Developer Trends. DEV Community / Stack Overflow Labs, out. 2025.URL: [https://dev.to/fahimulhaq/the-2025-stack-overflow-developer-survey-was-a-wake-up-call-heres-why-301m](https://dev.to/fahimulhaq/the-2025-stack-overflow-developer-survey-was-a-wake-up-call-heres-why-301m)Informações Sustentadas: Estatísticas sobre a adoção de IA generativa (> 76%) e a redução do nível de confiança inteira nas respostas de IA (~42%), ressaltando o papel da auditoria humana por desenvolvedores.CARVALHO, Diego Marques de. Atividade Prática Evaluativa: Front-End & Copilotagem com IA — O Futuro do Trabalho e as Características Socioemocionais da Geração Atual. Material Didático e Guia Pedagógico, 2026.   Informações Sustentadas: Diretrizes sobre o combate ao analfabetismo funcional em código[cite: 1], governança na copilotagem com IA, especificação do dossiê AUDITORIA_IA.md e dimensões socioemocionais (Burnout, Síndrome do Impostor, FOMO profissional)[cite: 1, 3].   Seção 2: Dossiê de Auditoria Crítica de IA (AUDITORIA_IA.md)Conforme estipulado no regulamento pedagógico do projeto, a integração dos recursos interativos avançados (como a visualização dinâmica de gráficos com Chart.js e a calculadora de diagnóstico de preparação) foi realizada por meio de copilotagem assistida por Inteligência Artificial Generativa, submetida a auditoria crítica contínua da equipe


Diagnóstico:
Resíduos de IA no texto: marcações [cite: 3] e [cite: 1, 2], e erros como "atuaise" e "Evaluativa".
Descumpriu o prompt: pedimos para não manter números sem comprovação, mas o texto repetiu "centenas de candidatos por posto", "milhares de egressos" e "ISA entre 15% e 20%" sem fonte.
Comparação indevida: "cobria cerca de 56% da demanda" divide formados de 2023 por uma projeção de 2021, que são bases e períodos diferentes.
Rótulo errado: tratou "formação continuada" (INEP) como bootcamps e cursos livres, sem comprovar a equivalência.
Afirmação forte: "ultrapassando sozinho a capacidade de absorção" compara certificados (uma pessoa pode ter vários) com vagas.
Fontes inadequadas: listou o PDF do professor e um artigo do dev.to como fontes de dados.
Atribuição não verificável: "SETEC-MEC", 55,6% e 80,4% precisam ser conferidos no documento original.
Pilar 1: o texto original falava de ATS, assunto do Pilar 2.

Refatoração:
Reescrevemos o parágrafo do gráfico com os períodos explícitos (projeção divulgada em 2021, dados de formação de 2023) e o aviso de que certificados não equivalem a pessoas.
Corrigimos os rótulos no HTML e no app.js para "Formação continuada (INEP, 2023)" e removemos a comparação dos 56%.
Criamos uma nota metodológica em accordion, com período, fontes e limitações.
Reescrevemos o aside como "Leitura crítica", marcando o que é interpretação nossa.
Reescrevemos o segundo parágrafo do resumo em tom cauteloso.

Aprendizado: a IA mistura dados de anos e metodologias diferentes e apresenta como se fossem comparáveis. Cada número precisa ser verificado na fonte original.


Ficha 3: Bug do h3 e IDs duplicados

Ferramenta: Gemini Pro 3.1

Prompt:
estou programando um site em html, estou usando dois sections com as mesmas classes mas no site uma delas está maior e mais escura que a outra, oque está errado no codigo?



<section class="container py-5" id="ilusionismo" aria-labelledby="ilusionismo-title">

<div class="row justify-content-center">

<div class="col-lg-8">

<h2 class="text-center mb-4" id="ilusionismo-title">Eixo A — As Mutações Estruturais no Mercado de TI (2020–2026)</h2>

<h3 class="mb-3">Retração de Capital de Risco e Mudança de Paradigma Operacional</h3>

<p>A alteração nas políticas monetárias internacionais a partir de 2022 encerrou a era do "crescimento a qualquer custo" no setor de tecnologia. Com o aumento das taxas de juros, os fundos de Venture Capital passaram a exigir lucratividade e disciplina financeira das startups. Esse movimento culminou nos movimentos de demissão em massa (layoffs) que afetaram milhares de trabalhadores em todo o mundo.</p>

<p>No Brasil, os cortes operacionais atingiram grandes empresas de tecnologia, liberando no mercado profissionais com experiência prévia que passaram a concorrer por vagas de menor senioridade, pressionando ainda mais o segmento júnior.</p>

</div>

</div>

</section>



<section class="container py-5" id="ilusionismo" aria-labelledby="ilusionismo-title">

<div class="row justify-content-center">

<div class="col-lg-8">

<h2 class="text-center mb-4" id="ilusionismo-title">O Avanço da Pejotização e da Informalidade no Setor de TIC</h2>

<h3 class="mb-3">Dados dos relatórios setoriais da Brasscom sobre o mercado de trabalho em TIC indicam que, no período entre 2022 e 2025, o crescimento de contratações sob regimes de Microempreendedor Individual (MEI), contratos de prestação de serviços (PJ) e postos informais superou a expansão dos empregos formais regidos pela CLT.</p>

<p>Para o desenvolvedor júnior, essa tendência implica maior instabilidade contratual, ausência de direitos trabalhistas tradicionais e transferência dos custos de infraestrutura e aperfeiçoamento contínuo para o próprio trabalhador, intensificando a precarização das relações de trabalho no início da carreira.</p>

</div>

</div>

</section> 


Resposta bruta da IA:
O erro está na segunda <section> do seu código, onde uma tag <h3> foi aberta, mas foi fechada incorretamente com um </p>. Como a tag de cabeçalho <h3> não foi fechada, o navegador entende que todo o bloco de texto faz parte do título, o que deixa a fonte maior e em negrito na tela.   
image_23a176.png

Veja a linha com o erro:

HTML
<h3 class="mb-3">Dados dos relatórios setoriais da Brasscom [...] regidos pela CLT.</p>
Para corrigir o problema visual, você precisa usar a tag de parágrafo <p> no início, combinando com o fechamento </p>. O código corrigido fica assim:

HTML
<p class="mb-3">Dados dos relatórios setoriais da Brasscom sobre o mercado de trabalho em TIC indicam que, no período entre 2022 e 2025, o crescimento de contratações sob regimes de Microempreendedor Individual (MEI), contratos de prestação de serviços (PJ) e postos informais superou a expansão dos empregos formais regidos pela CLT.</p>
Dica extra sobre a estrutura do HTML:
Você está utilizando os mesmos identificadores (id="ilusionismo" e id="ilusionismo-title") nas duas seções. A regra padrão do HTML exige que os IDs sejam únicos na página. Para evitar problemas de acessibilidade e links âncora quebrados, altere os IDs da segunda seção para algo único, como id="pejotizacao" e aria-labelledby="pejotizacao-title".

Diagnóstico:
Tag aberta e fechada com topos diferentes: o código tinha h3 class="mb-3" fechado com /p. O navegador entendeu o parágrafo inteiro como título, e por isso a seção ficou maior e mais escura.
IDs duplicados: id="ilusionismo" e id="ilusionismo-title" aparecem nas duas seções. Isso quebra o aria-labelledby e as âncoras.
Limitação da resposta: a IA corrigiu o que foi perguntado e alertou sobre os IDs, mas não revisou o resto do arquivo.
Prompt fraco: curto e sem contexto, restrições ou formato esperado.

Refatoração:
Trocamos h3 por p class="mb-3" na abertura do parágrafo, para bater com o fechamento /p.
Demos IDs únicos a cada seção (informalidade, informalidade-title) e ajustamos o aria-labelledby.
eevoluímos o conteúdo para accordions, com id e aria-controls únicos em cada item.

Aprendizado: erro de fechamento de tag muda a estrutura inteira da página. A validação de HTML (validator.w3.org) e a regra de IDs únicos evitam esse tipo de problema.
