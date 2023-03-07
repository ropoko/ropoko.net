---
title: 'Guia introdutório para Linux'
date: '17/01/2023'
updated: '23/02/2023'
tags: ['ubuntu', 'linux', 'programming']
---

Oi, nesse post quero divagar um pouco sobre Linux, e quebrar alguns preconceitos que podem ter surgido ao longo do caminho.

Se você pesquisou por esse tema, vou entender que já possui certo conhecimento em informática no geral e que está cogitando em mudar seu sistema operacional ou então já o utiliza.

Caso você esteja curioso, porém não participa da área técnica, aqui vai uma breve introdução:

De maneira simplista, dizemos que Linux, trata-se de uma parte de software chamada _**Kernel**_, esse software é responsável por conectar hardware (físico) e software (lógico) - dessa maneira, quando você conecta o mouse ou algum dispositivo usb no seu computador, ele é o responsável por enviar essa informação para o software.
Para podermos instalar o Linux no nosso computador, é necessário que haja uma outra camada de software "por cima", chamada _**sistema operacional**_, que além de disponibilizar uma variedade de ferramentas úteis também vai permitir que possamos utilizar outros programas, que consequentemente vão depender do gerenciamento do disco, RAM, etc. realizado pelo kernel.

Como sistemas operacionais, podemos listar alguns: o próprio **Windows**, o caro **MacOS** e o mais famoso utilizando Linux, **Ubuntu**.

Porém utilizando Linux, temos muitos outros: Ubuntu, Fedora, Mint, Arch, Suse ...

e ai entra a pergunta:

# Como escolher o sistema operacional?
Com isso surgem outras perguntas que devem ser respondidas antes:

*Nota: De agora em diante será considerado apenas sistemas operacionais utilizando Linux.

Um ponto importante também, é que no universo linux, os diferentes sistemas operacionais que utilizam linux, são chamados de _**distribuições**_ ou só _**distros**_.

- Existe diferença de um sistema operacional para outro?

## Diferenças sobre o lançamento de versões

## Relacionado a pacotes
De forma simplificada, entenda pacotes como "programas".

Dessa forma, cada distro possui um gerenciador próprio para gerenciar seus programas e cada um vai possuir suas especificidades. Vou especificar somente sobre dois gerenciadores que são os quais já usei durante um certo tempo.

> As informações sobre quantidade pacotes foram retiradas [daqui](https://en.wikipedia.org/wiki/Comparison_of_Linux_distributions#Package_management_and_installation).

### APT
A começar por um dos mais famosos (também por ser utilizado no Ubuntu - distro mais famosa), possui comandos muito fáceis de serem utilizados no terminal
e possui uma quantidade de pacotes disponíveis muito vasta, em torno de 100mil.

Vale dizer que por esse ser um gerenciador muito famoso presente em distros como: Ubuntu, Debian, ElementaryOs, Mint, a maioria delas possui um programa próprio para instalação gráfica, ou seja, **não precisando ser necessário conhecer sobre comandos no terminal**.

Também, caso encontre algum programa que não esteja disponível via gerenciador de pacotes, como por exemplo o discord, perceba que ele está disponível no formato _**.deb**_, nesse caso, também conseguimos instalar esse pacote, pois o gerenciador é compatível com este formato, e dessa forma, cada gerenciador possui um formato de específico de pacote.

<img src="/posts/discord-deb.png" class="image" />

e como exemplo de instalar um aquivo .deb no ubuntu:

<img src="/posts/install-deb.png" class="image" />

- basta clicar com o botão direito e abrir com outra aplicação, no caso, o software install.

<img src="/posts/software-install.png" class="image" />

isso abrirá a central de softwares do Ubuntu, e então basta clicar em instalar.

### Pacman
Um gerenciador também muito conhecido, o pacman, é utilizado em distros como Arch Linux, Manjaro, etc.

Nesse caso, temos por exemplo o [AUR](https://aur.archlinux.org/) - Repositório de pacotes gerenciado e alimentado pela comunidade que pode receber atualizações e novos pacotes de qualquer usuário, o que traz consigo uma grande quantidade de pacotes, o que é positivo, mas por outro lado, traz também possibilidades do pacote possuir conteúdo malicioso.

Apenas para esclarecer, os pacotes que vem do **AUR** são mantidos pela comunidade, mas também existe a possibilidade de usar apenas os pacotes "oficiais" caso você prefira.

Caso você vá pesquisar sobre o Arch Linux, vai ver em vários lugares que trata-se de um sistema pouco amigável a novos usuários e difícil de fazer as coisas rodarem, nesse caso, o sistema por si só é pensado para usuários mais avançados que já possuem certo conhecimento, então a instalação de pacotes basicamente se restringe ao uso do terminal.

Já adiantando um outro ponto que será abordado ao longo deste texto, os sistemas linux são completamente customizáveis, dessa forma, você consegue baixar programas para que então nesse cenário de download de pacotes, você consiga instalar os pacotes através de uma interface gráfica.

Por outro lado, temos por exemplo no Manjaro, similar ao que temos no Ubuntu, uma aplicação gráfica na qual podemos instalar e gerenciar aplicativos no geral.

# Praticidade


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
