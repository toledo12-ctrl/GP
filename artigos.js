// Para adicionar um artigo, basta criar um novo objeto no array:
//   titulo   -> título exibido no card e no pop-up
//   excerto  -> texto curto exibido no card
//   conteudo -> array de parágrafos exibidos no pop-up
// O card e o pop-up são gerados automaticamente.
const ARTIGOS = [
  {
    titulo: "O que são os Monges Calvos? ",
    excerto: "Bem, os Monges Calvos são uma ordem secreta da espécie Homo Calvus...",
    conteudo: [
      "Bem, os Monges Calvos são uma ordem secreta da espécie *Homo Calvus*, praticamente humanos mas de cabelo verde, podendo variar de um verde mais escuro até um verde tão vivo que doi os zoí.",
      "Tecnicamente, A Ordem dos Monges Calvos(Ou só Monges Calvos) surgiu de fato em 779d.C na Inglaterra. Entretanto, contudo e todavia, esses manos já lutaram algumas vezes contra os Dollunos durante a época romana, quando eles chegaram na Terra pela primeira vez, caindo no sul da Galia(França)",
      "Nesses tempos, os Dollunos foram derrotadas e foram e-x-t-i-n-t-o-s(💀) do planeta.",
      "Infelizmente, os safados acabaram voltando em 778, dessa vez caindo em algum lugar a lesta da cidade de Durham, no Reino da Northumbria.",
      "Nessa época, a Grã-Bretanha estava sendo assolada por incursões vikings vindos da Escandinávia e da Dinamarca, o que é até irônico já que os reinos ingleses também eram vikings. Os invasores nórdicos viram os seres humanoides baixinhos como bixinhos legais e que poderiam ajuda-los em seus saques.",
      "Com o tempo, um grupo de *Homo Calvus* que viviam em York reconheceram que aquelas \"pessoas\" eram os dollunos descritos nas história da cultura calval. Os monges mais velhos armaram-se e juntaram os resto do povo calvo para combater os invasores espaciais e vikings(também invasores, só que não espacias).",
      "Com o apoio de combatentes locais, conseguiram aniquilar(💀) vários dollunos, mas diferente de alguns séculos atrás, os dollunos fugiram com os vikings para a Noruega. Mesmo assim, os calvos estavam determinados a perseguirem os baixinhos espaciais.",
      "Assim surgiu a Ordem dos Monges Calvos, que rapidamente cresceu com apoio de outros monges espalhados pelos reinos anglo-saxões."
    ]
  },
  {
    titulo: "Lorem ipsum dolor sit amet",
    excerto: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    conteudo: [
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
    ]
  },
  {
    titulo: "Lorem ipsum dolor sit amet",
    excerto: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    conteudo: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    ]
  },
  {
    titulo: "Lorem ipsum dolor sit amet",
    excerto: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    conteudo: [
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."
    ]
  },
  {
    titulo: "Lorem ipsum dolor sit amet",
    excerto: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    conteudo: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt, neque porro quisquam est."
    ]
  },
  {
    titulo: "Lorem ipsum dolor sit amet",
    excerto: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    conteudo: [
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    ]
  }
];
