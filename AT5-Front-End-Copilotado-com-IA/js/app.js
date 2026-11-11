document.addEventListener('DOMContentLoaded', () => {
    
    /* ====================================================================
       1. LÓGICA DO GRÁFICO (Página: dados.html / grafico.html)
    ==================================================================== */
    const canvasElement = document.getElementById('graficoOfertaDemanda');

    // Só executa o código do gráfico se o canvas existir na página atual
    if (canvasElement) {
        if (typeof Chart === 'undefined') {
            console.error('Erro de Dependência: A biblioteca Chart.js não pôde ser carregada.');
            canvasElement.insertAdjacentHTML('afterend', '<p class="text-danger text-center fw-bold mt-3">Erro: Não foi possível carregar a visualização de dados. Verifique a conexão com a internet.</p>');
        } else {
            const ctx = canvasElement.getContext('2d');

            const rotulos = [
    ['Demanda Anual', 'Projetada (BRASSCOM, 2021)'],
    ['Concluintes do Ensino', 'Superior em TIC (INEP, 2023)'],
    ['Formação Continuada', '(INEP, 2023)']
];

const valoresEmpiricos = [159000, 89696, 169797];

            const configGrafico = {
                type: 'bar',
                data: {
                    labels: rotulos,
                    datasets: [{
                        label: 'Valor do indicador',
                        data: valoresEmpiricos,
                        backgroundColor: [
                            'rgba(13, 110, 253, 0.85)',  
                            'rgba(25, 135, 84, 0.85)',   
                            'rgba(220, 53, 69, 0.85)'    
                        ],
                        borderColor: [
                            '#0d6efd',
                            '#198754',
                            '#dc3545'
                        ],
                        borderWidth: 1,
                        borderRadius: 4, 
                        hoverBackgroundColor: [
                            'rgba(13, 110, 253, 1)',
                            'rgba(25, 135, 84, 1)',
                            'rgba(220, 53, 69, 1)'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false, 
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: 'rgba(33, 37, 41, 0.95)',
                            titleFont: { size: 14, family: "'Inter', sans-serif" },
                            bodyFont: { size: 14, family: "'Inter', sans-serif" },
                            padding: 12,
                            callbacks: {
                                label: function(context) {
                                    let textoTooltip = context.dataset.label || '';
                                    if (textoTooltip) textoTooltip += ': ';
                                    if (context.parsed.y !== null) {
                                        textoTooltip += new Intl.NumberFormat('pt-BR').format(context.parsed.y);
                                    }
                                    return textoTooltip;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Valor informado pela fonte',
                                font: { family: "'Inter', sans-serif", weight: '600' }
                            },
                            ticks: {
                                callback: function(value) {
                                    return new Intl.NumberFormat('pt-BR').format(value);
                                },
                                font: { family: "'Inter', sans-serif" }
                            }
                        },
                        x: {
                            ticks: {
                                font: { family: "'Inter', sans-serif" }
                            }
                        }
                    }
                }
            };
            new Chart(ctx, configGrafico);
        }
    }


    const formulario = document.getElementById("formContato");
    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault();
            const aviso = document.getElementById("avisoContato");
            aviso.className = "alert alert-warning mt-3";
            aviso.textContent = "O envio ainda não está ativo. Nenhuma mensagem foi enviada.";
        });
    }

    /* ====================================================================
       2. LÓGICA DO DIAGNOSTICADOR / QUESTIONÁRIO (Página: teste.html)
    ==================================================================== */
    const quizContainer = document.getElementById('quiz-container');
    
    // Só executa o código do teste se o container existir na página atual
    if (quizContainer) {
        
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
                    { texto: "Fico ansioso diante da ausência de respostas em seleções, mas tento manter uma rotina irregular de estudos.", pontos: 2 },
                    { texto: "Mantenho limites claros entre o aprendizado e o descanso, pratico o direito à desconexão e encaro as etapas de seleção como processos de aprendizado continuado.", pontos: 3 }
                ]
            }
        ];

        let indiceAtual = 0;
        const respostasUsuario = {}; 

        const resultadoContainer = document.getElementById('resultado-container');
        const btnAnterior = document.getElementById('btn-anterior');
        const btnProximo = document.getElementById('btn-proximo');
        const btnFinalizar = document.getElementById('btn-finalizar');
        const btnReiniciar = document.getElementById('btn-reiniciar');
        const barraProgresso = document.getElementById('barra-progresso');
        const progressoTexto = document.getElementById('progresso-texto');
        const progressoPorcentagem = document.getElementById('progresso-porcentagem');
        const alertaValidacao = document.getElementById('alerta-validacao');

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
                    <div class="alternativa-card ${isChecked}" role="radio" aria-checked="${ariaChecked}" tabindex="0" data-pontos="${alt.pontos}" data-index="${altIndex}">
                        <div class="form-check m-0" style="pointer-events: none;">
                            <input class="form-check-input" type="radio" name="questao_${index}" id="q${index}_a${altIndex}" value="${alt.pontos}" ${respostaSelecionada === alt.pontos ? 'checked' : ''}>
                            <label class="form-check-label fw-medium w-100 ps-2" for="q${index}_a${altIndex}" style="cursor: pointer;">
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
                card.addEventListener('click', () => selecionarAlternativa(card));
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
            
            const cardsIrmaos = quizContainer.querySelectorAll('.alternativa-card');
            cardsIrmaos.forEach(c => {
                c.classList.remove('selecionada');
                c.setAttribute('aria-checked', 'false');
                const radio = c.querySelector('input[type="radio"]');
                if (radio) radio.checked = false;
            });

            cardSelecionado.classList.add('selecionada');
            cardSelecionado.setAttribute('aria-checked', 'true');
            const radioAtual = cardSelecionado.querySelector('input[type="radio"]');
            if (radioAtual) radioAtual.checked = true;

            respostasUsuario[indiceAtual] = pontos;
            alertaValidacao.classList.add('d-none');
        }

        function atualizarProgresso() {
            const total = questoes.length;
            const atual = indiceAtual + 1;
            const porcentagem = Math.round((atual / total) * 100);

            progressoTexto.textContent = `Questão ${atual} de ${total}`;
            progressoPorcentagem.textContent = `${porcentagem}%`;
            barraProgresso.value = porcentagem;
        }

       
        function atualizarBotoesNavegacao() {
            const ultimaQuestao = indiceAtual === questoes.length - 1;

            btnAnterior.classList.toggle('d-none', indiceAtual === 0);
            btnProximo.classList.toggle('d-none', ultimaQuestao);
            btnFinalizar.classList.toggle('d-none', !ultimaQuestao);
}


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

        btnAnterior.addEventListener('click', () => {
            if (indiceAtual > 0) {
                indiceAtual--;
                renderizarQuestao(indiceAtual);
            }
        });

        btnFinalizar.addEventListener('click', () => {
            if (Object.keys(respostasUsuario).length < questoes.length) {
                alertaValidacao.textContent = "Existem questões sem resposta. Por favor, responda a todas as perguntas antes de finalizar.";
                alertaValidacao.classList.remove('d-none');
                return;
            }
            calcularEExibirResultado();
        });

        function calcularEExibirResultado() {
            let pontuacaoTotal = 0;
            for (let chave in respostasUsuario) {
                pontuacaoTotal += respostasUsuario[chave];
            }

            document.getElementById('progresso-container').classList.add('d-none');
            quizContainer.classList.add('d-none');
            btnAnterior.classList.add('d-none');
            btnFinalizar.classList.add('d-none');
            alertaValidacao.classList.add('d-none');

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

        btnReiniciar.addEventListener('click', () => {
            indiceAtual = 0;
            for (let prop in respostasUsuario) {
                delete respostasUsuario[prop];
            }
            resultadoContainer.classList.add('d-none');

            quizContainer.classList.remove('d-none');
            document.getElementById('progresso-container').classList.remove('d-none');
            renderizarQuestao(indiceAtual);
        });

        // Inicia o Quiz
        renderizarQuestao(indiceAtual);
    }
});


const botaoTema = document.getElementById("botao-tema");

if (botaoTema) {
    let temaAtual = "light";
    try { temaAtual = localStorage.getItem("tema") || "light"; } catch (e) {}

    document.documentElement.setAttribute("data-bs-theme", temaAtual);

    function atualizarBotao() {
        botaoTema.textContent = temaAtual === "dark"
            ? "Modo claro"
            : "Modo escuro";
    }

    atualizarBotao();

    botaoTema.addEventListener("click", function() {
        temaAtual = temaAtual === "light" ? "dark" : "light";

        document.documentElement.setAttribute("data-bs-theme", temaAtual);
        try { localStorage.setItem("tema", temaAtual); } catch (e) {}

        atualizarBotao();
    });
}
