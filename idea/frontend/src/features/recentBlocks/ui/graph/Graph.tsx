import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import { IChainBlock } from 'entities/chainBlock';

import styles from './Graph.module.scss';
import { getRandomPercent } from '../../helpers';

type Props = {
  blocks: IChainBlock[];
  className?: string;
};

const Graph = ({ blocks, className }: Props) => {
  const percents = useRef<number[]>(blocks.map(getRandomPercent));

  const addPercent = () => {
    const slicedArray = percents.current.length > 12 ? percents.current.slice(1) : percents.current;

    percents.current = [...slicedArray, getRandomPercent()];
  };

  useEffect(() => {
    if (!blocks.length) {
      return;
    }

    addPercent();
  }, [blocks]);

  return (
    <div className={clsx(styles.graph, className)}>
      {percents.current.map((value, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <hr key={index} style={{ height: `${value}%` }} className={styles.line} />
      ))}
    </div>
  );
};

export { Graph };
