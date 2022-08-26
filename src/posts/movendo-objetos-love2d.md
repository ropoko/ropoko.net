---
id: 0
title: Movendo objetos com Love2D
date: '25/08/2022'
tags: ['gamedev', 'lua', 'love2d']
---

Ola! Nesse post vou mostrar como podemos movimentar objetos com a game engine Love2D.

Os conceitos desse post e de nivel iniciante e representa algumas das dificuldades que passei enquanto estava estudando.

# Utilizando o Mouse
Caso quisermos ter um objeto seguindo o ponteiro do mouse, como e o caso do jogo [agar.io](https://agar.io), por exemplo.

## Encontrando coordenadas do mouse
Primeiro, precisamos ter controle sobre as coordenadas do mouse (x,y):

```lua
function love.update(dt)
	local x,y = love.mouse.getPosition()
end
```
Pronto, com essa linha, ja temos controle sobre aonde o nosso mouse esta.

## Desenhando o objeto
Agora vamos desenhar o circulo que ira seguir o mouse

```lua
function love.draw()
	-- argumentos da funcao x, y, width, height
	love.graphics.ellipse("fill", 50, 50, 50, 50)
end
```
Com isso ja temos o nosso objeto tela, por enquanto estatico.

## Dando vida ao objeto
Para fazer com que o objeto se movimente, vamos passar as coordenadas que obtemos do mouse e passar para a funcao draw() que esta desenhando o nosso objeto na tela.

```lua
function love.update(dt)
	local x,y = love.mouse.getPosition()

	-- variavel global para poder passar as coords. entre funcoes
	PLAYER = {
		x = 0,
		y = 0
	}
end

function love.draw()
	-- argumentos da funcao x, y, width, height
	love.graphics.ellipse("fill", PLAYER.x, PLAYER.y, 50, 50)
end
```
Agora nosso objeto esta se movimentando, porem ele esta junto ao mouse e esse nao e exatamente o comportamento que queremos, por isso vamos adicionar alguns elementos a nossa funcao.

## Adicionando propriedades de velocidade e distancia
Para que exista uma diferenca entre a posicao do objeto e do mouse, para causa a impressao de que o objeto esta "seguindo o mouse", precisamos realizar um pequeno calculo:

```lua
-- variavel global para poder passar as coords. entre funcoes
-- agora movida para fora da funcao para que seja carregada somente uma vez
PLAYER = {
	x = 0,
	y = 0
}

function love.update()
	local x, y = love.mouse.getPosition()

	-- primeiro calculamos a diferenca entre a posicao
	-- do nosso objeto e do mouse em x,y
	local x_distance = mousex - PLAYER.x
	local y_distance = mousey - PLAYER.y

	-- definimos uma velocidade padrao
	local speed = 0.05

	-- atribuimos ao jogador a sua propria posicao
	-- somando o produto da sua distancia com o mouse
	-- com a velocidade padrao
	PLAYER.x = PLAYER.x + (x_distance * speed)
	PLAYER.y = PLAYER.y + (y_distance * speed)
end
```
> Note que nao alteramos a funcao love.draw()

## Resultado
gif
