import { useInView } from 'react-intersection-observer';
const useHookView = (props) => {
  const { ref, inView } = useInView({
    threshold: [0.25, 0.5, 0.75],
    delay: 2,
    triggerOnce: true,
    ...props,
  });

  const styleOption = inView
    ? 'animate__slideInLeft animate__animated opacity-1'
    : 'opacity-0';

  return { ref, styleOption, inView };
};

export { useHookView };
