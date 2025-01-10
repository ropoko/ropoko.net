---
title: Movendo objetos com Love2D
description: Nesse post vou mostrar como podemos movimentar objetos com a game engine Love2D.
date: 2022/08/22
tag: gamedev,lua,love2d
---

Os conceitos desse post são de nivel iniciante e representam algumas das dificuldades que passei enquanto estava estudando.

# Utilizando o Mouse
Caso quisermos ter um objeto seguindo o ponteiro do mouse, como é o caso do jogo [agar.io](https://agar.io), por exemplo.

## Encontrando coordenadas do mouse
Primeiro, precisamos ter controle sobre as coordenadas do mouse (x,y):

```lua
function love.update(dt)
	local x,y = love.mouse.getPosition()
end
```
Pronto, com essa linha, já temos controle sobre onde o nosso mouse está.

## Desenhando o objeto
Agora vamos desenhar o círculo que irá seguir o mouse:

```lua
function love.draw()
	-- argumentos da funcao modo (que será desenhado), x, y, width, height
	love.graphics.ellipse("fill", 50, 50, 50, 50)
end
```
Com isso já temos o nosso objeto em tela, por enquanto estático.

## Dando vida ao objeto
Para fazer com que o objeto se movimente, vamos passar as coordenadas que obtemos do mouse e passar para a função draw() que é responsável por desenhar o nosso objeto na tela.

```lua
function love.update(dt)
	local x,y = love.mouse.getPosition()

	-- variavel global para poder passar as coords. entre funções
	PLAYER = {
		x = 0,
		y = 0
	}
end

function love.draw()
	-- argumentos da funcao modo, x, y, width, height
	love.graphics.ellipse("fill", PLAYER.x, PLAYER.y, 50, 50)
end
```
Agora nosso objeto está se movimentando, porém ele esta junto ao mouse e esse não é exatamente o comportamento que queremos, por isso vamos adicionar alguns elementos a nossa função.

## Adicionando propriedades de velocidade e distância
Para que exista uma diferença entre a posição do objeto e do mouse, para causar a impressão de que o objeto está "seguindo o mouse", precisamos realizar um pequeno calculo:

```lua
-- variavel global para poder passar as coords. entre funcoes
-- agora movida para fora da funcao para que seja carregada somente uma vez
PLAYER = {
	x = 0,
	y = 0
}

function love.update()
	local x, y = love.mouse.getPosition()

	-- primeiro calculamos a diferença entre a posição
	-- do nosso objeto e do mouse em x,y
	local x_distance = mousex - PLAYER.x
	local y_distance = mousey - PLAYER.y

	-- definimos uma velocidade padrao
	local speed = 0.05

	-- atribuímos ao jogador a sua própria posição
	-- somando o produto da sua distância com o mouse
	-- com a velocidade padrão
	PLAYER.x = PLAYER.x + (x_distance * speed)
	PLAYER.y = PLAYER.y + (y_distance * speed)
end
```

> Note que nao alteramos a função love.draw()

## Resultado
![](/posts/movement-love2d.gif)
