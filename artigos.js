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
    titulo: "Chegada nos balticos",
    excerto: "Em 1340, uma flotilha inglesa  dos Monges Calvos partiu do porto de Newcastle upon Tyne, no norte da Inglaterra, em direção a... ",
    conteudo: [
      "Os monges conversaram com vários comerciantes germânicos que viajavam por essas regiões.",
      "Descobriram então informações úteis sobre o governo nos bálticos e sobre as regiões a leste da Noruega, território que era Monge calvado desde o fim da Guerra Norueguesa.",
      "Aparentemente, o rei sueco-norueguês(ele governava os dois países) conquistou territórios na costa da Finlândia, um território ao norte até então desconhecido pelos monges e sobre uma cidade chamada Tukur nessa tal Finlândia. Ouviram que essa terra era separada dos bálticos(países) por um curto corpo d´agua além da Estônia, outro território um pouco menos a norte até então desconhecido.",
      "Descobriram também que a região era controlada pela Ordem da Livônia, um ramo da Ordem Teutônica. Essa informação viria a ser de extrema importância para os monges quando fossem manter sua influência nessa região.",
      "Por fim, ouviram falar de uma tal de República de Novgorod, a nordeste, dita como um grande estado eslavo influente na região e que conflituava com o Principado da Moscóvia. A partir daí, a expedição dos calvos já tinha seus novos destinos traçados."
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
