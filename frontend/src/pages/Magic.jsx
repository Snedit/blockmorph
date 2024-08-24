import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import BottomCard from '../components/BottomCard';
import LinkInput from '../components/LinkInput';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function MagicOptions() {
  const navigate = useNavigate();
  const { state } = useLocation();
  // console.log(state);
  const { options, summary } = state;

  const handleIdeaClick = (selectedOption) => {
    navigate(`/generate/${selectedOption}`);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      width="80%"
      mx="auto"
      height="calc(100vh - 8rem)"
      sx={{
        height: "calc(100vh - 4rem)",
          width: "100vw",
          padding: "1rem",
          margin: "auto",
          display: "flex",
          // overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '2px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'cyan',
          borderRadius: '5px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        /* Firefox scrollbar styles */
        scrollbarWidth: 'thin',
        scrollbarColor: 'cyan transparent',
      }}
    >
      <Box width="60%" mx="auto" pt={4} mb={3}>
        <img
          src="home.svg"
          style={{
            display: 'block',
            width: '300px',
            margin: 'auto',
          }}
          alt="Web2 --> Web3"
        />
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center" >
        <LinkInput isDisabled defaultValue={state?.url} />
        </Box>
        <Typography className='text-gradient-1'
          align="center"
          sx={{
            textAlign: 'center',
            display: 'block',
            color: 'inherit',
            textDecoration: 'none',
            transition: 'all 0.3s ease-in-out', // Adding transition for a smooth effect
            '&:hover': {
              textShadow: '0px 0px 30px black',
            },
          }}
          variant="h3"
          component={Link}
          to="/"
          fontWeight={600}
        >
          Rock & Roll as <br/> The Transition is on!!
        </Typography>
      </Box>
      <BottomCard
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
          borderRadius: '2rem',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            height: '30rem',
            flexDirection: 'column',
            borderRadius: '2rem',
            p: 4,
            overflowY: 'auto',
          }}
        >
          <Typography className='text-gradient-2'
          align="center"
          sx={{
            textAlign: 'left',
            display: 'flex',
            color: 'inherit',
            textDecoration: 'none',
            transition: 'all 0.3s ease-in-out', // Adding transition for a smooth effect
            
          }}
          variant="h4"
          component={Link}
          to="/"
          fontWeight={600}
        >
          The Amazing Ideas are hereby presented...
        </Typography>
          <Box>
            <Typography  variant="h5" mt={2} fontWeight={600} sx={{ textDecoration: 'underline' }}>
              Generated ideas:
            </Typography>
            <List
              sx={{
                overflowY: 'scroll',
                height: 320,
              }}
            >
              {options?.map((option, i) => {
                return (
                  <ListItem
                    key={i}
                    disablePadding
                    sx={{
                      borderRadius: 2,
                      background: 'rgba(255, 255, 255, 0.10)',
                      textAlign: 'center',
                      my: 1,
                    }}
                    onClick={() => handleIdeaClick(summary[i])}
                  >
                    <ListItemButton
                      sx={{
                        px: 4,
                        py: 1.6,
                        borderRadius: 2,
                        transition: 'all 0.3s ease-in-out', // Adding transition for a smooth effect
                        '&:hover': {
                          background:
                            'radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.30)',
                          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                          backdropFilter: 'blur(4px)',
                        },
                      }}
                    >
                      <ListItemIcon>
                        <Box
                          sx={{
                            borderRadius: 1,
                            background:
                              'radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.20)',
                            height: '4rem',
                            width: '4rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '2rem',
                            color: 'white',
                            mr: 4,
                            p: 5,
                          }}
                        >
                          {i < 9 && '0'}
                          {i + 1}
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        align="left"
                        primary={
                          <>
                            <Typography variant="body1" fontWeight={600}>
                              {option}:
                            </Typography>
                            <Typography variant="body2" fontWeight={400}>
                              {summary[i]}
                            </Typography>
                          </>
                        }
                        fontWeight={400}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </CardContent>
      </BottomCard>
    </Box>
  );
}

export default MagicOptions;