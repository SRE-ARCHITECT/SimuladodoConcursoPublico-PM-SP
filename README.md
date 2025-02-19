# SimuladoConcurso-PM-SP
 Simulado do Concurso Publico-PM-SP
 
Descrição da Criação Final do Simulado PM-SP 
O objetivo era criar um simulado completo e interativo para a prova da Polícia 
Militar do Estado de São Paulo, utilizando HTML, CSS e JavaScript. O simulado 
deveria incluir um cronômetro, exibir o número da pergunta, mostrar as respostas 
erradas ao inal, ter um botão para reiniciar o simulado e permitir a inclusão de um 
QR Code para doações. 
Etapas de Desenvolvimento: 
1.  Estrutura HTML Base: 
•  Criamos um arquivo HTML (index.html) com uma estrutura básica 
contendo: 
•  Título do simulado. 
•  Um cronômetro para controlar o tempo de prova. 
•  Um contêiner para exibir as perguntas. 
•  Botões para "Próxima Pergunta" e "Reiniciar Simulado". 
•  Um contêiner para exibir os resultados inais. 
•  Um espaço para inserir um QR Code para doações. 
2.  Estilização CSS: 
•  Desenvolvemos um arquivo CSS (style.css) para estilizar a página de 
forma responsiva e atraente, utilizando cores suaves (azul claro e 
tons de cinza) e fontes legíveis. Ajustamos os tamanhos das fontes e 
do QR Code para melhor visualização. 
3.  Lógica JavaScript: 
•  Criamos um arquivo JavaScript (script.js) para implementar a lógica 
do simulado: 
•  Definição das Perguntas: Um array questions contendo 
objetos com as perguntas, opções e respostas corretas, 
categorizadas por matéria (Língua Portuguesa, Matemática, 
Conhecimentos Gerais, Atualidades, Noções de Informática 
e Noções de Direito). 
•  Cronômetro: Implementação de um cronômetro que inicia 
ao carregar a página, com duração de 4 horas (tempo de 
prova padrão). O cronômetro exibe o tempo restante em 
horas, minutos e segundos. •  Exibição das Perguntas: Função loadQuestion() para 
carregar dinamicamente as perguntas e opções no contêiner 
de perguntas. 
•  Controle de Respostas: Função checkAnswer() para 
veriicar se a resposta selecionada está correta e registrar as 
respostas erradas. 
•  Resultados Finais: Função showResults() para exibir os 
resultados ao inal do simulado, mostrando o número de 
acertos, as perguntas erradas e suas respectivas respostas 
corretas. 
•  Reiniciar Simulado: Lógica para reiniciar o simulado, 
zerando o cronômetro, as respostas e voltando para a 
primeira pergunta. 
•  Event Listeners: Adição de event listeners aos botões 
"Próxima Pergunta" e "Reiniciar Simulado" para controlar o 
luxo do simulado. 
Funcionalidades Implementadas: 
•  Cronômetro: Contagem regressiva de 4 horas, exibida em tempo real na 
página. 
•  Exibição de Perguntas: Carregamento dinâmico das perguntas, com 
opções de múltipla escolha. 
•  Validação de Respostas: Veriicação automática das respostas 
selecionadas. 
•  Feedback: Exibição dos resultados ao inal, com o número de acertos e a 
lista de perguntas erradas com as respostas corretas. 
•  Reinicialização: Possibilidade de reiniciar o simulado para refazer a prova. 
•  Responsividade: Design adaptável a diferentes tamanhos de tela. 
•  QR Code: Inclusão de um QR Code para doações, com tamanho ajustado 
para boa visualização. 
Conclusão: 
O simulado foi criado com o objetivo de fornecer uma ferramenta de estudo 
completa e eiciente para os candidatos à Polícia Militar do Estado de São Paulo. 
As funcionalidades implementadas simulam as condições reais da prova, 
ajudando os candidatos a se prepararem de forma mais eficaz. 
