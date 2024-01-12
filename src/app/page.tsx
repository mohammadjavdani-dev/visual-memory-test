'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {  Button, Typography, Grid, RadioGroup, FormControlLabel, Radio } from '@mui/material';

import { SlideContainer } from '@/components/templates';
import { theme } from '@/theme';
import { GenerateTest } from '@/utils/generateTest';

const Homepage = () => {
  const router = useRouter();
  // General info states 
  const [participantGender, setParticipantGender] = useState('male');
  const [secondSlideContentState, setSecondSlideContentState] = useState<'image' | 'text'>('image');

  const handleParticipantGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParticipantGender((event.target as HTMLInputElement).value);
  };

  const handleSecondSlideContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondSlideContentState((event.target as HTMLInputElement).value as 'image' | 'text');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const tests = GenerateTest({secondSlideContent: secondSlideContentState});
    const session = window.sessionStorage;
    session.setItem('participant_gender', participantGender);
    session.setItem('tests', JSON.stringify(tests));
    session.setItem('inprogress_test_number', '0');
    session.setItem('test_count', String(tests.length));
    router.replace('/first');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const session = window.sessionStorage;
      session.clear();
    }
  }, []);

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
            justifyContent="center"
            alignItems="center"
            sx={{
              marginTop: '1.5rem',
            }}
          >
            <Typography variant="body1">جنسیت شرکت‌کننده</Typography>
            <RadioGroup row value={participantGender} onChange={handleParticipantGenderChange}>
              <FormControlLabel value="male" control={<Radio color="primary" />} label="آقا" />
              <FormControlLabel value="female" control={<Radio color="primary" />} label="خانم" />
            </RadioGroup>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              marginTop: '1.5rem',
            }}
          >
            <Typography variant="body1">تنظیمات محتوای اسلاید 2</Typography>
            <RadioGroup row value={secondSlideContentState} onChange={handleSecondSlideContentChange}>
              <FormControlLabel value="image" control={<Radio color="primary" />} label="تصویر" />
              <FormControlLabel value="text" control={<Radio color="primary" />} label="متن" />
            </RadioGroup>
          </Grid>
          <Grid
            container
            justifyContent="center"
            columnGap={8}
            sx={{
              marginTop: '1.5rem',
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              شروع ارزیابی
            </Button>
            <Button
              type="button"
              variant="contained"
              color="success"
              onClick={() => router.replace('/get-results')}
            >
              مشاهده نتایج ثبت شده
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <p style={{ color: 'gray' }}>
        <em>توسعه یافته با <Link href="https://rastikerdar.github.io/vazirmatn/" style={{ textDecoration: 'none' }} target='_blank'>تایپوگرافی متن‌باز «وزیرمتن»</Link> اثر زنده یاد مهندس صابر راستی کردار</em>
      </p>
    </SlideContainer >
  );
};

export default Homepage;