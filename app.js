const personagens = [
  {
    id: 1,
    name: "Feyre Archeron",
    img:
      "https://i.pinimg.com/originals/de/6f/b5/de6fb5569d9d914e47ca4636116068bd.jpg",
    title: "Grã-Senhora da Corte Noturna",
    info:
      "Era originalmente uma mortal, mas foi ressuscitada como Grã-Feérica pelos sete Grão-Senhores após sua morte Sob a Montanha. Por um tempo, Feyre morou na Corte dos Sonhos em Velaris após deixar a Corte Primaveril, mas retornou à Corte Primaveril depois dos eventos ocorridos em Hybern em Corte de Névoa e Fúria. Com a conclusão da trilogia, Feyre mais uma vez retorna para Velaris, governando a Corte Noturna como Grã-Senhora junto com Rhysand, seu parceiro, marido, e Grão-Senhor da Corte Noturna.",
  },
  {
    id: 2,
    name: "Nestha Archeron",
    img:
      "https://personaunesp.com.br/wp-content/uploads/2021/06/acosf4.jpg",
    title: "Irmã Archeron mais velha com poderes do próprio caldeirão",
    info:
      "Nesta é descrita como sendo devastadoramente bonita. Ela tem o mesmo cabelo-castanho dourado de suas irmãs e características definidas. Seus olhos azul-acinzentados são cheios de uma crueldade poderosa e astuta que ela passou anos aperfeiçoando. Ela também tem uma postura impecável e é muito alta, com um corpo esbelto. Ela é sempre vista em vestidos, tanto quando a família dela era pobre quanto depois de sua riqueza ter retornado. Nestha é Sequestrada por Ianthe junto com Elain, e as duas são colocadas no caldeirão e transformadas em Grã-Feéricas, a Mando do Rei de Hybern.",
  },
  {
    id: 3,
    name: "Elain Archeron",
    img:"https://assets.mycast.io/characters/elain-archeron-4875272-normal.jpg?1645382928",
    title: "Irmã Archeron do meio com poderes de clarividência dados pelo caldeirão",
    info:"Elain é a Segunda Irmã mais Velha de Feyre, vivia com seu pai e suas Irmãs, Nestha e Feyre. Nestha esperava que Elain conseguisse um bom marido rico para salvá-los da pobreza. Depois que Feyre vai embora com Tamlin, o restante da família é sustentada por ele. Elain fica comprometida com Graysen (Humano), Feyre retorna a nova casa da família com seus amigos. Elain fica claramente desconfortável com a feérica mas ela os recebe de qualquer maneira. Mais tarde, ela é Transformada em Feérica por Hybern, onde é dito que ela Possui um Parceiro. Depois disso, Quando Graysen descobre, ele rompe as relações com Elain.",
  },
  {
    id: 4,
    name: "Rhysand",
    title:"Grã-Senhor da Corte Noturna",
    img:
      "https://i.pinimg.com/originals/9d/66/da/9d66da98a0d03f922bdbe7823b54f5f3.jpg",
    title: "Grã-Senhor da Corte Noturna",
    info: "Rhysand (pronúncia: Ree-sand) é o Grão-Senhor mais poderoso da história e o atual governante da Corte Noturna, ao lado de Feyre. Ele é incrivelmente bonito e parece ser arrogante, descuidado e frio no início. Ele aparece pela primeira vez em Corte de Espinhos e Rosas, quando salva Feyre de três feéricos durante o festival Calanmai. Não muito tempo depois, ele ajuda Feyre inúmeras vezes durante suas provações, e até lutou contra Amarantha para salvá-la da morte. Quando ela foi ressuscitada, seu laço de parceria se atou, mas ele o escondeu dela com medo de que a assustasse. No final do segundo livro, Feyre aceitou o laço e ela se tornou a Grã-Senhora da Corte Noturna.",
  },
  {
    id: 4,
    name: "Cassian",
    img:
      "http://pm1.narvii.com/7449/f3f66820c9aeb764fff12fcd2d8542fcdb4ba56fr1-735-1072v2_00.jpg",
     title:"Mestiço sendo meio Illyriano e General do exército da Corte Noturna",
     info:"Cassian é o filho bastardo de uma lavadeira de um campo Illyriano e um guerreiro desconhecido. Assim que ele conseguiu andar, foi enviado para um campo de treinamento distante. Cassian recorreu a desafiar outras crianças para lutar e receber suas roupas como prêmio. Quando Rhysand foi levado ao mesmo campo de treinamento, Cassian lutou por sua nova roupa limpa, causando-lhes três chicotadas cada, que era considerado um incentivo para continuar lutando pelos padrões Illyrianos. Rhysand não aceitou bem, entendendo o que realmente significava ser cuidado, e acordou Cassian no meio da noite para levá-lo à sua casa. A mãe de Rhysand pegou Cassian e forneceu-lhe uma casa e um abrigo depois disso.",
  },
  {
    id: 5,
    name: "Azriel",
    title:"Encantador de Sombras, mestre-espião de Rhysand",
    img: 
      "https://static.wikia.nocookie.net/cortedeespinhoserosas/images/d/d5/Azriel_by_Morgana0anagrom_02.jpg/revision/latest/scale-to-width-down/349?cb=20190718024544&path-prefix=pt-br",
    info:"Azriel é membro da Corte Noturna e parte do Círculo Íntimo de Rhysand. Ele é amigo de infância dele e de Cassian. Ele é um Encantador de Sombras, mestre-espião de Rhysand, o Grão-Senhor da Corte Noturna. Ele é considerado um dos IIIyrianos mais poderosos da história de Prythian ao lado de Rhysand e Cassian.",
  },
  {
    id: 6,
    name: "Amren",
    title: "Criatura desconhecida, ex-detenta da Prisão e imediata da Corte Noturna",
    img:
      "https://static.wikia.nocookie.net/cortedeespinhoserosas/images/5/5a/Amren_by_Morgana0anagrom_02.jpg/revision/latest?cb=20170908023807&path-prefix=pt-br",
    info: "Amren é uma ex-prisioneira, que teria escapado após alguns milênios na prisão. Ela é uma criatura extremamente poderosa e antiga de origem desconhecida que, quando chegou a Prythian, de outro mundo, acabou presa no corpo de uma grã-feérica.",
  },
  {
    id: 7,
    name: "Mor",
    title: "Terceira na linha de sucessão da Corte Noturna e membro do círculo íntimo de Rhysand",
    img:
      "https://acotarbrasil.com.br/wp-content/uploads/2021/08/Merwild_Mor-350x550-1.png",
    info: "Morrigan, também conhecida como Mor, é membro do Círculo Íntimo de Rhys e a terceira no comando da Corte Noturna. Ela supervisiona a dinâmica entre a Corte dos Pesadelos e a Corte dos Sonhos, e governa tanto Velaris quanto a Cidade Escavada. Sua família costumava governar o Norte antes da família de Rhysand.",
  },
];

// selecionar items
const personagem = document.getElementById('personagem');
const img = document.getElementById('person-img');
const title = document.getElementById('title');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// mostrar personagem baseado no item
function showPerson(person) {
  const item = personagens[person];
  img.src = item.img;
  personagem.textContent = item.name;
  title.textContent = item.title;
  info.textContent = item.info;
}

//load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = personagens[currentItem];
  img.src = item.img;
  personagem.textContent = item.name;
  title.textContent = item.title;
  info.textContent = item.info;
});

//mostrar pŕoximo personagem
nextBtn.addEventListener("click", function(){
  currentItem++;
  if (currentItem > personagens.length -1){
    currentItem = 0;
  }
  showPerson(currentItem);
});

//mostrar prev dos personagens
prevBtn.addEventListener("click", function() {
  currentItem--;
  if (currentItem < 0){
    currentItem = personagens.length - 1;
  }
  showPerson(currentItem);
});

//mostra aleatoriamente
randBtn.addEventListener("click", function () {
  randItem = currentItem
  while (randItem === currentItem) {
    randItem =  Math.floor(Math.random() * personagens.length);
  }
  showPerson(randItem);
});
