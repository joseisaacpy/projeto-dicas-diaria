// array de dicas
const dicas = [
    // Saúde e bem-estar
    "Beba pelo menos 2 litros de água por dia para manter-se hidratado.",
    "Comece o dia com um alongamento para despertar o corpo.",
    "Durma pelo menos 7 a 8 horas por noite para um descanso de qualidade.",
    "Evite telas brilhantes pelo menos 1 hora antes de dormir para melhorar seu sono.",
    "Faça pequenas pausas durante o trabalho para evitar fadiga mental.",
    "Evite bebidas açucaradas e prefira opções naturais como sucos ou chá.",
    "Coma devagar e aprecie sua refeição para melhorar a digestão.",
    "Pratique exercícios físicos regularmente, mesmo que sejam pequenas caminhadas.",
    "Experimente técnicas de respiração profunda para aliviar o estresse.",
    "Inclua mais frutas e vegetais na sua alimentação diária.",
  
    // Desenvolvimento pessoal
    "Leia pelo menos 10 páginas de um livro todos os dias.",
    "Anote três coisas pelas quais você é grato hoje.",
    "Aprenda uma palavra nova em um idioma diferente.",
    "Desafie-se a sair da sua zona de conforto pelo menos uma vez por semana.",
    "Comece o dia organizando sua lista de tarefas mais importantes.",
    "Ouça podcasts ou audiobooks sobre temas que te interessam.",
    "Tente meditar por pelo menos 5 minutos hoje para relaxar.",
    "Escreva seus objetivos para o mês e revise-os regularmente.",
    "Evite reclamar por um dia inteiro e veja como se sente.",
    "Crie um diário para anotar ideias, reflexões e aprendizados do dia.",
  
    // Produtividade
    "Desligue notificações desnecessárias do celular para manter o foco.",
    "Use a técnica Pomodoro: 25 minutos de foco + 5 minutos de pausa.",
    "Faça sua tarefa mais difícil do dia primeiro para se livrar dela rapidamente.",
    "Mantenha seu espaço de trabalho organizado para aumentar sua produtividade.",
    "Evite multitarefa e foque em uma atividade por vez.",
    "Programe o seu dia na noite anterior para ter mais clareza e eficiência.",
    "Defina metas pequenas e alcançáveis para manter a motivação.",
    "Se sentir cansaço mental, faça uma caminhada curta para renovar as energias.",
    "Aprenda a dizer 'não' para tarefas que não são prioridades.",
    "Use listas de tarefas para se organizar e evitar esquecimentos.",
  
    // Relacionamentos e socialização
    "Dê um elogio sincero a alguém hoje.",
    "Passe um tempo de qualidade com sua família ou amigos.",
    "Escute mais do que fala para fortalecer seus relacionamentos.",
    "Evite julgamentos precipitados e tente ver o lado bom das pessoas.",
    "Envie uma mensagem para alguém que você não fala há muito tempo.",
    "Desconecte-se do celular durante as refeições e converse mais.",
    "Seja gentil com estranhos, um simples sorriso pode fazer o dia de alguém melhor.",
    "Ofereça ajuda para alguém que precisa, mesmo que seja algo pequeno.",
    "Aprenda a perdoar, segurar ressentimentos só te faz mal.",
    "Faça algo especial para um amigo ou familiar sem motivo específico.",
  
    // Mentalidade e motivação
    "Repita afirmações positivas para reforçar sua autoconfiança.",
    "Se algo deu errado, veja como uma oportunidade de aprendizado.",
    "Lembre-se: pequenos progressos diários levam a grandes conquistas.",
    "Não compare sua jornada com a dos outros, cada um tem seu ritmo.",
    "Comece o dia com uma mentalidade positiva e veja como tudo melhora.",
    "Tenha paciência consigo mesmo, o crescimento leva tempo.",
    "Seja persistente! Grandes resultados vêm da consistência.",
    "Cerque-se de pessoas que te motivam e inspiram.",
    "Evite a negatividade, consuma conteúdos que te façam bem.",
    "Celebre suas pequenas vitórias ao longo do dia.",
  
    // Organização e finanças
    "Separe 10 minutos do seu dia para organizar seu espaço.",
    "Evite gastos desnecessários e pratique o consumo consciente.",
    "Crie um orçamento mensal para ter mais controle financeiro.",
    "Separe uma parte do seu dinheiro para investimentos no futuro.",
    "Use um aplicativo de finanças para rastrear seus gastos diários.",
    "Faça uma lista de compras antes de ir ao mercado para evitar excessos.",
    "Venda ou doe coisas que você não usa mais para liberar espaço.",
    "Pague suas contas no prazo para evitar juros desnecessários.",
    "Evite compras impulsivas, espere 24h antes de decidir comprar algo.",
    "Defina metas financeiras de curto e longo prazo.",
  
    // Criatividade e hobbies
    "Experimente um novo hobby ou atividade que te interesse.",
    "Tire um tempo para desenhar, escrever ou praticar um instrumento.",
    "Saia da rotina e faça algo diferente hoje.",
    "Cozinhe uma nova receita e descubra novos sabores.",
    "Se permita errar! A criatividade surge da experimentação.",
    "Pratique fotografia, mesmo que seja com o celular.",
    "Faça algo manual como artesanato ou jardinagem.",
    "Tente aprender um novo esporte ou dança.",
    "Dê uma pausa e assista a um filme inspirador.",
    "Crie uma playlist com músicas que te fazem feliz.",
  
    // Autocuidado e relaxamento
    "Separe um tempo só para você hoje, mesmo que sejam 10 minutos.",
    "Tome um banho relaxante sem pressa.",
    "Desconecte-se da internet por algumas horas para relaxar.",
    "Faça uma massagem nos ombros para aliviar a tensão.",
    "Aproveite um momento de silêncio para refletir.",
    "Tome um chá calmante antes de dormir.",
    "Experimente um banho de sol pela manhã para absorver vitamina D.",
    "Pratique gratidão antes de dormir para dormir melhor.",
    "Use roupas confortáveis e se sinta bem com você mesmo.",
    "Experimente aromaterapia para relaxar ou melhorar a concentração.",
  ];
  
  // h2 que mostrará a dica
  const h2Element = document.getElementById("dica-do-dia");
  // função para gerar dica
  function gerarDicaDoDia() {
    // dica aleatoria
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    //   h2 recebe a dica
    h2Element.innerText = dicaAleatoria;
  }
  
  gerarDicaDoDia(); // Exibe uma dica ao carregar a página
  
  // botao gera a dica
  document.querySelector("button").addEventListener("click", gerarDicaDoDia);
  
  