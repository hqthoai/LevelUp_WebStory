import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProductionCard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ minWidth: '1400px', mr: 8, ml: 8, padding: 0 }}>
      <Grid container>
        <Grid item xl={6} lg={8}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="ORIGINALS" {...a11yProps(0)} />
                <Tab label="BUSINESS" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Typography variant="h2" sx={{ fontSize: '50px' }}>
                SEIZE THE LIFE ON <span>METAVERSE</span>
              </Typography>

              <Typography variant="p">
                Gaming should be more than just entertainment; it should be an enriching experience
                and community-centric approach! Our team is passionate about incorporating elements
                of Vietnamese culture into your game, offering global next-generation players a
                unique and immersive adventure in the metaverse.
              </Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Typography variant="h2" sx={{ fontSize: '50px' }}>
                EXPERIENCE JUST FOR FEARLESS <span>BUSINESS OFFER</span>
              </Typography>

              <Typography variant="p">
                From storytelling to gameplay mechanics, we tailor every aspect of your game to
                resonate with the target audience, ensuring an unforgettable experience. We work
                closely with you to bring your game concept to life. Whether it's a historical epic,
                a fantastical journey, or a modern adventure, LEVEL UP STUDIO are here to turn your
                vision into a captivating reality.
              </Typography>
            </CustomTabPanel>
          </Box>
        </Grid>
        <Grid item xl={6} lg={8}>
          <img
            src="https://res.edu.vn/wp-content/uploads/2021/12/unit-55-games.jpg"
            alt="games"
            style={{ width: '100%' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
