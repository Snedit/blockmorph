import { Box, Button } from '@mui/material';

function YellowButton({ text, isDisabled, icon, ...rest }) {
  return (
    <Button
      startIcon={icon || <GrDeploy />}
      disableElevation
      disabled={isDisabled}
      onClick={() => navigate("/doc")}
      sx={{
        borderRadius: "0.5rem",
        border: "2px solid #2E3C51",
        background: "cyan",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 10px 10px white",
        "&:hover": {
          background: "grey",
        },
        // Adding glow animation keyframes
        "@keyframes glow": {
          "0%": {
            boxShadow: "0 0 5px cyan, 0 0 10px cyan, 0 0 20px cyan",
          },
          "50%": {
            boxShadow: "0 0 5px blue, 0 0 10px blue, 0 0 20px blue",
          },
          "100%": {
            boxShadow: "0 0 5px cyan, 0 0 10px cyan, 0 0 20px cyan",
          },
        },
        animation: "glow 1.5s infinite ease-in-out",
      
        "&.Mui-disabled": {
          background: "grey",
          color: "white", 
          animation: 'none',
          transition: 'none',
        }
      }}
      variant="contained"
      {...rest}
    >
      {text && text}
    </Button>
  );
}

export default YellowButton;
