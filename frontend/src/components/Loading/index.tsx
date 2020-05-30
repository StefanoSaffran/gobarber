import React from 'react';
import Loader from 'react-loader-spinner';

import { Container } from './styles';

interface LoadingProps {
  type?: any;
  color?: string;
  size: string;
}

const Loading: React.FC<LoadingProps> = ({
  type = 'ThreeDots',
  size,
  color = '#312e38',
}) => {
  const LoadingSize =
    size === 'small'
      ? {
          width: 50,
          height: 50,
        }
      : {
          width: 100,
          height: 100,
        };

  return (
    <Container>
      <Loader
        type={type}
        height={LoadingSize.height}
        width={LoadingSize.width}
        color={color}
      />
    </Container>
  );
};

export default Loading;
