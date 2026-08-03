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
      "Em 1340, uma flotilha inglesa  dos Monges Calvos partiu do porto de Newcastle upon Tyne, no norte da Inglaterra, em direção a Riga na Livônia Medieval(atual Letônia). ",
      "Os monges conversaram com vários comerciantes germânicos que viajavam por essas regiões.",
      "Descobriram então informações úteis sobre o governo nos bálticos e sobre as regiões a leste da Noruega, território que era Monge calvado desde o fim da Guerra Norueguesa.",
      "Aparentemente, o rei sueco-norueguês(ele governava os dois países) conquistou territórios na costa da Finlândia, um território ao norte até então desconhecido pelos monges e sobre uma cidade chamada Tukur nessa tal Finlândia. Ouviram que essa terra era separada dos bálticos(países) por um curto corpo d´agua além da Estônia, outro território um pouco menos a norte até então desconhecido.",
      "Descobriram também que a região era controlada pela Ordem da Livônia, um ramo da Ordem Teutônica. Essa informação viria a ser de extrema importância para os monges quando fossem manter sua influência nessa região.",
      "Por fim, ouviram falar de uma tal de República de Novgorod, a nordeste, dita como um grande estado eslavo influente na região e que conflituava com o Principado da Moscóvia. A partir daí, a expedição dos calvos já tinha seus novos destinos traçados."
    ]
  },
  {
  titulo: "Rumo a Novgorod",
    excerto: "Após o desembarque em Riga, os monges seguiram até a cidade de Wolmar, onde contrataram um guia que...",
    conteudo: [
      "AVISO: O artigo a seguir é uma continuação do artigo \"Chegada aos Bálticos\", certifique-se de ler antes de continuar lendo este",
      "Sabe-se que após o desembarque em Riga, os monges da expedição seguiram até a cidade de Wolmar. Pouco se sabe sobre a estadia na pequena cidade, mas foi lá em que contrataram um guia que os levaria até a cidade de Novgorod.",
      "A jornada deve ter durado em torno de 12 a 17 dias, chegando até a cidade em meados de Agosto provavelmente. Havia um diário de um dos monges que participou da missão e que estava guardado no acervo de Londres, infelizmente, quase todo o material foi carbonizado e destruído no Grande Incêndio de Londres.",
      "Felizmente, temos uma boa quantidade de registros sobre Novgorod que chegaram até a Inglaterra em bom estado e que existem até hoje. A maioria é sobre o comércio entre a região e os principais membros da Liga Hanseática, mas ainda há alguns mais interessantes.",
      "Um deles fala sobre o relato de um comerciante alemão que vivia e viajava pela região já havia alguns anos, relatando que uma noite observou um pequeno vilarejo em chamas e pessoas meio baixas vagando pelo lugar.",
      "Outros relatos similares foram coletados até que pudessem falar com o Posadnik(chefe executivo da República eleito pela assembleia).",
      "Há apenas um registro existente da conversa, mas que analisado junto de outros documentos posteriores foi concluído que o chefe os contou que os pequenos vilarejos do país estavam sendo atacados por um grupo de pessoas morenas e baixas, confirmando a presença dos Dollunos naquelas terras.",
      "O.B.S: Esse texto está sujeito a possíveis alterações futuras"
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
