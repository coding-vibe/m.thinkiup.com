import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Container from '@/components/Outlet/Container';
import axios from 'axios';
import { Formik, Form as FormikForm, Field } from 'formik';
import { TextField } from 'formik-mui';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import Button from '@/components/Outlet/Button';
import SnackBar from '@/components/Outlet/SnackBar';
import baseUrl from '@/constants/baseUrl';
import * as generalClasses from '@/styles/general';
import { form } from './formData';
import * as classes from './styles';

interface Props {
  className?: string;
}

const INITIAL_FORM_VALUES = {
  name: '',
  surname: '',
  email: '',
  message: '',
};

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required(form.form.field1.validation),
  surname: yup.string().required(form.form.field2.validation),
  email: yup.string().email().required(form.form.field3.validation),
  message: yup.string().required(form.form.field4.validation),
});

export default function Form({ className }: Props) {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (values: typeof INITIAL_FORM_VALUES) => {
    axios
      .post(baseUrl, values)
      .then(() => {
        setIsSnackbarOpen(true);
      })
      .catch((error) => {
        throw new Error('Error submitting form:', error);
      });
    router.push('/submission-success');
  };

  return (
    <section
      className={className}
      css={generalClasses.layoutPadding}>
      <Container>
        <Paper css={classes.mainWrap}>
          <Formik<typeof INITIAL_FORM_VALUES>
            initialValues={INITIAL_FORM_VALUES}
            onSubmit={handleSubmit}
            validationSchema={VALIDATION_SCHEMA}>
            {() => (
              <FormikForm>
                <Typography
                  component='legend'
                  css={generalClasses.bold}
                  sx={{ mb: '50px', color: '#FFF' }}
                  variant='h4'>
                  {form.form.title}
                </Typography>
                <div css={classes.fields}>
                  <div css={classes.fieldsWrap}>
                    <Field
                      component={TextField}
                      css={classes.input}
                      {...form.form.field1}
                    />
                    <Field
                      component={TextField}
                      css={classes.input}
                      {...form.form.field2}
                    />
                  </div>
                  <Field
                    component={TextField}
                    css={classes.input}
                    {...form.form.field3}
                  />
                  <Field
                    component={TextField}
                    css={classes.input}
                    {...form.form.field4}
                  />
                </div>
                <Button
                  css={classes.button}
                  text={form.form.button}
                  size='large'
                  type='submit'
                />
              </FormikForm>
            )}
          </Formik>
        </Paper>
        <SnackBar
          isOpen={isSnackbarOpen}
          message={form.form.message}
          onClose={() => setIsSnackbarOpen(false)}
        />
      </Container>
    </section>
  );
}
