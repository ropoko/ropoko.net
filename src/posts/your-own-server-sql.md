---
id: 0
title: Crie e hospede seu próprio servidor SQL
date: '24/05/2022'
tags: ['raspberry', 'mySQL', 'docker', 'ngrok']
---

Antes de começar, gostaria de agradecer pelo interesse em visitar meu blog e ler esse meu primeiro post :D

Mas, direto ao post, pois vou falar mais sobre a dinâmica desse blog e do tipo de conteúdo que quero publicar futuramente em outro post.

# Sobre o projeto
**O quê vamos fazer?**

No Docker, vamos baixar uma imagem de MySql e então colocar para rodar em uma raspberry (3, model b - 1Gb ram), depois, vamos criar um bot no discord (utilizando discord.js) que utilizando o [ngrok](https://ngrok.com/), irá disponibilizar uma URL para nossa banco de dados, dessa forma, nos possibilitando utilizá-lo em qualquer lugar.

Porém, o ngrok nos gera uma URL aleatória, por utilizarmos o plano free, e dessa forma sempre que formos reiniciar nosso "servidor", ele irá gerar uma nova URL.

Para Resolver esse problema, o bot no discord sempre enviará em um chat determinado a nova URL, permitindo então que todas as pessoas que estejam utilizando nosso banco de dados possa utilizar sempre.

# Instalando o Docker

> Para acessar a raspberry vou conectar pelo terminal via ssh, também para este tutorial é entendido que você possui certa familiaridade com a linha de comando.

Uma vez que estou utilizando a raspberry, posso utilizar o script para instalar.

```bash
	# baixa o script
	$ curl -fsSL https://get.docker.com -o get-docker.sh

	# roda o script
	$ sudo sh get-docker.sh

	# adiciona o usuário (no caso - pi) ao grupo do docker
	$ sudo usermod -aG docker pi

	# verificar que está funcionando
	$ docker run hello-world
```

Após rodar os comandos acima, caso não tenha conseguido rodar o hello-world, talvez seja necessário um reboot, caso contrário você deve ter se deparado com essa mensagem mais ou menos:

![](/posts/server-sql/docker-hello.png)

# Instalando o MySQL
Uma vez o docker rodando, basta pegar a [imagem do MySQL](https://hub.docker.com/_/mysql) e rodar o nosso banco.
<!--
```bash
	$ docker run --rm --name mysql-teste -e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest

	# esse é para processadores arm, que é o caso da rasp
	$ docker run --rm --name mysql-teste -e MYSQL_ROOT_PASSWORD=secret-key -p 3306:3306 -d arm64v8/mysql:oracle
``` -->

---
 **!! aqui vai ter um codigo**

---

## Testando a conexão
Como gerenciador de banco de dados vou utilizar o [beekeper](https://www.beekeeperstudio.io/).

Agora, basta conectar informando o usuário (root) e senha que foi definida no parâmetro que rodamos (MYSQL_ROOT_PASSWORD), também a porta padrão, 3306.

![](/posts/server-sql/db-connection.png)

ao clicar em "test", a conexão deve estar correta, caso tenha algum problema verifique se o mysql está rodando corretamente e reveja os passos anteriores.

# Criando o bot no discord
em criação ...

# Criação do script de inicialização
em criação ...

## Utilizando o ngrok
em criação ...

# Conclusão
em criação ...
