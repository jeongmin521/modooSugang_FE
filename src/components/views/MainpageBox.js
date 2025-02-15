import * as React from 'react';
import Typography from '../assets/Typography';
import MainpageBoxLayout from './MainpageBoxLayout';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

const backgroundImage =
  'https://user-images.githubusercontent.com/82520143/161498672-a78000a5-cd2d-4088-94cf-5ae4f2f63557.jpg';

export default function MainpageBox() {
  const [univ, setAge] = React.useState('');
  console.log(univ);

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (
    <MainpageBoxLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        모두의 수강신청
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        {/* 복잡했던 수강신청. 이제 안녕 */}
      </Typography>
      <Box sx={{ 
        bgcolor: 'background.paper',
        minWidth: 240 
        }}>
        <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">대학교를 선택해주세요</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={univ}
            label="Univ"
            onChange={handleChange}
          >
            {/* DB 연동 필요 */}
            <MenuItem value={10}>카카오 대학교</MenuItem>
            <MenuItem value={20}>네이버 대학교</MenuItem>
            <MenuItem value={30}>배민 대학교</MenuItem>
          </Select>
          <Button
            href='/SignIn/' 
            variant="contained"
            disabled={!univ}
            >
              확인
          </Button>
        </FormControl>
      </Box>
      
    </MainpageBoxLayout>
  );
}
