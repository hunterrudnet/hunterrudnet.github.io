
import useTypewriter from 'react-typewriter-hook';

function TypingEffect({ text, typingDelay }) {
    const typewriterText = useTypewriter(text, typingDelay);
    return <>{typewriterText}</>;
}

  export default TypingEffect;