import { faOrcid, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkedIn, GitHub, Send } from '@mui/icons-material';
import { Box, useTheme } from '@mui/material';
import { KATHLEEN_SOCIALS } from '../constants';

// provide a generic
// map from a constant

//
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
      <a href={KATHLEEN_SOCIALS.linkedIn}>
        <LinkedIn sx={{ ...commonStyles, ml: 0 }} />
      </a>
      <a href={KATHLEEN_SOCIALS.github}>
        <GitHub sx={commonStyles} />
      </a>
      <a href={KATHLEEN_SOCIALS.email}>
        <Send sx={commonStyles} />
      </a>
      <a href={KATHLEEN_SOCIALS.orcId}>
        <Box sx={commonStyles}>
          <FontAwesomeIcon size="xl" icon={faOrcid} />
        </Box>
      </a>
      <a href={KATHLEEN_SOCIALS.codePen}>
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
        <li>
          <a style={{ textDecoration: 'none', color: 'black' }} className="hover-underline-animation" href={url}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};
