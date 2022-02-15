import React, { useEffect, useState } from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'
import logoImg from '../assets/logo.svg';


export function RepositoryList() {
	const [repositories, setRepositories] = useState([])

	useEffect(() => {
		fetch('https://api.github.com/users/diego3g/repos')
		.then(response => (response.json()))
		.then(data => {
				setRepositories(data)
			})
		}, [repositories])

		return (
			<>
			<header className={"repository-header"}>
				<img src={logoImg} alt="Github Explorer" />
			</header>
			<section className="repository-list">
				<h1>Lista de Repositórios </h1>
				<ul>
				{repositories.map(repository => (
					<RepositoryItem key={repository.name}repository={repository} />
				))}
				</ul>
			</section>
			</>
		)
	
}
