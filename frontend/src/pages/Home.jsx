import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  CardActions,
  CardContent,
  List,
  ListItem,
  Stepper,
  Step,
  StepLabel,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from 'framer-motion';
import LinearProgress from "@mui/material/LinearProgress";
import { FaCode, FaMagic } from "react-icons/fa";
import BottomCard from "../components/BottomCard";
import GradientButton from "../components/GradientButton";
import LinkInput from "../components/LinkInput";
import instance from "./../config/axiosInstance.js";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LightButton from "../components/LightButton";
import { Context } from "../context/Context";
import AboutUs from "../components/About.jsx";

const steps = [
  {
    id: 1,
    text: "Share your website URL.",
  },
  {
    id: 2,
    text: "Receive tailored suggestions on integrating web3 seamlessly.",
  },
  {
    id: 3,
    text: "Get a one-click deploy contract for swift implementation.",
  },
];
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

function Home() {
  const [x, setX] = useState(10);
  const isSmallScreen = useMediaQuery('(max-width:1000px)');
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y / height) - 0.5) * 50; // Tilt image on Y-axis
    const rotateY = ((x / width) - 0.5) * -50; // Tilt image on X-axis

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  const navigate = useNavigate();
  // const defaultLink = document.querySelector("rt").value;
  const [inputLink, setInputLink] = useState("");
  const isTest = React.useContext(Context);
  console.log("isTest", isTest);
  const handleIdeaClick = (selectedOption) => {
    navigate(`/generate/${selectedOption}`);
  };
  
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 5000); // Hide loader after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const [loading, setLoading] = useState(false);


  const handleMagicButtonClick = async () => {
    if (x > 0) {
      setX(x - 1);
    }
    setLoading(true);
    try {
      if (isTest) {
        // Simulate a 7-second loading delay if isTest is true
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
      console.log(inputLink)
      const { data } = await instance.post("/getOptions", {
        url: inputLink, // Adjusted field name to match backend
      });

      if (data.success && data.data) {
        // Handle the success case

        const jsonData = JSON.parse(data.data);
        const ideas = Object.keys(jsonData);
        console.log(ideas);

        const ideaSummary = Object.values(jsonData);
        console.log(ideaSummary);
        navigate("/options", {
          state: {
            // Adjust according to the actual data structure if needed
            options: ideas,
            summary: ideaSummary,
            url: inputLink,
          },
        });
      } else {
        console.error("Error in response data:", data);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

if (load)
    return (
    <div className="loader-container bg-black-gradient-2">
      <div className="loader">
        <img src="b.svg" alt="Loading" className="loader-image" />
        <h1 className="text-gradient">Blocks Assemble...</h1>
      </div>
    </div>
  );
  return (
    <div className='blue__gradient'>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      width="100%"
      mx="auto"
      height="calc(100vh - 4rem)"
    >
      <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column" // Adjusted for smaller screens
      width="100%"
      // zIndex={3}
      height="100%" // Adjusted to full height
      px={2} // Reduced padding for smaller screens
      pt={3} pb={3} // Reduced padding for smaller screens
      sx={{
        '@media (min-width: 1000px)': {
          flexDirection: 'row',
          justifyContent:"space-between", // Switch back to row layout for larger screens
          px: 4, // Restore padding for larger screens
          pt: 10, pb: 10, // Restore padding for larger screens
        },
      }}
    >
      
      <Box
        display='flex'
        flexDirection='column'
        className="gradient-bg-transactions"
        boxShadow={'0 4px 30px rgba(209, 206, 206, 0.2)'}
        px={4} py={3}
        borderRadius={4}
        mb={4}
        sx={{
          width: '100%',
          maxWidth: '650px',
          '& img': {
            maxWidth: '100%',
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Typography
            align="center"
            variant="h3"
            sx={{
              marginBottom: '8px',
              '@media (max-width: 500px)': {
                fontSize: '30px',
              },
              '@media (min-width: 500px) and (max-width: 800px)': {
                fontSize: '50px',
              },
            }}
          >
            Unfolding the
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Typography
            align="center"
            variant="h1"
            className='text-gradient-1'
            sx={{
              marginBottom: '8px',
              '@media (max-width: 500px)': {
                fontSize: '50px',
              },
              '@media (min-width: 500px) and (max-width: 800px)': {
                fontSize: '80px',
              },
            }}
          >
            Transition
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Typography
            align="left"
            variant="h2"
            className='text-gradient'
            sx={{
              marginBottom: '8px',
              '@media (max-width: 500px)': {
                fontSize: '30px',
              },
              '@media (min-width: 500px) and (max-width: 800px)': {
                fontSize: '50px',
              },
            }}
          >
            from Web2
            <img style={{ verticalAlign: 'middle', marginLeft: '14px' }} src="crv.svg" alt="bal" />
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Typography
            align="right"
            variant="h2"
            className='text-gradient'
            sx={{
              marginBottom: '20px',
              '@media (max-width: 500px)': {
                fontSize: '30px',
              },
              '@media (min-width: 500px) and (max-width: 800px)': {
                fontSize: '50px',
              },
            }}
          >
            to Web3
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Typography
            align="center"
            variant="h3"
            className='text-gradient-2'
            sx={{
              '@media (max-width: 500px)': {
                fontSize: '25px',
              },
              '@media (min-width: 500px) and (max-width: 800px)': {
                fontSize: '50px',
              },
            }}
          >
            in a Single Click!!!
          </Typography>
        </motion.div>
      </Box>
         <Box className="sidebar">
      <motion.img
        src={isSmallScreen ? "home.svg" : "new.png"}
        style={{
          display: 'block',
          width: '100%',
          minWidth: isSmallScreen ? '200px' : '400px',
          maxWidth: '600px',
          height: 'auto',
          cursor: 'pointer',
          // transformStyle: 'preserve-3d', // Preserves 3D effect
        }}
        alt="Web2 --> Web3"
        animate={{ rotateX, rotateY }} // Apply the rotation
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ type: 'spring', stiffness: 30, damping: 20 }}
      />
    </Box>
    </Box>
      <BottomCard
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "95%",
          borderRadius: "2rem",
          paddingTop: "0.5rem",
          paddingBottom: "1rem",
        }}
      >
        
        <CardContent className='gradient-bg-services'
          sx={{
            display: 'flex',
            justifyContent: '',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            height: '35rem',
            borderRadius: '2rem',
            transition: 'opacity 1s ease-in-out', // Add a smooth transition effect
          }}
        >
          <Box sx={{ display: 'flex' }} mr={1}>
            <Typography variant="h4" className="text-gradient-2">
                    Remaining Credit Balance: {x}  
                  </Typography>
                  <img
                    src="bc.svg"
                    alt="text"
                    style={{
                      display: 'block',
                      width: '2rem',
                    }}
                  />
                </Box>
          <LinkInput
          id="dynamicInput"
          defaultValue={isTest ? inputLink : 'www.'}
          isDisabled={false}
          onChange={(e) => setInputLink(e.target.value)}
        />
          {loading ? (
            <>
              <Typography variant="h6" mb={2} fontWeight={700} align="center">
                Generating ideas!
              </Typography>
              <div className="loader">
        <img src="b.svg" alt="Loading" className="loader-image" />
        {/* <h1 className="text-gradient">Blocks Assemble...</h1> */}
      </div>
            </>
          ) : (
            <>
              <Stepper
                activeStep={-1}
                orientation="vertical"
                sx={{
                  color: "white",
                  overflow: "auto",
                }}
              >
                {steps.map(({ id, text }) => {
                  return (
                    <Step key={id}>
                      <StepLabel color="white">
                        <Typography variant="body1" color="white">
                          {text}
                        </Typography>
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <CardActions
                sx={{
                  mt: 3,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  width: "100%",
                }}
              >
                <GradientButton
                  icon={<FaMagic />}
                  text="Start the Magic..."
                  onClick={handleMagicButtonClick}
                  disabled={loading}
                />
                <Box sx={{ display: 'flex' }} mt={1}>
                  <img
                    src="bc.svg"
                    alt="text"
                    style={{
                      display: 'block',
                      width: '1.4rem',
                    }}
                  />
                  <Typography variant="body2" fontSize={14} px={1}>
                    1 Credit
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "60%",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "coloumn",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "auto",
                    }}
                  >
                    <Divider
                      sx={{ bgcolor: "white", width: "40%", height: "1px" }}
                    ></Divider>
                    <Typography variant="body2" fontSize={18} px={1}>
                      or
                    </Typography>
                    <Divider
                      sx={{ bgcolor: "white", width: "40%", height: "1px" }}
                    ></Divider>
                  </Box>
                  <LightButton
                    component={Link}
                    to={`/editor`}
                    text="Open in code editor"
                    icon={<FaCode/>}
                    fullWidth
                  />
                </Box>
              </CardActions>
            </>
          )}
        </CardContent>
      </BottomCard>
      <AboutUs/>
    </Box>
    </div>
  );
}

export default Home;
