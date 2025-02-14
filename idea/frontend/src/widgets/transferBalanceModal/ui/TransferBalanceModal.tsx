import { Button, Modal } from '@gear-js/ui';
import { Form } from 'react-final-form';
import * as yup from 'yup';

import { useModal } from 'hooks';
import { ReactComponent as TransferBalanceSVG } from 'shared/assets/images/actions/transferBalanceSubmit.svg';
import { FormInput, ValueField } from 'shared/ui/form';
import { getValidation, isAccountAddressValid } from 'shared/helpers';

import { decodeAddress } from '@gear-js/api';
import styles from './TransferBalanceModal.module.scss';

const initialValues = { address: '', amount: '' };

const validationSchema = yup.object().shape({
  address: yup
    .string()
    .test('is-address-valid', 'Invalid address', isAccountAddressValid)
    .required('This field is required'),
  amount: yup.string().required('This field is required'),
});

type Props = {
  onSubmit: (to: string, value: string) => void;
};

const TransferBalanceModal = ({ onSubmit }: Props) => {
  const { closeModal } = useModal();

  return (
    <Modal heading="Transfer Balance" close={closeModal}>
      <Form
        initialValues={initialValues}
        onSubmit={({ address, amount }: typeof initialValues) => onSubmit(decodeAddress(address), amount)}
        validate={getValidation(validationSchema)}
        validateOnBlur>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <FormInput name="address" label="Address" direction="y" />
              <ValueField name="amount" label="Value:" direction="y" />
            </div>

            <Button type="submit" text="Send" icon={TransferBalanceSVG} block />
          </form>
        )}
      </Form>
    </Modal>
  );
};

export { TransferBalanceModal };
