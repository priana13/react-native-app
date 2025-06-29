declare module 'react-native-snap-carousel' {
  import * as React from 'react';
    import { FlatListProps, StyleProp, ViewStyle } from 'react-native';

  export interface CarouselProps<T> extends Partial<FlatListProps<T>> {
    data: T[];
    renderItem: ({ item, index }: { item: T; index: number }) => React.ReactNode;
    sliderWidth: number;
    itemWidth: number;
    itemHeight?: number;
    sliderHeight?: number;
    firstItem?: number;
    inactiveSlideScale?: number;
    inactiveSlideOpacity?: number;
    loop?: boolean;
    autoplay?: boolean;
    autoplayDelay?: number;
    autoplayInterval?: number;
    containerCustomStyle?: StyleProp<ViewStyle>;
    contentContainerCustomStyle?: StyleProp<ViewStyle>;
  }

  export default class Carousel<T> extends React.Component<CarouselProps<T>> {}
}
