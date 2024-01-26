import { useParams } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: [],
			
		
		},

		actions: {
			
			displayPeople: () => {
				
				fetch("https://swapi.tech/api/people/")
					.then(res => res.json())
					.then((data) => {
						console.log(data)
						setStore({people: data.results})
					});
					},

			displayPlanets: () => {
						
				fetch("https://swapi.tech/api/planets/")
					.then(res => res.json())
					.then((data) => {
						setStore({planets: data.results})
					});
					},

			displayFavorites: (name) => {
				const store = getStore();
				if(store.favorites.includes(name)){
					setStore({favorites: store.favorites.filter((item) => item != name)})
					// setStore({favorites: ["prueba"]}),
					// console.log(store.favorites)
				}

				else {
					setStore({favorites: [...store.favorites, name]})
					// console.log(store.favorites)
				}
			},

			

			deleteFavorites: (name) => {
				const store = getStore();
				console.log(name)
				setStore({favorites: store.favorites.filter((item) => item != name)})
			}

		}
	};
};

export default getState;
