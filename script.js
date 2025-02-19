const questions = [
    // Língua Portuguesa (15 questões)
    { category: "Língua Portuguesa", question: "Qual a função da vírgula em 'Maria, a professora, chegou'? ", options: ["Separar vocativo", "Separar aposto", "Separar sujeito", "Separar predicado"], answer: 1 },
    { category: "Língua Portuguesa", question: "Qual o plural correto de 'cidadão'?", options: ["Cidadãos", "Cidadões", "Cidades", "Cidadades"], answer: 0 },
    { category: "Língua Portuguesa", question: "Qual a concordância verbal correta em '... alunos ... na biblioteca'?", options: ["Há", "Hão", "Havia", "Haverá"], answer: 0 },
    { category: "Língua Portuguesa", question: "Qual o uso correto de 'mal' e 'mau' na frase 'Ele estava de ... humor por causa do ... tempo'?", options: ["Mal, mau", "Mau, mal", "Mal, mal", "Mau, mau"], answer: 0 },
    { category: "Língua Portuguesa", question: "Qual a forma correta de 'se' na frase '... precisa de voluntários'?", options: ["Precisa-se", "Precisam-se", "Precisa", "Precisará-se"], answer: 0 },
    { category: "Língua Portuguesa", question: "Identifique a função sintática do termo sublinhado: 'O livro é _para você_'.", options: ["Objeto direto", "Objeto indireto", "Complemento nominal", "Adjunto adnominal"], answer: 1 },
    { category: "Língua Portuguesa", question: "Qual a regência correta do verbo 'assistir' no sentido de ver?", options: ["Assistir ao filme", "Assistir o filme", "Assistir no filme", "Assistir pelo filme"], answer: 0 },
    { category: "Língua Portuguesa", question: "Qual o significado da figura de linguagem 'metáfora'?", options: ["Comparação implícita", "Exagero intencional", "Suavização da expressão", "Repetição de sons"], answer: 0 },
    { category: "Língua Portuguesa", question: "Qual a grafia correta: 'ascensão' ou 'acensão'?", options: ["Ascensão", "Acensão", "Asenção", "Acesão"], answer: 0 },
    { category: "Língua Portuguesa", question: "Qual o antônimo de 'efêmero'?", options: ["Duradouro", "Rápido", "Fugaz", "Transitório"], answer: 0 },
    { category: "Língua Portuguesa", question: "Qual o sentido da expressão 'água mole em pedra dura, tanto bate até que fura'?", options: ["Persistência", "Força bruta", "Habilidade", "Inteligência"], answer: 0 },
    { category: "Língua Portuguesa", question: "Qual a classe gramatical da palavra 'conquanto'?", options: ["Conjunção", "Preposição", "Advérbio", "Pronome"], answer: 0 },
    { category: "Língua Portuguesa", question: "Qual a ortografia correta: 'beneficente' ou 'beneficiente'?", options: ["Beneficente", "Beneficiente", "Benificente", "Benificiente"], answer: 0 },
    { category: "Língua Portuguesa", question: "Qual a função do pronome oblíquo na frase 'Entreguei-lhe o livro'?", options: ["Objeto direto", "Objeto indireto", "Sujeito", "Adjunto adnominal"], answer: 1 },
    { category: "Língua Portuguesa", question: "Qual a diferença entre 'há' e 'a'?", options: ["Tempo passado/futuro", "Futuro/passado", "Lugar/tempo", "Tempo/lugar"], answer: 0 },

    // Matemática (15 questões)
    { category: "Matemática", question: "Qual o resultado de 15 x 6 + (20 ÷ 4)?", options: ["90", "95", "100", "110"], answer: 1 },
    { category: "Matemática", question: "Se um livro custa R$ 35,00 e você tem R$ 210,00, quantos livros pode comprar?", options: ["5", "6", "7", "8"], answer: 0 },
    { category: "Matemática", question: "Qual o valor de x na equação 2x + 5 = 15?", options: ["4", "5", "6", "7"], answer: 1 },
    { category: "Matemática", question: "Qual a área de um retângulo com base 12 cm e altura 8 cm?", options: ["96 cm²", "86 cm²", "76 cm²", "66 cm²"], answer: 0 },
    { category: "Matemática", question: "Qual o perímetro de um triângulo equilátero com lado 5 cm?", options: ["10 cm", "15 cm", "20 cm", "25 cm"], answer: 1 },
    { category: "Matemática", question: "Qual o resultado de 3/4 + 1/2?", options: ["5/4", "4/6", "6/8", "7/8"], answer: 0 },
    { category: "Matemática", question: "Qual o valor de 5! (fatorial)?", options: ["120", "100", "80", "60"], answer: 0 },
    { category: "Matemática", question: "Qual a raiz quadrada de 144?", options: ["12", "13", "14", "15"], answer: 0 },
    { category: "Matemática", question: "Se 20% de um número é 40, qual é esse número?", options: ["200", "180", "160", "140"], answer: 0 },
    { category: "Matemática", question: "Qual o próximo número na sequência: 2, 4, 6, 8, ...?", options: ["10", "12", "14", "16"], answer: 0 },
    { category: "Matemática", question: "Se um terreno tem 15 metros de largura e 25 metros de comprimento, qual sua área?", options: ["375 m²", "350 m²", "325 m²", "300 m²"], answer: 0 },
    { category: "Matemática", question: "Qual o resultado de (3³ - 5)?", options: ["22", "27", "32", "37"], answer: 0 },
    { category: "Matemática", question: "Qual a porcentagem de 80 em relação a 200?", options: ["40%", "50%", "60%", "70%"], answer: 0 },
    { category: "Matemática", question: "Se x + y = 10 e x - y = 4, qual o valor de x?", options: ["7", "6", "5", "4"], answer: 0 },
    { category: "Matemática", question: "Qual a média aritmética de 5, 7 e 9?", options: ["7", "8", "9", "10"], answer: 0 },

    // Conhecimentos Gerais (20 questões)
    { category: "Conhecimentos Gerais", question: "Quem proclamou a independência do Brasil?", options: ["Dom Pedro I", "Dom Pedro II", "Getúlio Vargas", "Deodoro da Fonseca"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Qual a capital da Argentina?", options: ["Buenos Aires", "Santiago", "Montevidéu", "Lima"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Qual o rio mais extenso do mundo?", options: ["Amazonas", "Nilo", "Yangtzé", "Mississipi"], answer: 1 },
    { category: "Conhecimentos Gerais", question: "Qual a montanha mais alta do mundo?", options: ["Everest", "K2", "Kangchenjunga", "Lhotse"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Em que ano ocorreu a Queda da Bastilha?", options: ["1789", "1799", "1804", "1815"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Quem pintou a Mona Lisa?", options: ["Leonardo da Vinci", "Michelangelo", "Rafael", "Donatello"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Qual a capital da Austrália?", options: ["Camberra", "Sydney", "Melbourne", "Brisbane"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Qual o maior oceano do mundo?", options: ["Pacífico", "Atlântico", "Índico", "Ártico"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Quem escreveu 'Dom Quixote'?", options: ["Miguel de Cervantes", "William Shakespeare", "Jorge Luis Borges", "Gabriel García Márquez"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Qual a capital do Canadá?", options: ["Ottawa", "Toronto", "Montreal", "Vancouver"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Quem foi o primeiro homem a pisar na Lua?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Qual o país de origem do tango?", options: ["Argentina", "Brasil", "Uruguai", "Espanha"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Qual o nome do maior deserto do mundo?", options: ["Antártida", "Saara", "Gobi", "Arábico"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Quem foi o líder da Revolução Cubana?", options: ["Fidel Castro", "Che Guevara", "Raúl Castro", "Camilo Cienfuegos"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Qual a cidade onde estão localizadas as pirâmides de Gizé?", options: ["Cairo", "Luxor", "Alexandria", "Gizé"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Quem descobriu o Brasil?", options: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Fernão de Magalhães"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Qual a capital da Espanha?", options: ["Madri", "Barcelona", "Valência", "Sevilha"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Qual o maior lago do mundo em volume de água?", options: ["Mar Cáspio", "Lago Superior", "Lago Vitória", "Lago Huron"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Quem foi o primeiro presidente dos Estados Unidos?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], answer: 0 },
    { category: "Conhecimentos Gerais", question: "Qual o nome do tratado que dividiu o mundo entre Portugal e Espanha?", options: ["Tratado de Tordesilhas", "Tratado de Madri", "Tratado de Lisboa", "Tratado de Utrecht"], answer: 0 },

    // Atualidades (20 questões)
    { category: "Atualidades", question: "Qual o principal tema da COP28?", options: ["Mudanças climáticas", "Economia global", "Saúde pública", "Tecnologia"], answer: 0 },
    { category: "Atualidades", question: "Qual país sediou os Jogos Olímpicos de 2024?", options: ["França", "Japão", "Brasil", "Estados Unidos"], answer: 0 },
    { category: "Atualidades", question: "Qual o nome do novo programa social do governo federal?", options: ["Bolsa Família", "Auxílio Brasil", "Renda Cidadã", "Minha Casa, Minha Vida"], answer: 0 },
    { category: "Atualidades", question: "Qual a principal causa do aumento da inflação nos últimos meses?", options: ["Crise hídrica", "Guerra na Ucrânia", "Aumento dos juros", "Pandemia de COVID-19"], answer: 1 },
    { category: "Atualidades", question: "Qual o nome do satélite lançado para monitorar a Amazônia?", options: ["Amazonia-1", "MapBiomas", "Prodes", "Deter"], answer: 0 },
    { category: "Atualidades", question: "Qual a nova tecnologia que promete revolucionar a inteligência artificial?", options: ["GPT-4", "Blockchain", "5G", "Realidade Virtual"], answer: 0 },
    { category: "Atualidades", question: "Qual o nome do acordo de livre comércio entre Mercosul e União Europeia?", options: ["Acordo UE-Mercosul", "Acordo Mercosul-UE", "ALCA", "NAFTA"], answer: 0 },
    { category: "Atualidades", question: "Qual o país que enfrenta uma grave crise política e econômica?", options: ["Venezuela", "Argentina", "Chile", "Peru"], answer: 0 },
    { category: "Atualidades", question: "Qual o nome da nova variante do coronavírus que preocupa a OMS?", options: ["Ômicron", "Delta", "Gama", "Beta"], answer: 0 },
    { category: "Atualidades", question: "Qual o tema central do Fórum Econômico Mundial em Davos?", options: ["Globalização 4.0", "Desenvolvimento sustentável", "Inteligência artificial", "Saúde global"], answer: 0 },
    { category: "Atualidades", question: "Qual o nome do novo presidente eleito no Chile?", options: ["Gabriel Boric", "José Antonio Kast", "Sebastián Piñera", "Michelle Bachelet"], answer: 0 },
    { category: "Atualidades", question: "Qual o principal evento esportivo do ano de 2022?", options: ["Copa do Mundo", "Olimpíadas de Inverno", "Mundial de Atletismo", "Eurocopa"], answer: 0 },
    { category: "Atualidades", question: "Qual a nova política de combate ao desmatamento na Amazônia?", options: ["Plano Amazônia Sustentável", "Operação Verde Brasil", "Desmatamento Zero", "Programa Nacional de Meio Ambiente"], answer: 0 },
    { category: "Atualidades", question: "Qual o nome da missão espacial que busca vida em Marte?", options: ["Perseverance", "Curiosity", "Opportunity", "Spirit"], answer: 0 },
    { category: "Atualidades", question: "Qual o novo acordo nuclear com o Irã?", options: ["JCPOA", "Acordo de Viena", "Acordo de Genebra", "Acordo de Lausanne"], answer: 0 },
    { category: "Atualidades", question: "Qual a principal causa da crise energética na Europa?", options: ["Guerra na Ucrânia", "Dependência do gás russo", "Aumento da demanda", "Falta de investimento em energias renováveis"], answer: 0 },
    { category: "Atualidades", question: "Qual o novo projeto de lei que visa combater as fake news?", options: ["PL das Fake News", "Lei da Liberdade de Expressão", "Marco Civil da Internet", "Lei de Combate à Desinformação"], answer: 0 },
    { category: "Atualidades", question: "Qual o novo tratamento para o câncer que está sendo desenvolvido?", options: ["Imunoterapia", "Quimioterapia", "Radioterapia", "Terapia Gênica"], answer: 0 },
    { category: "Atualidades", question: "Qual o novo plano de recuperação econômica pós-pandemia?", options: ["Plano de Recuperação e Resiliência", "Next Generation EU", "Reconstrução Verde", "Novo Plano Marshall"], answer: 0 },
    { category: "Atualidades", question: "Qual o novo projeto de lei que visa regulamentar as criptomoedas?", options: ["Marco Legal das Criptomoedas", "Lei das Moedas Digitais", "Regulamentação das Criptomoedas", "Lei da Inovação Financeira"], answer: 0 },

    // Noções de Informática (25 questões)
    { category: "Noções de Informática", question: "O que é um firewall?", options: ["Barreira de segurança", "Software de edição", "Hardware de impressão", "Dispositivo de armazenamento"], answer: 0 },
    { category: "Noções de Informática", question: "Qual a função do Ctrl+V?", options: ["Colar", "Copiar", "Recortar", "Salvar"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um sistema operacional?", options: ["Software que gerencia o hardware", "Aplicativo de texto", "Editor de imagens", "Navegador de internet"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um navegador?", options: ["Software para acessar a internet", "Programa de edição de vídeo", "Sistema de segurança", "Dispositivo de rede"], answer: 0 },
    { category: "Noções de Informática", question: "Qual a função do protocolo HTTP?", options: ["Transferência de páginas web", "Envio de e-mails", "Compartilhamento de arquivos", "Conexão de redes"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um IP?", options: ["Endereço de um dispositivo na rede", "Tipo de antivírus", "Modelo de impressora", "Formato de arquivo"], answer: 0 },
    { category: "Noções de Informática", question: "O que é a nuvem (cloud)?", options: ["Armazenamento de dados online", "Tipo de vírus", "Software de design", "Conexão física de rede"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um malware?", options: ["Software malicioso", "Programa de edição de áudio", "Dispositivo de entrada", "Tipo de memória"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um link?", options: ["Hiperligação para outra página", "Tipo de cabo", "Software de apresentação", "Dispositivo de saída"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um e-mail?", options: ["Correio eletrônico", "Editor de texto", "Programa de cálculo", "Jogo online"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um domínio?", options: ["Nome de um site na internet", "Tipo de servidor", "Software de backup", "Protocolo de segurança"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um servidor?", options: ["Computador que fornece serviços", "Tipo de impressora", "Software de contabilidade", "Dispositivo de som"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um banco de dados?", options: ["Conjunto de dados organizados", "Software de desenho", "Tipo de vírus", "Dispositivo de armazenamento"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um algoritmo?", options: ["Sequência de passos para resolver um problema", "Tipo de processador", "Software de animação", "Dispositivo de rede"], answer: 0 },
    { category: "Noções de Informática", question: "O que é HTML?", options: ["Linguagem de marcação para web", "Tipo de hardware", "Software de simulação", "Protocolo de comunicação"], answer: 0 },
    { category: "Noções de Informática", question: "O que é CSS?", options: ["Linguagem de estilo para web", "Tipo de memória", "Software de modelagem", "Protocolo de segurança"], answer: 0 },
    { category: "Noções de Informática", question: "O que é JavaScript?", options: ["Linguagem de programação para web", "Tipo de impressora", "Software de gestão", "Protocolo de comunicação"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um cookie?", options: ["Arquivo para rastrear a navegação", "Tipo de cabo", "Software de edição", "Dispositivo de entrada"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um vírus?", options: ["Programa malicioso que se replica", "Tipo de servidor", "Software de backup", "Protocolo de segurança"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um antivírus?", options: ["Software para proteger contra vírus", "Tipo de impressora", "Software de contabilidade", "Dispositivo de som"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um backup?", options: ["Cópia de segurança dos dados", "Software de desenho", "Tipo de vírus", "Dispositivo de armazenamento"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um driver?", options: ["Software que permite a comunicação com hardware", "Tipo de processador", "Software de animação", "Dispositivo de rede"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um código aberto?", options: ["Software com código disponível para modificação", "Tipo de hardware", "Software de simulação", "Protocolo de comunicação"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um VPN?", options: ["Rede virtual privada", "Tipo de cabo", "Software de edição", "Dispositivo de entrada"], answer: 0 },
    { category: "Noções de Informática", question: "O que é um pen drive?", options: ["Dispositivo de armazenamento portátil", "Tipo de servidor", "Software de backup", "Protocolo de segurança"], answer: 0 },

    // Noções de Direito (25 questões)
    { category: "Noções de Direito", question: "O que é a Constituição Federal?", options: ["Lei máxima do país", "Código Civil", "Código Penal", "Estatuto da Criança e do Adolescente"], answer: 0 },
    { category: "Noções de Direito", question: "O que é um habeas corpus?", options: ["Ação para garantir a liberdade", "Pedido de indenização", "Defesa em processo penal", "Ataque a direitos"], answer: 0 },
    { category: "Noções de Direito", question: "O que é o princípio da legalidade?", options: ["Só se pode fazer o que a lei permite", "Todos são iguais perante a lei", "Direito à ampla defesa", "Direito ao contraditório"], answer: 0 },
    { category: "Noções de Direito", question: "O que é um crime doloso?", options: ["Com intenção de cometer o crime", "Sem intenção de cometer o crime", "Por omissão", "Por negligência"], answer: 0 },
    { category: "Noções de Direito", question: "O que é um crime culposo?", options: ["Sem intenção de cometer o crime", "Com intenção de cometer o crime", "Por ação", "Por dolo eventual"], answer: 0 },
    { category: "Noções de Direito", question: "O que é legítima defesa?", options: ["Usar meios necessários para se defender", "Atacar primeiro", "Revogar uma lei", "Aumentar a pena"], answer: 0 },
    { category: "Noções de Direito", question: "O que é o direito ao contraditório?", options: ["Garantir a defesa em um processo", "Acusar alguém", "Julgar um caso", "Criar uma lei"], answer: 0 },
    { category: "Noções de Direito", question: "O que é o direito à ampla defesa?", options: ["Ter todos os meios para se defender", "Ser julgado rapidamente", "Não ser preso", "Não ser condenado"], answer: 0 },
    { category: "Noções de Direito", question: "O que é o inquérito policial?", options: ["Investigação criminal", "Processo judicial", "Audiência pública", "Julgamento"], answer: 0 },
    { category: "Noções de Direito", question: "O que é a prisão em flagrante?", options: ["Prisão no momento do crime", "Prisão preventiva", "Prisão temporária", "Prisão domiciliar"], answer: 0 },
    { category: "Noções de Direito", question: "O que é o Código Penal?", options: ["Conjunto de leis sobre crimes", "Lei de trânsito", "Código Civil", "Estatuto da OAB"], answer: 0 },
    { category: "Noções de Direito", question: "O que é o Código Civil?", options: ["Conjunto de leis sobre relações privadas", "Lei de crimes", "Código Penal", "Estatuto do Idoso"], answer: 0 },
    { category: "Noções de Direito", question: "O que é a maioridade penal?", options: ["18 anos", "16 anos", "21 anos", "14 anos"], answer: 0 },
    { category: "Noções de Direito", question: "O que é o ECA?", options: ["Estatuto da Criança e do Adolescente", "Código Penal", "Código Civil", "Lei de Diretrizes e Bases"], answer: 0 },
    { category: "Noções de Direito", question: "O que é o princípio da presunção de inocência?", options: ["Ser considerado inocente até prova contrária", "Ser julgado rapidamente", "Ter direito à defesa", "Não ser preso"], answer: 0 },
    { category: "Noções de Direito", question: "O que é um mandado de segurança?", options: ["Ordem judicial para proteger direitos", "Pedido de habeas corpus", "Solicitação de indenização", "Ação popular"], answer: 0 },
    { category: "Noções de Direito", question: "O que é a ação popular?", options: ["Ação para proteger o patrimônio público", "Ação para defender um indivíduo", "Ação para criar uma lei", "Ação para julgar um caso"], answer: 0 },
    { category: "Noções de Direito", question: "O que é o Estatuto do Idoso?", options: ["Lei que protege os direitos dos idosos", "Código Civil", "Código Penal", "Estatuto da Criança e do Adolescente"], answer: 0 },
    { category: "Noções de Direito", question: "O que é a delação premiada?", options: ["Acordo para reduzir a pena em troca de informações", "Aumento da pena", "Redução da pena sem acordo", "Cumprimento integral da pena"], answer: 0 },
    { category: "Noções de Direito", question: "O que é a prisão preventiva?", options: ["Prisão antes do julgamento", "Prisão após o julgamento", "Prisão em flagrante", "Prisão domiciliar"], answer: 0 },
    { category: "Noções de Direito", question: "O que é a pena de reclusão?", options: ["Regime fechado", "Regime semiaberto", "Regime aberto", "Prestação de serviços"], answer: 0 },
    { category: "Noções de Direito", question: "O que é a pena de detenção?", options: ["Regime semiaberto ou aberto", "Regime fechado", "Prestação de serviços", "Multa"], answer: 0 },
    { category: "Noções de Direito", question: "O que é a prescrição penal?", options: ["Perda do direito de punir pelo Estado", "Aumento da pena", "Redução da pena", "Extinção da punibilidade"], answer: 0 },
    { category: "Noções de Direito", question: "O que é a progressão de regime?", options: ["Passar para um regime menos rigoroso", "Passar para um regime mais rigoroso", "Cumprir a pena integralmente", "Receber indulto"], answer: 0 },
    { category: "Noções de Direito", question: "O que é o indulto?", options: ["Perdão da pena", "Aumento da pena", "Redução da pena", "Substituição da pena"], answer: 0 }
];

let currentQuestionIndex = 0;
let timerInterval;
let timeLeft = 14400; // 4 horas em segundos (4 * 60 * 60)
let correctAnswers = 0;
let incorrectAnswers = [];

function startTimer() {
    timerInterval = setInterval(() => {
        let hours = Math.floor(timeLeft / 3600);
        let minutes = Math.floor((timeLeft % 3600) / 60);
        let seconds = timeLeft % 60;

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('time').textContent = hours + ":" + minutes + ":" + seconds;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        }

        timeLeft--;
    }, 1000);
}

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <h2>${currentQuestion.category} - Pergunta ${currentQuestionIndex + 1}</h2>
        <p>${currentQuestion.question}</p>
        ${currentQuestion.options.map((option, index) => `
            <label><input type="radio" name="option" value="${index}"> ${option}</label><br>
        `).join('')}
    `;
}

function showResults() {
    clearInterval(timerInterval);
    const resultContainer = document.getElementById('result-container');
    let incorrectList = incorrectAnswers.map(index => {
        let question = questions[index];
        return `<p><strong>${question.category} - Pergunta ${index + 1}:</strong> ${question.question}<br>
                Resposta correta: ${question.options[question.answer]}</p>`;
    }).join('');

    resultContainer.innerHTML = `
        <h2>Resultados</h2>
        <p>Você acertou ${correctAnswers} de ${questions.length} perguntas.</p>
        ${incorrectAnswers.length > 0 ? `
            <h3>Perguntas erradas:</h3>
            ${incorrectList}
        ` : `<p>Parabéns! Você acertou todas as perguntas.</p>`}
    `;

    document.getElementById('question-container').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('restart-button').style.display = 'block';
    resultContainer.style.display = 'block';
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Por favor, selecione uma resposta.");
        return false;
    }

    const answerIndex = parseInt(selectedOption.value);
    if (answerIndex === questions[currentQuestionIndex].answer) {
        correctAnswers++;
    } else {
        incorrectAnswers.push(currentQuestionIndex);
    }
    return true;
}

document.getElementById('next-button').addEventListener('click', () => {
    if (checkAnswer()) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
        // Desmarcar a opção selecionada
        let selected = document.querySelector('input[name="option"]:checked');
        if (selected) {
            selected.checked = false;
        }
    }
});

document.getElementById('restart-button').addEventListener('click', () => {
    currentQuestionIndex = 0;
    timeLeft = 14400;
    correctAnswers = 0;
    incorrectAnswers = [];

    document.getElementById('question-container').style.display = 'block';
    document.getElementById('next-button').style.display = 'block';
    document.getElementById('restart-button').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';

    loadQuestion();
    startTimer();
});

window.onload = () => {
    loadQuestion();
    startTimer();
};
