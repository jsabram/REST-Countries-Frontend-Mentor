import LoadingScreen from '../reusable/LoadingScreen';
import classes from './LoadingAnimation.module.css';

const LoadingAnimation = () => {
	return (
		<div className={classes['animation-box']}>
			<LoadingScreen id='loading-item' className={classes['loading-item']} />
		</div>
	);
};

export default LoadingAnimation;
