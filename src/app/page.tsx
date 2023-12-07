"use client"
import React, { FormEvent, useState } from 'react';
import { TextField, Button, Typography, Grid, RadioGroup, FormControlLabel, Radio, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { SlideContainer } from '@/components/templates';
import { theme } from '@/theme';

interface ISingleTest {
  index: number;
  testType: 'fake' | 'real';
  slidesTimeout: Array<number>;
  secondSlideContent: 'image' | 'text'
}

const SINGLE_TEST_STATE_INITIAL_VALUE: ISingleTest = {
  index: 0,
  testType: 'fake',
  slidesTimeout: Array(8).fill(0),
  secondSlideContent: 'image',
};

const Homepage = () => {

  const [pageMode, setPageMode] = useState('main');

  // General info states 
  const [participantCode, setParticipantCode] = useState('');
  const [participantGender, setParticipantGender] = useState('male');

  // Single test state
  const [singleTestState, setSingleTestState] = useState<ISingleTest>({ ...SINGLE_TEST_STATE_INITIAL_VALUE });

  // All Tests state
  const [allTestsState, setAllTestsState] = useState<Array<ISingleTest>>([]);

  // Dialog state
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = (index: number) => {
    setOpenDialog(true);
    setSingleTestState(allTestsState[index]);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSingleTestState({ ...SINGLE_TEST_STATE_INITIAL_VALUE });
  };

  const handleParticipantGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParticipantGender((event.target as HTMLInputElement).value);
  };

  const handleInputChange = (index: number, value: string) => {
    const newNumbers = [...singleTestState.slidesTimeout];
    newNumbers[index] = Number(value);
    setSingleTestState({ ...singleTestState, slidesTimeout: newNumbers });
  };

  const handleSecondSlideContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSingleTestState({ ...singleTestState, secondSlideContent: (event.target as HTMLInputElement).value as 'image' | 'text' });
  };

  const handleTestTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSingleTestState({ ...singleTestState, testType: (event.target as HTMLInputElement).value as 'fake' | 'real' });
  };

  const handleAddTest = () => {
    setAllTestsState([...allTestsState, { ...singleTestState, index: allTestsState.length }]);
    setSingleTestState({ ...SINGLE_TEST_STATE_INITIAL_VALUE });
    setPageMode('main');
  }

  const handleDeleteTest = (index: number) => {
    let _allTests = [...allTestsState];
    _allTests.splice(index, 1);
    _allTests = _allTests.map((value, key) => ({
      ...value,
      index: key
    }));
    setAllTestsState(_allTests);
    handleCloseDialog();
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ participantCode });
    console.log({ participantGender });
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
        {
          pageMode === 'main' ?
            <>
              <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  ویرایش آزمون شماره {singleTestState.index + 1}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <Grid item container direction="column" rowGap={2}>
                      <Grid item container justifyContent="flex-start" alignItems="center" columnGap={4}>
                        <Typography variant="body1" fontWeight="bold">نوع آزمون</Typography>
                        <Typography variant="body1">{singleTestState.testType === 'fake' ? 'امتحانی' : 'واقعی'}</Typography>
                      </Grid>
                      <Grid item container justifyContent="flex-start" alignItems="center" columnGap={4}>
                        <Typography variant="body1" fontWeight="bold">محتوای اسلاید 2</Typography>
                        <Typography variant="body1">{singleTestState.secondSlideContent === 'image' ? 'تصویر' : 'متن'}</Typography>
                      </Grid>
                      {
                        singleTestState.slidesTimeout.map((value, key) => (
                          <Grid key={key} item container justifyContent="flex-start" alignItems="center" columnGap={4}>
                            <Typography variant="body1" fontWeight="bold">زمان نمایش اسلاید {key + 1}</Typography>
                            <Typography variant="body1">{value} ثانیه</Typography>
                          </Grid>
                        ))
                      }
                    </Grid>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Grid item container justifyContent="space-between" alignItems="center">
                    <Button onClick={() => handleDeleteTest(singleTestState.index)}>حذف آزمون</Button>
                    <Button onClick={handleCloseDialog}>بازگشت</Button>
                  </Grid>
                </DialogActions>
              </Dialog>
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
                    marginBlock: '1rem',
                  }}
                >
                  <Grid item container alignItems="center" xs={6}>
                    <TextField
                      label={'کد شرکت‌کننده'}
                      variant="standard"
                      type="text"
                      value={participantCode}
                      onChange={(e) => setParticipantCode(e.target.value)}
                      InputProps={{
                        inputProps: {
                          dir: 'ltr'
                        },
                      }}
                    />
                  </Grid>
                  <Grid item container alignItems="center" xs={6}>
                    <Typography variant="body1">جنسیت آزمون‌دهنده</Typography>
                    <RadioGroup row value={participantGender} onChange={handleParticipantGenderChange}>
                      <FormControlLabel value="male" control={<Radio color="primary" />} label="آقا" />
                      <FormControlLabel value="female" control={<Radio color="primary" />} label="خانم" />
                    </RadioGroup>
                  </Grid>
                </Grid>
                {
                  allTestsState.length ?
                    <Grid
                      item
                      container
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        marginBlock: '1rem',
                      }}
                      gap={4}
                    >
                      {
                        allTestsState.map((value, key) => (
                          <Grid
                            key={value.index}
                            item container justifyContent="center" alignItems="center" sx={{ width: '75px', height: '75px', backgroundColor: theme.palette.secondary.main, color: theme.palette.common.white, borderRadius: '1rem' }}
                            onClick={() => handleOpenDialog(value.index)}
                          >
                            {`آزمون ${key + 1}`}
                          </Grid>
                        ))
                      }
                    </Grid> : null
                }
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    marginBlock: '1.5rem',
                  }}
                >
                  <Button
                    type="button"
                    variant="contained"
                    color="error"
                    onClick={() => setPageMode('add-test')}
                  >
                    <AddRoundedIcon sx={{ fontSize: '1.5rem' }} />
                    <span style={{ lineHeight: '1rem' }}>افزودن آزمون</span>
                  </Button>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!allTestsState.length || !participantCode.length}
                >
                  شروع ارزیابی‌ها
                </Button>
              </Grid>
            </> :
            <>
              <Grid
                item
                container
                alignItems="center"
                sx={{
                  paddingBlock: '1rem',
                }}
              >
                <Typography variant="body1">تنظیمات زمان نمایش هر اسلاید</Typography>
                <Grid item container gap={4} justifyContent="center">
                  {singleTestState.slidesTimeout.map((value, index) => (
                    <Grid item container xs={4} justifyContent="center" key={index}>
                      <TextField
                        label={`اسلاید ${index + 1}`}
                        variant="standard"
                        type="number"
                        value={value}
                        onChange={(e) => handleInputChange(index, e.target.value)}
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
                <RadioGroup row value={singleTestState.secondSlideContent} onChange={handleSecondSlideContentChange}>
                  <FormControlLabel value="image" control={<Radio color="primary" />} label="تصویر" />
                  <FormControlLabel value="text" control={<Radio color="primary" />} label="متن" />
                </RadioGroup>
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
                <Typography variant="body1">نوع آزمون</Typography>
                <RadioGroup row value={singleTestState.testType} onChange={handleTestTypeChange}>
                  <FormControlLabel value="fake" control={<Radio color="primary" />} label="امتحانی" />
                  <FormControlLabel value="real" control={<Radio color="primary" />} label="واقعی" />
                </RadioGroup>
              </Grid>
              <Grid item container justifyContent="center" alignItems="center" columnGap={4}>
                <Button
                  type="button"
                  variant="contained"
                  color="success"
                  onClick={handleAddTest}
                >
                  <AddRoundedIcon sx={{ fontSize: '1.5rem' }} />
                  <span style={{ lineHeight: '1rem' }}>افزودن آزمون</span>
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="error"
                  onClick={() => setPageMode('main')}
                >
                  <ArrowBackIcon sx={{ fontSize: '1.5rem' }} />
                  <span style={{ lineHeight: '1rem' }}>بازگشت</span>
                </Button>
              </Grid>
            </>
        }
      </Grid>
    </SlideContainer>
  );
};

export default Homepage;