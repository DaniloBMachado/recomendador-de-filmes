let inputAge;
let categories = ["Fantasia", "Aventura", "Drama", "Ação", "Romance"];
let checkboxes = [];
let recommendButton;
let recommendation;

let movies = {
  livre: {
    Fantasia: ["O Mágico de Oz", "A Bela e a Fera", "Alice no País das Maravilhas", "Toy Story", "O Pequeno Príncipe"],
    Aventura: ["Toy Story", "Procurando Nemo", "Up: Altas Aventuras", "O Mágico de Oz", "Alice no País das Maravilhas"],
    Drama: ["O Menino e o Mundo", "A Caminho da Lua", "O Pequeno Príncipe", "Procurando Nemo", "Up: Altas Aventuras"],
    Ação: ["Os Incríveis", "Kung Fu Panda", "Big Hero 6"],
    Romance: ["A Dama e o Vagabundo", "Enrolados", "Shrek", "A Bela e a Fera"]
  },
  10: {
    Fantasia: ["Harry Potter e a Pedra Filosofal", "Malévola", "Frozen: Uma Aventura Congelante"],
    Aventura: ["Piratas do Caribe: A Maldição do Pérola Negra", "Jurassic Park", "Jumanji: Bem-vindo à Selva"],
    Drama: ["Extraordinário", "A Culpa é das Estrelas", "O Menino do Pijama Listrado"],
    Ação: ["Homem-Aranha", "Homem de Ferro", "Capitão América: O Primeiro Vingador"],
    Romance: ["A Nova Cinderela", "Querido John", "A Barraca do Beijo"]
  },
  12: {
    Fantasia: ["Harry Potter e o Prisioneiro de Azkaban", "O Senhor dos Anéis: A Sociedade do Anel", "Percy Jackson e o Ladrão de Raios"],
    Aventura: ["Indiana Jones e os Caçadores da Arca Perdida", "Os Caça-Fantasmas", "Avatar"],
    Drama: ["Em Busca da Felicidade", "Um Sonho Possível", "A Vida é Bela"],
    Ação: ["Os Vingadores", "Transformers", "Missão Impossível: Protocolo Fantasma"],
    Romance: ["Orgulho e Preconceito", "O Amor Não Tira Férias", "Antes que Termine o Dia"]
  },
  14: {
    Fantasia: ["Harry Potter e o Cálice de Fogo", "O Labirinto do Fauno", "A Bússola de Ouro"],
    Aventura: ["As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa", "O Hobbit: Uma Jornada Inesperada", "Guardiões da Galáxia"],
    Drama: ["O Curioso Caso de Benjamin Button", "A Teoria de Tudo", "O Jogo da Imitação"],
    Ação: ["Batman: O Cavaleiro das Trevas", "Gladiador", "Mad Max: Estrada da Fúria"],
    Romance: ["Titanic", "Diário de uma Paixão", "Um Amor para Recordar"]
  },
  16: {
    Fantasia: ["Harry Potter e as Relíquias da Morte: Parte 1", "Harry Potter e as Relíquias da Morte: Parte 2", "O Senhor dos Anéis: O Retorno do Rei"],
    Aventura: ["Matrix", "Interestelar", "Inception"],
    Drama: ["Clube da Luta", "Cisne Negro", "Réquiem para um Sonho"],
    Ação: ["Logan", "John Wick", "Deadpool"],
    Romance: ["Efeito Borboleta", "Amor à Flor da Pele", "Me Chame pelo Seu Nome"]
  }
};

function setup() {
  createCanvas(800, 600);
  textSize(18);
  inputAge = createInput('');
  inputAge.position(20, 60);
  
  createP("Selecione a categoria de filme que você gosta").position(20, 80);
  
  categories.forEach((category, index) => {
    checkboxes[index] = createCheckbox(category, false);
    checkboxes[index].position(20, 120 + index * 30);
  });

  recommendButton = createButton('Recomendar Filme');
  recommendButton.position(20, 300);
  recommendButton.mousePressed(recommendMovie);

  recommendation = createP('');
  recommendation.position(20, 350);
}

function recommendMovie() {
  let age = int(inputAge.value());
  let selectedCategories = checkboxes.filter(cb => cb.checked()).map(cb => cb.value());

  let possibleMovies = [];

  if (age >= 16) {
    selectedCategories.forEach(cat => {
      if (movies["16"][cat]) {
        possibleMovies = possibleMovies.concat(movies["16"][cat]);
      }
    });
  } else if (age >= 14) {
    selectedCategories.forEach(cat => {
      if (movies["14"][cat]) {
        possibleMovies = possibleMovies.concat(movies["14"][cat]);
      }
    });
  } else if (age >= 12) {
    selectedCategories.forEach(cat => {
      if (movies["12"][cat]) {
        possibleMovies = possibleMovies.concat(movies["12"][cat]);
      }
    });
  } else if (age >= 10) {
    selectedCategories.forEach(cat => {
      if (movies["10"][cat]) {
        possibleMovies = possibleMovies.concat(movies["10"][cat]);
      }
    });
  } else {
    selectedCategories.forEach(cat => {
      if (movies["livre"][cat]) {
        possibleMovies = possibleMovies.concat(movies["livre"][cat]);
      }
    });
  }

  // Remover duplicatas
  possibleMovies = [...new Set(possibleMovies)];

  if (possibleMovies.length > 0) {
    let randomMovie = random(possibleMovies);
    recommendation.html(`Recomendação de Filme: ${randomMovie}`);
  } else {
    recommendation.html('Nenhum filme disponível para as categorias selecionadas.');
  }
}

function draw() {
  background(220);
  text('Qual é a sua idade?', 20, 40);
}
