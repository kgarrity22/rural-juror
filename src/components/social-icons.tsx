import { faOrcid, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkedIn, GitHub, Send } from '@mui/icons-material';
import { Box, useTheme } from '@mui/material';
import { KATHLEEN_SOCIALS } from '../constants';
import { HoverUnderlineText } from './hover-underline-text';

/**
 * Array of animated icons linked to socials
 */
export const SocialIcons = ({
  color = '#b2b2b2',
  hoverColor
}: {
  color?: string;
  hoverColor?: string;
}): JSX.Element => {
  const theme = useTheme();
  const commonStyles = {
    color,
    transition: 'transform 0.3s ease, color 0.3s ease',
    ml: theme.spacing(2),
    ':hover': { color: hoverColor ?? color, cursor: 'pointer', transform: 'scale(1.5)' }
  };
  return (
    <>
      <a href={KATHLEEN_SOCIALS.linkedIn} target="_blank">
        <LinkedIn sx={{ ...commonStyles, ml: 0 }} />
      </a>
      <a href={KATHLEEN_SOCIALS.github} target="_blank">
        <GitHub sx={commonStyles} />
      </a>
      <a href={KATHLEEN_SOCIALS.email} target="_blank">
        <Send sx={commonStyles} />
      </a>
      <a href={KATHLEEN_SOCIALS.orcId} target="_blank">
        <Box sx={commonStyles}>
          <FontAwesomeIcon size="xl" icon={faOrcid} />
        </Box>
      </a>
      <a href={KATHLEEN_SOCIALS.codePen} target="_blank">
        <Box sx={commonStyles}>
          <FontAwesomeIcon size="xl" icon={faCodepen} />
        </Box>
      </a>
    </>
  );
};

export const SocialsList = ({ socialLinks }: { socialLinks: { url: string; title: string }[] }) => {
  return (
    <ul>
      {socialLinks.map(({ url, title }) => (
        <li key={title}>
          <a style={{ textDecoration: 'none', color: 'inherit' }} href={url}>
            <HoverUnderlineText component="span" variant="h6" text={title} />
          </a>
        </li>
      ))}
    </ul>
  );
};
