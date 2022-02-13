import React, { useEffect, useState } from 'react'
import '../styles/repositories.scss'
import { RepositoryItem } from './RepositoryItem'



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
			<section className="repository-list">
				<h1>Lista de Repositórios </h1>
				<ul>
				{repositories.map(repository => (
					<RepositoryItem key={repository.name}repository={repository} />
				))}
				</ul>
				
			</section>
		)
	
}
