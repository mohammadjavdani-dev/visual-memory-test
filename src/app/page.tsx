"use client"
import React, { FormEvent, useState } from 'react';
import { TextField, Button, Typography, Grid, RadioGroup, FormControlLabel, Radio, Divider } from '@mui/material';
import { SlideContainer } from '@/components/templates';
import { theme } from '@/theme';

const Homepage = () => {
  const [userGender, setUserGender] = useState('male');
  const [slidesTimeout, setSlidesTimeout] = useState<number[]>(Array(8).fill(0));
  const [secondSlideContent, setSecondSlideContent] = useState('image');

  const handleChange = (index: number, value: string) => {
    const newNumbers = [...slidesTimeout];
    newNumbers[index] = Number(value);
    setSlidesTimeout(newNumbers);
  };

  const handleUserGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserGender((event.target as HTMLInputElement).value);
  };

  const handleSecondSlideContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondSlideContent((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('slidesTimeout:', slidesTimeout);
    console.log('userGender:', userGender);
    console.log('secondSlideContent:', secondSlideContent);
  };

  return (
    <SlideContainer>
      <Grid
        item
        container
        sx={{
          backgroundColor: theme.palette.grey[200],
          padding: '1rem'
        }}
      >
        <Grid item container justifyContent="center">
          <Typography variant="h1">آزمون حافظه دیداری</Typography>
        </Grid>
        <Grid
          item
          container
          component="form"
          direction="column"
          alignItems="center"
          onSubmit={handleSubmit}
        >
          <Grid
            item
            container
            alignItems="center"
            sx={{
              marginTop: '0.5rem',
              paddingBlock: '0.5rem',
              borderTop: `1px solid ${theme.palette.grey[500]}`
            }}
          >
            <Typography variant="body1">جنسیت آزمون‌دهنده</Typography>
            <RadioGroup row value={userGender} onChange={handleUserGenderChange}>
              <FormControlLabel value="male" control={<Radio color="primary" />} label="آقا" />
              <FormControlLabel value="female" control={<Radio color="primary" />} label="خانم" />
            </RadioGroup>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            sx={{
              paddingBlock: '1rem',
              borderTop: `1px solid ${theme.palette.grey[500]}`
            }}
          >
            <Typography variant="body1">تنظیمات زمان نمایش هر اسلاید</Typography>
            <Grid item container gap={4} justifyContent="center">
              {slidesTimeout.map((value, index) => (
                <Grid item container xs={4} justifyContent="center" key={index}>
                  <TextField
                    label={`اسلاید ${index + 1}`}
                    variant="standard"
                    type="number"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    InputProps={{
                      inputProps: {
                        min: 0,
                        dir: 'ltr'
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            sx={{
              paddingBlock: '0.5rem',
              borderTop: `1px solid ${theme.palette.grey[500]}`
            }}
          >
            <Typography variant="body1">تنظیمات محتوای اسلاید 2</Typography>
            <RadioGroup row value={secondSlideContent} onChange={handleSecondSlideContentChange}>
              <FormControlLabel value="image" control={<Radio color="primary" />} label="تصویر" />
              <FormControlLabel value="text" control={<Radio color="primary" />} label="متن" />
            </RadioGroup>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            شروع آزمون
          </Button>
        </Grid>
      </Grid>
    </SlideContainer>
  );
};

export default Homepage;