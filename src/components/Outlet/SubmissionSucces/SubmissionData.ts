export interface SubmissionBlock {
  header: string;
  description: string;
  btnText: string;
  nextStepsHeader: string;
  nextSteps: string[];
  helpHeader: string;
  helpText: string;
  thankYouText: string;
}

export const submissionBlock: SubmissionBlock = {
  header: 'Your form has been submitted',
  description: 'Thank you for your submission. We have received your information and our team is now reviewing it.',
  btnText: 'Home Page',
  nextStepsHeader: 'What Happens Next?',
  nextSteps: [
    'Confirmation Email: You will receive a confirmation email shortly with the details of your submission.',
    'Review Process: Our team will carefully review your submission to ensure all information is complete and meets our criteria.',
    'Follow-Up: If we require any additional information or clarification, we will reach out to you via email.'
  ],
  helpHeader: 'Need Help?',
  helpText: 'If you have any questions or need further assistance, please contact our support team at E-mail or call us!',
  thankYouText: 'Thank you for your patience. We will be in touch soon.'
};
