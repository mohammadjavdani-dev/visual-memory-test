"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";

import { SlideContainer } from "@/components/templates";

const csvConfig = mkConfig({
  useKeysAsHeaders: true,
  filename: "visual-memory-test-data",
});

const GoToHomeButton = () => {
  const router = useRouter();
  return (
    <Button
      type="button"
      variant="contained"
      color="error"
      onClick={() => router.replace("/")}
      sx={{ marginY: "0.5rem" }}
    >
      <span style={{ lineHeight: "1rem" }}>بازگشت به صفحه اصلی</span>
    </Button>
  );
};

const GetResultsPage = () => {
  const [results, setResults] = useState(null);

  const downloadCSVExport = () => {
    const csv = generateCsv(csvConfig)(results);
    download(csvConfig)(csv);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/get-results");
        const data = await response.json();
        const tableData = [];
        let fakeID = 1;
        data.data.forEach((value) => {
          if (
            value.test_properties &&
            ![5, 25, 97, 49, 84, 101, 142].includes(value.id)
          ) {
            value.test_properties.forEach((property, j) => {
              tableData.push({
                ID: fakeID,
                Gender: value.gender,
                "Test ID": `${value.gender.charAt(0).toUpperCase()}${fakeID}_${
                  j + 1
                }`,
                "Test type": property.test_type,
                "Reaction time": property.reaction_time,
                Answer: property.has_correct_answer,
                "Test component": property.test_parameter,
                "1st slide time": property.first_slide_time,
                "2nd slide time": property.second_slide_time,
                "3rd slide time": property.third_slide_time,
                "4th slide time": property.fourth_slide_time,
                "5th slide time": property.fifth_slide_time,
                "6th slide time": property.sixth_slide_time,
                "7th slide time": property.seventh_slide_time,
                "8th slide time": property.eighth_slide_time,
              });
            });
            fakeID++;
          }
        });
        setResults(tableData);
      } catch (error) {
        setResults([]);
        toast.error("خطا در برقراری ارتباط با سرور! لطفا صفحه را رفرش کنید", {
          autoClose: 5000,
        });
      }
    })();
  }, []);

  return (
    <SlideContainer padding="0.5rem">
      {!results ? (
        <CircularProgress size={72} />
      ) : Array.isArray(results) && !results.length ? (
        <Grid container direction="column" alignItems="center" rowGap={4}>
          <Typography variant="h1">داده‌ای یافت نشد!</Typography>
          <GoToHomeButton />
        </Grid>
      ) : (
        <Grid container direction="column" alignItems="center" rowGap={4}>
          <Button type="button" variant="contained" color="success">
            <span style={{ lineHeight: "1rem" }} onClick={downloadCSVExport}>
              دانلود خروجی اکسل
            </span>
          </Button>
          <GoToHomeButton />
        </Grid>
      )}
    </SlideContainer>
  );
};

export default GetResultsPage;
