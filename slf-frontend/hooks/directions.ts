import { Animated, Easing } from 'react-native';

export const useDirectionalTransition = () => {
  const translateX = new Animated.Value(0);

  const slide = (direction: 'left' | 'right') => {
    Animated.sequence([
      Animated.timing(translateX, {
        toValue: direction === 'right' ? -100 : 100,
        duration: 150,
        easing: Easing.out(Easing.poly(4)),
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 0,
        duration: 150,
        easing: Easing.out(Easing.poly(4)),
        useNativeDriver: true,
      }),
    ]).start();
  };

  return { slide, translateX };
};