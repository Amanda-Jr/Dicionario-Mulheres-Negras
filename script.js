function carregaDicionario(){
    var nome = prompt ("Qual seu nome?")
    alert(`Olá, ${nome}! Venha conhecer um pouco dessas mulheres incríveis!`)
    var biografias = [
        {
            nome: "Angela Davis", 
            imagem:"./img/angela-davis.png",
            descricao:"Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos.", 
            citacao:"Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar.",
            fonte: "https://www.geledes.org.br/tereza-de-benguela-uma-heroina-negra/"},
        
        {
            nome: "Carolina Maria de Jesus", 
            imagem:"https://i.postimg.cc/Fdc5VKMJ/carolina-de-jesus.png",
            descricao:"Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.", 
            citacao:"Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é."},
        {
            nome: "Conceição Evaristo", 
            imagem:"https://i.postimg.cc/Z9XzNNMS/conceicao-evaristo.png",
            descricao:"Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.", 
            citacao:"O importante não é ser o primeiro ou primeira, o importante é abrir caminhos."},
        {
            nome: "Lelia Gonzalez", 
            imagem:"https://i.postimg.cc/2q1f3GTG/lelia-gonzalez.png",
            descricao:"Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira. Ajudou a fundar instituições como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua militância em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas eleições seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.", 
            citacao:"A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora. "},
        {
            nome: "Marielle Franco", 
            imagem:"https://assets.website-files.com/606b90b535dd7b153dcbef25/6088c25db98a486e81ab47ef_Franco_Marielle-p-800.jpeg",
            descricao:"Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018, foi assassinada a tiros.", 
            citacao:"Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?"},
        {
            nome: "Rosa Parks", 
            imagem:"https://i.postimg.cc/K1q2Zw74/rosa-parks.png",
            descricao:"Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana, símbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1º de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no ônibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.", 
            citacao:"Você nunca deve ter medo do que está fazendo quando está certo."},
        {
            nome: "Enedina Alves Marques",
            imagem:"https://s2.glbimg.com/BJMf311uuhzqXMHLwDBQELfFBb8=/0x0:400x400/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/4/p/f7nCQSQdAewmRxsKGgCA/enedina-alves-marques-capa-1-.jpg",
            descricao: "Enedina Alves Marques nasceu em 1913, na cidade de Curitiba, Brasil. Ela trabalhou como empregada doméstica e babá para terminar o ensino médio e tornou-se professora depois de se formar. Cursou engenharia civil na Universidade Federal do Paraná em 1940. Entretanto, durante a faculdade, Marquez foi hostilizada e ignorada por alguns de seus professores e colegas - principalmente por conta dos preconceitos da sociedade. Apesar de enfrentar discriminação ao se formar em um campo dominado por homens brancos, Marques persistiu e foi a única mulher ao lado de 32 alunos do sexo masculino a se formar em 1945. Iniciou a carreira na Secretaria Estadual de Transportes e Obras Públicas como auxiliar de engenharia e transferiu-se para a Secretaria Estadual de Águas e Energia Elétrica do Paraná, onde contribuiu com projetos de grande porte, como o desenvolvimento da Usina Hidrelétrica do Paraná em vários rios da região, o levantamento topográfico e a construção da maior hidrelétrica subterrânea, a Usina Capivari-Cachoeira. Em reconhecimento às suas contribuições para o Paraná e para a engenharia, seu nome foi inscrito no Memorial à Mulher junto com outras 53 mulheres pioneiras brasileiras. Uma rua de um bairro de Curitiba recebeu o nome de Rua Engenheira Enedina Alves Marques em homenagem a ela. E em 2006 foi fundado o Instituto de Mulheres Negras Enedina Alves Marques, em Maringá, Paraná.",
            citacao:" "},
        {
            nome:"Harriet Tubman",
            imagem:"https://www.famousbirthsdeaths.com/wp-content/uploads/2016/04/harriet-tubman-bio-net-worth-facts.jpg",
            descricao:"Harriet Tubman , foi uma americana abolicionista, humanitária, olheira armada e espiã do Exército dos Estados Unidos durante a Guerra Civil Americana. Nascida durante a escravidão, Tubman escapou e, posteriormente, fez cerca de treze missões para resgatar cerca de setenta famílias e amigos escravizados, usando a rede de ativistas abolicionistas e casas seguras conhecida como Underground railroad. Mais tarde, ela ajudou o abolicionista John Brown a recrutar homens para a sua invasão em Harpers Ferry. Depois da guerra, ela ainda se engajou em causas que buscavam garantir a melhoria de vida dos afro-americanos. Defendeu também a causa sufragista do movimento feminista e liderou obras de caridade. Passou os últimos anos de sua vida em Auburn, local onde faleceu no dia 10 de março de 1913. O funeral de Harriet contou com honrarias militares.",
            citacao:"Libertei mil escravos. Podia ter liberto outros mil se eles soubessem que eram escravos.",
        },
        {
            nome:"Tereza de Benguela",
            imagem:"https://static.wixstatic.com/media/c39ebe_bc9d192ecf33402baa9a11d28b66f89b~mv2.jpg/v1/fit/w_300%2Ch_300%2Cal_c%2Cq_80/file.jpg",
            descricao:"“Rainha Tereza”, como ficou conhecida em seu tempo, viveu na década de XVIII no Vale do Guaporé, no Mato Grosso. Ela liderou o Quilombo de Quariterê após a morte de seu companheiro, José Piolho, morto por soldados. Segundo documentos da época, o lugar abrigava mais de 100 pessoas, com aproximadamente 79 negros e 30 índios. Sua liderança se destacou com a criação de uma espécie de Parlamento e de um sistema de defesa. Ali, era cultivado o algodão, que servia posteriormente para a produção de tecidos. Havia também plantações de milho, feijão, mandioca, banana, entre outros. O quilombo resistiu da década de 1730 ao final do século. Tereza foi morta após ser capturada por soldados em 1770 – alguns dizem que a causa foi suicídio; outros, execução ou doença.",
            citacao:" ",
        },

    ] //chaves duplas pois é um conjunto de obj, se fosse um obj não precisaria
    

    var content = document.getElementById("content")

    function OrdemNome(array){
        const novoArray = [...array]
        return novoArray.sort((a,b) => a.nome.localeCompare(b.nome))
    }

    function OrdemChave(array, key){
        const novoArray = [...array]
        return novoArray.sort((a,b) => a[key].localeCompare(b[key]))
    }

    var BioOrdenada = OrdemChave(biografias, "nome")

    for(var item in BioOrdenada){
        content.innerHTML +=
        '<div class="card">' + 
        '<img src="' + BioOrdenada[item].imagem + '"/>' +
        '<details>' + 
        '<summary>' + BioOrdenada[item].nome + '</summary>' +
        '<p>' + BioOrdenada[item].descricao + '</p>' +
        '<blockquote>' + '<q>' + BioOrdenada[item].citacao + '</q>' + '</blockquote>' +
        '</details>' + 
        '</div>'
    }

}

carregaDicionario()
