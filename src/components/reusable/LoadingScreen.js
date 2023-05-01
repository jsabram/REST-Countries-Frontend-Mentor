import { Fragment } from 'react';

const LoadingScreen = (props) => {
	return (
		<Fragment>
			<div id={props.id} className={props.className}>
				{props.children}
			</div>
			<div id={props.id} className={props.className}>
				{props.children}
			</div>
			<div id={props.id} className={props.className}>
				{props.children}
			</div>
			<div id={props.id} className={props.className}>
				{props.children}
			</div>
			<div id={props.id} className={props.className}>
				{props.children}
			</div>
			<div id={props.id} className={props.className}>
				{props.children}
			</div>
			<div id={props.id} className={props.className}>
				{props.children}
			</div>
			<div id={props.id} className={props.className}>
				{props.children}
			</div>
		</Fragment>
	);
};

export default LoadingScreen;
