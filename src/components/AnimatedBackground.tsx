import Lottie from 'react-lottie';
import animationData from '../assets/animatedbg.json';

const AnimatedBackground = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ position: 'fixed', width: '100%', height: '100%', zIndex: -1 }}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default AnimatedBackground;