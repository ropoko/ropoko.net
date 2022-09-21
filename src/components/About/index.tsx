import React from 'react';
import { AboutStyle } from './AboutStyle';

export default function About() {
	return (
		<AboutStyle>
			<h1>Oi, meu nome é Rodrigo!</h1>
			<section className="introduction">
				<p>Estudante, interessado em contribuir com open source.</p>
			</section>
			<div className="grid-content">
				<section className="comp">
					<h1>Competências</h1>
					<p>
						Atualmente trabalhando com C# web api (rest) e Angular para a
						aplicação web. Para a landing page utilizo NextJS (inclusive para
						esse blog) devido ao fator SEO e SSR principalmente.
					</p>
					<p>
						Tenho experiência com Python em um projeto no qual utilizei para
						automação logística com uma raspberry pi.
					</p>
					<p>
						Nesse projeto embora também tenha dado bastante manutenção na parte
						de controle das portas seriais, fui o responsável pela interface web
						(utilizando Flask) para atualizar um dashboard conforme a ação que
						ocorria nas portas seriais, para que houvesse essa atualização do
						dashboard em tempo real, utilizei o mqtt.
					</p>
					<p>
						Também com python, sou responsável pelo projeto open source
						<a href="https://github.com/cli-dictionary"> Cli-Dictionary</a> que
						está publicado na{' '}
						<a href="https://snapcraft.io/cli-dictionary">Snapcraft</a>,
						atualmente com 150 usuários
					</p>
				</section>
				<section className="interests">
					<h1>Interesses</h1>
					<p>Tenho bastante interesse em Linux no geral (uso arch btw)</p>
					<p>
						Gostaria de um dia poder fazer live coding frequentemente - e formar
						uma comunidade (?)
					</p>
					<p>
						Nesses últimos meses tenho estudado game dev, utilizando Lua e
						Love2D
					</p>
					<p>
						Lado tech a parte, estudo música ~ 6 anos e filosofia ~ 1 mes ,
						atualmente lendo O mundo de sofia, (o qual pretendo fazer um resumo
						por capítulo)
					</p>
				</section>
			</div>
		</AboutStyle>
	);
}
