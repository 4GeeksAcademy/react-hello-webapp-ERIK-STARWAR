import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import {Planets} from "./planets"
import {People} from "./people"

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
	<div>
		<People></People>
		<Planets></Planets>
	</div>
);}
