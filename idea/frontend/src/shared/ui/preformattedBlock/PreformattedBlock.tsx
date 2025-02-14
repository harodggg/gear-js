import { AnyJson } from '@polkadot/types/types';
import clsx from 'clsx';
import SimpleBar from 'simplebar-react';

import { getPreformattedText } from 'shared/helpers';

import styles from './PreformattedBlock.module.scss';

type Props = {
  text: AnyJson;
  className?: string;
};

const PreformattedBlock = ({ text, className }: Props) => (
  <SimpleBar className={clsx(styles.simpleBar, className)}>
    <pre>{getPreformattedText(text)}</pre>
  </SimpleBar>
);

export { PreformattedBlock };
