import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import RegisterStudents from "./RegisterStudents";
import Grid from "@material-ui/core/Grid";
const Accounts = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const paperStyle = { width: 320, padding: 20, margin: "20px auto" };
    const paperStyle = {
        width: 380,
        margin: "40px auto",
    };
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <Grid align="center">
            <Paper elevation={20} style={paperStyle}>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Student" />

                    <Tab label="Faculty" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    {/* <Login handleChange={handleChange} /> */}
                    <RegisterStudents role="Student" />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <RegisterStudents role="Faculty" />
                </TabPanel>
            </Paper>
        </Grid>
    );
};

export default Accounts;
