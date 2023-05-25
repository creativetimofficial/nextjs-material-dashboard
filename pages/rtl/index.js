/* eslint-disable react-hooks/exhaustive-deps */
/**
=========================================================
* NextJS Material Dashboard 2 - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useMemo, useState } from "react";

import dynamic from "next/dynamic";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import Footer from "/examples/Footer";
import MiniStatisticsCard from "/examples/Cards/StatisticsCards/MiniStatisticsCard";
import ProgressLineChart from "/examples/Charts/LineCharts/ProgressLineChart";
import DefaultInfoCard from "/examples/Cards/InfoCards/DefaultInfoCard";
import MasterCard from "/examples/Cards/MasterCard";
import MiniInfoCard from "/examples/Cards/InfoCards/MiniInfoCard";
import ControllerCard from "/examples/Cards/ControllerCard";
import CategoriesList from "/examples/Lists/CategoriesList";
import Calendar from "/examples/Calendar";

// RTL page components
import Steps from "/pagesComponents/pages/rtl/components/Steps";
import FullBody from "/pagesComponents/pages/rtl/components/FullBody";
import MediaPlayer from "/pagesComponents/pages/rtl/components/MediaPlayer";
import OrdersOverview from "/pagesComponents/pages/rtl/components/OrdersOverview";
import UpcomingEvents from "/pagesComponents/pages/rtl/components/UpcomingEvents";
import Chart from "/pagesComponents/pages/rtl/components/Chart";

// Data
import progressLineChartData from "/pagesComponents/pages/rtl/data/progressLineChartData";
import calendarEventsData from "/pagesComponents/pages/rtl/data/calendarEventsData";
import categoriesListData from "/pagesComponents/pages/rtl/data/categoriesListData";
import caloriesChartData from "/pagesComponents/pages/rtl/data/caloriesChartData";

// NextJS Material Dashboard 2 PRO contexts
import { useMaterialUIController, setDirection } from "/context";

function RTL() {
  const [, dispatch] = useMaterialUIController();
  const [lights, setLights] = useState(false);

  const handleSetLights = () => setLights(!lights);

  // Changing the direction to rtl
  useEffect(() => {
    setDirection(dispatch, "rtl");

    return () => setDirection(dispatch, "ltr");
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
              <UpcomingEvents />
            </Grid>
            <Grid item xs={12} lg={8}>
              <ProgressLineChart
                icon="date_range"
                title="مهام"
                count={480}
                progress={60}
                height="13.375rem"
                chart={progressLineChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <MiniStatisticsCard
                  title={{ text: "صحة البطارية" }}
                  count="99 %"
                  icon={{ color: "dark", component: "battery_charging_full" }}
                  direction="left"
                />
              </MDBox>
              <MiniStatisticsCard
                title={{ text: "طبقة صوت الموسيقا" }}
                count="15/100"
                icon={{ color: "dark", component: "volume_down" }}
                direction="left"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              lg={5}
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <MDBox width="100%" mr={{ xs: 0, sm: 3 }} mb={{ xs: 3, sm: 0 }}>
                <DefaultInfoCard
                  icon="account_balance"
                  title="مرتب"
                  description="تنتمي التفاعلية"
                  value="+$2000"
                />
              </MDBox>
              <MDBox width="100%">
                <DefaultInfoCard
                  icon="paypal"
                  title="باي بال"
                  description="دفع لحسابهم الخاص"
                  value="$455.00"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={4}>
              <MasterCard
                number={4562112245947852}
                holder="جاك بيترسون"
                expires="11/22"
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <FullBody />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <ControllerCard
                state={lights}
                icon={
                  <Icon
                    className={lights ? "text-white" : "text-dark"}
                    fontSize="large"
                  >
                    lightbulb
                  </Icon>
                }
                title="درجة حرارة"
                onChange={handleSetLights}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Chart
                title="سعرات حراريه"
                count={97}
                percentage={{ color: "success", label: "+5%" }}
                chart={caloriesChartData}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <MiniInfoCard
                icon="shortcut"
                title={
                  <>
                    754&nbsp;
                    <MDTypography
                      variant="button"
                      color="secondary"
                      fontWeight="medium"
                    >
                      م
                    </MDTypography>
                  </>
                }
                description="مدينة نيويورك"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Steps />
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            {useMemo(
              () => (
                <Calendar
                  header={{ title: "تقويم", date: "Monday, 2021" }}
                  headerToolbar={false}
                  initialView="dayGridMonth"
                  initialDate="2021-08-10"
                  events={calendarEventsData}
                  selectable
                  editable
                />
              ),
              [calendarEventsData]
            )}
          </Grid>
          <Grid item xs={12} lg={3}>
            <MDBox mb={3}>
              <CategoriesList title="فئات" categories={categoriesListData} />
            </MDBox>
            <MediaPlayer />
          </Grid>
          <Grid item xs={12} lg={4}>
            <OrdersOverview />
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default RTL;
