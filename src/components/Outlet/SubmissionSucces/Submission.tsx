import Container from '@/components/Outlet/Container';
import { Typography } from '@mui/material';
import meta from '@/constants/meta';
import * as generalClasses from '@/styles/general';
import { submissionBlock } from './SubmissionData';
import * as classes from './style';

export default function SubmissionSuccess() {
  return (
    <Container>
      <div css={classes.wrap}>
        <div css={classes.textWrap}>
          <Typography
            variant='h4'
            component='h4'
            textAlign='center'
            css={generalClasses.bold}>
            {submissionBlock.header}
          </Typography>
          <Typography
            variant='h5'
            component='h5'
            textAlign='center'
            css={generalClasses.semibold}>
            {submissionBlock.description}
          </Typography>
        </div>
        <div css={classes.textWrap}>
          <Typography
            variant='h5'
            component='h5'
            css={generalClasses.bold}>
            {submissionBlock.nextStepsHeader}
          </Typography>
          {submissionBlock.nextSteps.map((step, index) => (
            <Typography
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              variant='h6'
              component='h6'>
              {step}
            </Typography>
          ))}
          <Typography
            variant='h5'
            component='h5'
            marginTop='40px'
            css={generalClasses.bold}>
            {submissionBlock.helpHeader}
          </Typography>
          <Typography
            variant='h6'
            component='h6'>
            {submissionBlock.helpText}
          </Typography>
          <Typography
            variant='h6'
            component='h6'>
            {submissionBlock.thankYouText}
          </Typography>
          <Typography
            variant='h6'
            component='h6'>
            Best regards, {meta.title} team!
          </Typography>
        </div>
      </div>
    </Container>
  );
}
