import Container from '@/components/Outlet/Container';
import { Typography } from '@mui/material';
import meta from '@/constants/meta';

export default function PrivacyPolicyModalContent() {
  return (
    <Container>
      <Typography
        variant='h3'
        gutterBottom>
        {meta.title} Privacy Policy
      </Typography>
      <Typography
        variant='body1'
        paragraph>
        This site is an information portal for cognitive purposes, accessible to everyone. Through these pages, we
        promote awareness of gambling in all its legal, secure, and responsible forms. Industry professionals, who have
        accumulated many years of experience in this field, contribute to this site.
      </Typography>
      <Typography
        variant='h6'
        gutterBottom>
        CONDITIONS OF USE:
      </Typography>
      <Typography
        variant='body1'
        paragraph>
        Using this portal implies acceptance of the rules and regulations outlined below. If you do not agree with these
        terms, please refrain from using this site. The content is provided for informational purposes only. The owners,
        editorial staff, and contributors are not legally liable for any misuse of this information.
      </Typography>
      <Typography
        variant='h6'
        gutterBottom>
        COPYRIGHT:
      </Typography>
      <Typography
        variant='body1'
        paragraph>
        All articles, images, logos, and other content on this site are protected by copyright. Copyright laws prohibit
        third parties from copying, altering, distributing, publishing, or making unauthorized use of the material on.
        The site contains images and logos sourced from third parties, all cited with the original source. If you
        encounter any issues or find content that infringes your copyright, please contact the owners for immediate
        removal.
      </Typography>
      <Typography
        variant='h6'
        gutterBottom>
        RESPONSIBLE GAMING:
      </Typography>
      <Typography
        variant='body1'
        paragraph>
        The website exclusively promotes responsible gaming. The contents of this portal include links, tips,
        information, and gambling proposals from top online games and gambling sites. Every gaming moment, whether
        online or offline, depends on the player`s involvement, and in case of issues, no blame can be assigned to the
        site owners or editorial staff. At, we have always supported responsible gaming, emphasizing that gambling is
        not a solution to financial problems but a form of entertainment to be enjoyed responsibly. The authors of the
        texts are not liable for any losses. The reviewed portals on are legal, safe, and offer traceable transactions
        at all times.
      </Typography>
      <Typography
        variant='h6'
        gutterBottom>
        PRIVACY POLICY OF THE WEBSITE:
      </Typography>
      <Typography
        variant='body1'
        paragraph>
        {meta.title} ensures that personal data provided by users will be treated in accordance with the law. Data
        processing will adhere to the principles of legality and transparency. Users are informed in writing of the
        following:
      </Typography>
      <Typography
        variant='h6'
        gutterBottom>
        OPTIONALITY:
      </Typography>
      <Typography
        variant='body1'
        paragraph>
        Users may choose whether or not to provide personal data. However, not providing data may prevent the use of
        certain site features.
      </Typography>
      <Typography
        variant='h6'
        gutterBottom>
        METHOD OF COLLECTION:
      </Typography>
      <Typography
        variant='body1'
        paragraph>
        Data will be collected electronically and/or by computerized means, adhering to legal security and legality
        parameters.
      </Typography>
      <Typography
        variant='h6'
        gutterBottom>
        DATA DISSEMINATION:
      </Typography>
      <Typography
        variant='body1'
        paragraph>
        Personal data will not be used for purposes other than those for which it was provided.
      </Typography>
      <Typography
        variant='h6'
        gutterBottom>
        RIGHTS OF THE DATA SUBJECT:
      </Typography>
      <Typography
        variant='body1'
        paragraph>
        Users of {meta.title} may:
      </Typography>
      <Typography
        variant='body1'
        component='ul'>
        Users of may: Receive confirmation or denial regarding the existence of their data in the site’s database.
        <br />
        Receive information about the origin of the personal data.
        <br /> Receive information about the status, manner, and purpose of data collected on the site.
        <br /> Request modification, rectification, blocking, or deletion of the data.
        <br /> Object to the use of personal data for advertising or promotional purposes.
        <br /> <br />I may update our Privacy Policy from time to time. Thus, you are advised to review this page
        periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.<br />
        This policy is effective as of 2024-09-25
      </Typography>
    </Container>
  );
}
