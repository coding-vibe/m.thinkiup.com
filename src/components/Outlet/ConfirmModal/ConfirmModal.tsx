import { useEffect, useState } from 'react';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import { Checkbox, FormControlLabel, Dialog, DialogContent, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import * as Yup from 'yup';
import Iframe from 'react-iframe';
import Link from 'next/link';
import * as classes from './styles';
import Button from '../Button';

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onIframeClose: () => void;
  onSubmit: (values: { email: string; terms: boolean }) => void;
  initialData: { email: string; terms: boolean };
  gameLink: string;
  isIframeOpen: boolean;
}
export default function ConfirmModal({
  open,
  onClose,
  onIframeClose,
  onSubmit,
  initialData,
  gameLink,
  isIframeOpen,
}: ConfirmModalProps) {
  const [isIframeModalOpen, setIsIframeModalOpen] = useState<boolean>(isIframeOpen);

  useEffect(() => {
    if (isIframeOpen) {
      setIsIframeModalOpen(true);
    }
  }, [isIframeOpen]);

  const handleSubmit = (values: { email: string; terms: boolean }) => {
    onSubmit(values);
  };

  const handleIframeClose = () => {
    setIsIframeModalOpen(false);
    onIframeClose();
  };

  return (
    <>
      <Dialog
        css={classes.modal}
        aria-labelledby='dialogTitle'
        open={open}
        onClose={onClose}>
        <div>
          <Typography
            css={classes.title}
            component='p'
            textAlign='center'
            variant='h4'>
            Please enter your email
          </Typography>
          <IconButton
            css={classes.close}
            aria-label='close'
            onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Formik
          initialValues={initialData}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            terms: Yup.bool().oneOf([true], 'You must accept the terms'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}>
          {({ errors, touched }) => (
            <FormikForm>
              <DialogContent sx={{ pt: '0' }}>
                <div css={classes.contentWrap}>
                  <Field
                    as={TextField}
                    type='email'
                    name='email'
                    css={classes.input}
                    placeholder='Email:'
                    fullWidth
                    error={touched.email && Boolean(errors.email)}
                    helperText={
                      <ErrorMessage
                        name='email'
                        component='span'
                      />
                    }
                  />
                  <FormControlLabel
                    control={
                      <Field
                        as={Checkbox}
                        name='terms'
                        color='success'
                        type='checkbox'
                      />
                    }
                    label={
                      <Typography css={classes.label}>
                        I am 21 years old and I agree to the <Link href='/privacy-policy'>Privacy Policy</Link> and{' '}
                        <Link href='/terms-and-conditions'>Terms and Conditions</Link>
                      </Typography>
                    }
                  />
                  <ErrorMessage
                    name='terms'
                    component='span'
                    css={classes.errorMsg}
                  />
                  <Button
                    text='Play the Game!'
                    type='submit'
                  />
                </div>
              </DialogContent>
            </FormikForm>
          )}
        </Formik>
      </Dialog>
      {isIframeModalOpen && (
        <div css={classes.frameModal}>
          <IconButton
            css={classes.close}
            aria-label='close'
            onClick={handleIframeClose}>
            <CloseIcon />
          </IconButton>
          <Iframe
            url={gameLink}
            width='1000px'
            height='700px'
            id='game1'
            css={classes.iFrame}
          />
        </div>
      )}
    </>
  );
}
