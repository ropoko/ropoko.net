---
title: Guia introdutório para Linux
description: wip
date: 2023/01/17
tag: ubuntu, linux, programming
---

Oi, nesse post quero divagar um pouco sobre Linux, e quebrar alguns preconceitos que podem ter surgido ao longo do caminho.

Se você pesquisou por esse tema, vou entender que já possui certo conhecimento em informática no geral e que está cogitando em mudar seu sistema operacional ou então já o utiliza.

Caso você esteja curioso, porém não participa da área técnica, aqui vai uma breve introdução:

De maneira simplista, dizemos que Linux, trata-se de uma parte de software chamada _**Kernel**_, esse software é responsável por conectar hardware (físico) e software (lógico) - dessa maneira, quando você conecta o mouse ou algum dispositivo usb no seu computador, ele é o responsável por capturar essa informação.
Para podermos instalar o Linux no nosso computador, é necessário que haja uma outra camada de software "por cima", chamada _**sistema operacional**_, que além de disponibilizar uma variedade de ferramentas úteis também vai permitir que possamos utilizar outros programas, que consequentemente vão depender do gerenciamento do disco, RAM, etc. realizado pelo kernel.

Como sistemas operacionais, podemos listar alguns: o próprio **Windows**, o caro **MacOS** e o mais famoso utilizando Linux, **Ubuntu**.

Porém utilizando Linux, temos muitos outros: Ubuntu, Fedora, Mint, Arch, Suse ... E isso só é possível pois o Linux é um sistema open-source (código aberto), o que significa que todo o código para a construção desse sistema pode ser visto por qualquer pessoa, nesse caso, o código está disponibilizado [aqui](https://github.com/torvalds/linux), e por isso, utilizando essa base, muitos sistemas são criados.

e ai entra a pergunta:

# Como escolher o sistema operacional?
Com isso surgem outras perguntas que devem ser respondidas antes:

*Nota: De agora em diante será considerado apenas sistemas operacionais utilizando Linux.

Um ponto importante também, é que no universo linux, os diferentes sistemas operacionais que utilizam linux, são chamados de _**distribuições**_ ou só _**distros**_.

- Existe diferença de um sistema operacional para outro?

## Diferenças sobre o lançamento de versões
Existem dois tipos de lançamento de versões principais:

### Versão Contínua (Rolling Realease)
São os sistemas que não possuem grandes atualizações, por exemplo:

- Windows necessita de uma grande atualização da versão 10 para 11, ocorrendo uma grande quantidade de alterações que impactam o funcionamento do sistema, dessa forma **NÃO** pode ser considerado uma versão contínua.

Sistemas que possuem esse modelo de versão contínua, recebem mais atualizações que os modelos de versão padrão, pois embora há um maior número de atualizações, praticamente todos os dias, como é o caso do Arch Linux, por exemplo, o tamanho das atualizações são menores, mas caso você não atualize constantemente, elas vão se acumular.

**Vantagens:**
- Sempre terá as versões mais atuais do sistema
- Não precisa se preocupar com o lançamento de novas versões, visto que só há uma
- Caso em uma atualização, receba algum pacote com bugs ou falhas, a correção pode vir mais rapidamente em outra atualização

**Desvantagens:**
- Por sempre estar na última versão, está mais suscetível a receber atualizações que venham com alguma falha ou bug, ou seja, não há estabilidade
- Mais propício a ter erros de incompatibilidade de pacotes

Algumas distros que seguem esse modelo: openSUSE Tumbleweed, Arch Linux, Manjaro, Solus

### Versão Padrão (Standard Release)
Basicamente sistemas que recebem grandes atualizações e possuem diferenças de versões, como por exemplo o Windows, que possui versões 7, 8, 10, 11.

**Vantagens:**
- São mais estáveis, pois geralmente, as atualizações que demoram mais a chegar, possuem mais tempo para correção de bugs
- Há uma maior garantia de compatibilidade entre pacotes, e um menor número de bugs, pois não são atualizados tão frequentemente
- Possuem versões LTS, que garantem suporte durante anos

**Desvantagens:**
- Para ter acesso a última versão de pacotes, terá que atualizar manualmente

Algumas distros que seguem esse modelo: Ubuntu, Elementary, Debian

## Relacionado a pacotes
De forma simplificada, entenda pacotes como "programas".

Dessa forma, cada distro possui um gerenciador próprio para gerenciar seus programas e cada um vai possuir suas especificidades.

> As informações sobre quantidade de pacotes foram retiradas [daqui](https://en.wikipedia.org/wiki/Comparison_of_Linux_distributions#Package_management_and_installation).

### APT
A começar por um dos mais famosos (também por ser utilizado no Ubuntu - distro mais famosa), possui comandos muito fáceis de serem utilizados no terminal
e possui uma quantidade de pacotes disponíveis muito vasta, em torno de 100mil.

Vale dizer que por esse ser um gerenciador muito famoso presente em distros como: Ubuntu, Debian, ElementaryOs, Mint, a maioria delas possui um programa próprio para instalação gráfica, ou seja, **não precisando ser necessário conhecer sobre comandos no terminal**.

Também, caso encontre algum programa que não esteja disponível via gerenciador de pacotes, como por exemplo o discord, perceba que ele está disponível no formato _**.deb**_, nesse caso, também conseguimos instalar esse pacote, pois o gerenciador é compatível com este formato, e dessa forma, cada gerenciador possui um formato de específico de pacote.

<img src="images/discord-deb.png" class="image" alt="Selecionado a opção de arquivo .deb para baixar o discord" />

e como exemplo de instalar um aquivo .deb no ubuntu:

<img src="images/install-deb.png" class="image" alt="escolhendo a opção de abrir com outras aplicações" />

- basta clicar com o botão direito e abrir com outra aplicação, no caso, o software install.

<img src="images/software-install.png" class="image" alt="Selecionado a loja de software do ubuntu" />

isso abrirá a central de softwares do Ubuntu, e então basta clicar em instalar.

### Pacman
Um gerenciador também muito conhecido, o pacman, é utilizado em distros como Arch Linux, Manjaro, etc.

Nesse caso, temos por exemplo o [AUR](https://aur.archlinux.org/) - Repositório de pacotes gerenciado e alimentado pela comunidade que pode receber atualizações e novos pacotes de qualquer usuário, o que traz consigo uma grande quantidade de pacotes, o que é positivo, mas por outro lado, traz também possibilidades do pacote possuir conteúdo malicioso.

Caso você vá pesquisar sobre o Arch Linux, vai ver em vários lugares que trata-se de um sistema pouco amigável a novos usuários e difícil de fazer as coisas funcionarem, nesse caso, o sistema por si só é pensado para usuários mais avançados que já possuem certo conhecimento, então a instalação de pacotes basicamente se restringe ao uso do terminal.

Por outro lado, temos no Manjaro, que também utiliza o gerenciador Pacman, similar ao que temos no Ubuntu, uma aplicação gráfica na qual podemos instalar e gerenciar aplicativos no geral. E quando digo que "temos uma aplicação X", quero dizer que ela já vem instalada por padrão, mas sempre existe a possibilidade de instalar um programa de terceiros que cumpre essa função, até mesmo caso você queira substituir o que já veio pré-instalado.

Apenas para esclarecer, os pacotes que vem do **AUR** são mantidos pela comunidade, mas também existe a possibilidade de usar apenas os [pacotes oficiais](https://archlinux.org/packages/) caso você prefira.

### Snap
Snap é um software para você criar aplicações e publicar pacotes que podem ser usados em uma vasta quantidade de distribuições Linux, dessa maneira, de certa forma "inovou" na maneira que desenvolvedores criampublicam softwares para sistemas linux, pois se antes precisavam criar pacotes para vários gerenciadores de pacotes, para então poder ter seu software funcionando em diferentes sistemas, agora precisam somente empacotar seu software como "snap" e ele já garante que vai funcionar corretamente na maioria dos sistemas.

Por ser criado pela mesma empresa criadora do Ubuntu - [Canonical](https://canonical.com/), ao instalá-lo, você já possui automaticamente acesso aos pacotes snap, não precisando adicioná-los manualmente. No caso de ser um sistema no qual esses pacotes não venham por padrão, você pode seguir esse [passo a passo](https://snapcraft.io/docs/installing-snapd) - basta escolher qual o sistema que você está usando e aplicar os comandos no terminal.

Você também pode ver quais softwares estão disponíveis através da loja [Snapcraft Store](https://snapcraft.io/store).

### Flatpak
Flatpak assim como os pacotes Snap permitem você usar os mesmos pacotes em diferentes sistemas.

Você pode pesquisar os aplicativos [aqui](https://flathub.org/home).

Vale dizer também que você pode utilizar Snaps e Flatpaks em um mesmo sistema, visto que são coisas diferentes.

---

Por fim, não temos como dizer que um sistema é melhor que outro, cada um servirá como ferramenta para você realizar as tarefas que precisa realizar, vai de você entender qual oferece os recursos que melhor atenda suas necessidades.

Também é importante destacar, que para usuários avançados e com conhecimento técnico, qualquer sistema vai servir, já que pode ser customizado da maneira que bem entender, mas trazendo aqui para usuários iniciantes, a escolha de um sistema deve ser vista como aquele que já vem com as ferramentas que você vai precisar, sem precisar de muitos "passo a passo" e tutoriais para começar a usar.

# Praticidade e dia a dia
Uma vez escolhido o sistema operacional, vamos agora passar por tarefas comuns do dia a dia e entender como funciona o processo.

Continuando, para este tópico vou considerar o sistema Ubuntu, por ser o que mais utilizado e consequentemente o que mais possui materiais de estudo e tutoriais por aí.

**Nota:** Não vou passar pelo processo de instalação, uma vez que existem diversos tutoriais por ai que explicariam melhor que eu jamais conseguiria. Como indicação, sugiro [esse do Diolinux](https://www.youtube.com/watch?v=6GIAtOlXLQU) - embora seja antigo, o passo a passo ainda é o mesmo, e eventualmente qualquer passo que não esteja no vídeo, vale uma pesquisa a parte.

<img src="images/ubuntu.png" class="image" alt="interface inicial pós-instalação do ubuntu" />

Ao entrar a primeira vez no sistema, podemos ver que alguns aplicativos já vem instalados, como:

- firefox
- thunderbird (gerenciador de e-mail)
- rhythmbox (gerenciador de músicas e rádio)
- LibreOffice (para trabalhar com documentos - similar ao pacote office)
- Loja de software

Alguns utilitários como:

- Calculadora
- Gerenciador de senhas
- Gerenciador de discos
- Aplicativos de Backup

Por fim, mas não menos importante, alguns jogos como paciência e campo minado.

## Navegar na internet
Para navegar na internet, podemos utilizar o firefox que já vem pré-instalado, mas caso esse não seja o seu navegador preferido, basta instalar o desejado.

Ao pesquisar por exemplo "Chrome" na loja de softwares, vai perceber que o "Google Chrome" não irá aparecer e pode aparecer somente uma outra versão "Chromium", que se trata da versão de código aberto do navegador chrome, e que na prática não possui nenhuma diferença da versão que você deve estar acostumado.

Para baixar o **_"verdadeiro"_** Chrome, basta ir no site e escolher a versão **.deb**.

<img src="images/chrome-linux.png" class="image" alt="Instalado google chrome no ubuntu a partir do arquivo .deb" />

<br />
<br />

Uma vez baixado, para instalar basta seguir [os mesmos passos mostrados antes](#apt).

O mesmo segue para qualquer outra aplicação que você precisar instalar através do arquivo **.deb**.

## Baixar/Excluir programas

## Aplicativo de Música

## Manipular documentos


# Esforço de migrar
## Já acostumado ao windows

# Programas indisponíveis

# Games



# Referências

## Porquê usar Linux?
https://pt.tipsandtrics.com/which-linux-package-manager-763427

https://diolinux.com.br/editorial/o-que-leva-um-novo-usuario-desistir-do-linux.html

https://diolinux.com.br/sistemas-operacionais/5-coisas-que-fazem-v0oce-desistir-do-linux.html

https://blog.4linux.com.br/por-que-usar-sistemas-operacionais-linux/

## Relacionado ao diferente tipo de lançamento de versões
https://pt.begin-it.com/6098-linux-distribution-basics-rolling-releases-vs.-standard-releases

## Relacionado a pacotes

https://en.wikipedia.org/wiki/Comparison_of_Linux_distributions

https://blog.packagecloud.io/5-best-linux-package-managers/

https://www.linode.com/docs/guides/linux-package-management-overview/

https://snapcraft.io/about
