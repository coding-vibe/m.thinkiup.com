import Container from '@/components/Outlet/Container';
import Typography from '@mui/material/Typography';
import meta from '@/constants/meta';

export default function TermsConditionModalContent() {
  return (
    <Container>
      <Typography
        variant='h3'
        component='h3'
        mb='30px'>
        {meta.title} Terms & Conditions
      </Typography>
      <Typography
        variant='body1'
        component='h5'
        mb='10px'>
        Please review and understand the following terms and conditions before using our Service. These terms govern
        your use of the Service, and it is essential to read and comprehend them. The meaning of capitalized words in
        these terms and conditions remains the same whether they are singular or plural.
      </Typography>
      <Typography
        variant='body1'
        component='h5'
        mb='20px'>
        Throughout this agreement, the terms `the Site`, `We`, `Us`, or `Our` refer to the Site providing the Service. A
        `Device` is any digital device that can access and use the Service, such as a computer, smartphone, or tablet.
        `Service` refers to the Website, and `You` refers to the person or legal entity accessing or using the Service.
      </Typography>
      <Typography
        variant='body1'
        component='h5'
        mb='20px'>
        By accessing or using our Service, you expressly acknowledge that you have read, understood, and agreed to be
        bound by these Terms and Conditions. These terms outline all users rights and responsibilities and establish
        the relationship between you and the Site.
      </Typography>
      <Typography
        variant='body1'
        component='h5'
        mb='20px'>
        Your use of the Service is conditional on your full acceptance and compliance with these Terms and Conditions,
        which apply to all visitors, users, and other individuals accessing or using the Service.
      </Typography>
      <Typography
        variant='body1'
        component='h5'
        mb='20px'>
        If you disagree with any of these Terms and Conditions, you are not permitted to use the Service. By accessing
        or using the Service, you agree to be bound by these Terms and Conditions.
      </Typography>
      <Typography
        variant='body1'
        component='h5'
        mb='20px'>
        To access and use our Service, you must be at least 18 years old. Individuals under 18 are not permitted to use
        or access the Service.
      </Typography>
      <Typography
        variant='body1'
        component='h5'
        mb='20px'>
        In addition to these Terms and Conditions, your use of the Service is governed by our Privacy Policy. We
        recommend that you read and understand our Privacy Policy, which explains how we collect, use, and disclose your
        personal information while you use the Service, as well as your privacy rights and how the law protects you.
      </Typography>
      <Typography
        variant='body1'
        component='h5'
        mb='20px'>
        Please note that the Service may contain links to third-party websites. However, to the greatest extent
        permitted by law, the Site and its suppliers will not be liable for any special, incidental, indirect, or
        consequential damages arising from or in connection with the use or inability to use the Service. This includes
        monetary damages for lost profits, data or other information, business interruption, personal injury, or
        invasion of privacy.
      </Typography>
      <Typography
        variant='body1'
        component='h5'
        mb='20px'>
        The Service is provided to you on an `AS IS` and `AS AVAILABLE` basis and may contain flaws and defects not
        covered by any warranty, express, implied, statutory, or otherwise. The Site, its affiliates, licensors, and
        service providers expressly disclaim all warranties, including but not limited to implied warranties of
        merchantability, fitness for a particular purpose, title, and non-infringement, to the fullest extent permitted
        by law. Furthermore, the Site makes no warranties about the Service`s compatibility with other software,
        applications, systems, or services, its continuous operation, its performance or reliability, or the absence of
        harmful components.
      </Typography>
      <Typography
        variant='body1'
        component='h5'
        mb='10px'>
        The Site makes no guarantees that the Service will meet your specific requirements, produce the desired results,
        or be error-free. Furthermore, the Site makes no representations or warranties regarding the accuracy,
        reliability, or currency of any information or content made available through the Service. The Site also makes
        no representation that the Service, its servers, the content, or any emails sent from or on behalf of the Site
        are free of viruses, scripts, trojan horses, worms, malware, time bombs, or other potentially harmful
        components.
      </Typography>
      <Typography
        variant='body1'
        component='h5'>
        Please contact us if you have any questions about these Terms and Conditions.
      </Typography>
    </Container>
  );
}
