import React from "react";

export interface LoginScreenProps {
	name?: string;
	password?: string;
	handleSubmit: (state: any) => void;
}
const initialState = {
	email: "",
	password: "",
};
export function LoginScreen(props: LoginScreenProps) {
	const [state, setState] = React.useState(initialState);

	function handleSubmit(e) {
		e.preventDefault();
		props.handleSubmit(state);
		setState(initialState);
	}
	return (
		<form onSubmit={handleSubmit}>
			<h1>Sign In</h1>
			<input
				name="email"
				placeholder="Enter your email address"
				onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
				value={state.email}
			/>
			<input
				name="password"
				placeholder="Enter your password"
				onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
				value={state.password}
			/>
			<button>Submit</button>
		</form>
	);
}

export default LoginScreen;
