import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { useGlobalContext } from './ThemeContext';

const useStyles = makeStyles((theme) => ({
    '@global': {},

    nav: {
        flexGrow: 1,
        width: '100%',
        position: 'relative',
        zIndex: '2',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    content: {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: 'red',
        marginBottom: '3rem',
        fontWeight: '100',
        letterSpacing: '3px',
    },
}));

function App() {
    const classes = useStyles();
    const { isDarkMode, setisDarkMode, backGroundColor } = useGlobalContext();

    console.log(backGroundColor);

    const handleChange = () => {
        setisDarkMode(!isDarkMode);
    };
    return (
        <div
            style={{
                height: '100vh',
                transition: 'all 0.3s ease-in-out',
                backgroundColor: `${backGroundColor}`,
            }}>
            <div className={classes.nav}>
                <AppBar
                    position='static'
                    style={{
                        transition: 'all 0.3s ease-in-out',
                        backgroundColor: `${isDarkMode ? 'white' : '#555'}`,
                    }}>
                    <Toolbar>
                        <Typography
                            variant='h6'
                            className={classes.title}
                            style={{
                                color: `${isDarkMode ? 'black' : 'white'}`,
                            }}>
                            {isDarkMode ? 'Dark Mode' : 'Lite Mode'}
                        </Typography>
                        <Switch
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </Toolbar>
                </AppBar>
            </div>

            <div className={classes.content}>
                <Typography variant='h1' className={classes.header}>
                    Overview
                </Typography>
                <p
                    style={{
                        textAlign: 'center',
                        color: `${isDarkMode ? 'white' : 'black'}`,
                        width: '90%',
                        lineHeight: '2rem',
                    }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatum odit, doloribus perferendis labore, laudantium
                    beatae quos possimus placeat laborum repudiandae ex
                    explicabo fugiat ducimus magni, sit molestiae est enim.
                    Culpa ipsam vel perferendis reiciendis repudiandae quia,
                    error sed itaque magnam fuga quasi nemo inventore?
                    Dignissimos ut minus veritatis nobis adipisci doloremque
                    eaque, sint id officiis odio voluptate? Nulla cupiditate,
                    quasi ratione alias fugit ad reprehenderit totam, deserunt
                    possimus est voluptas officia nobis, voluptatibus placeat
                    aliquid illum sed sint distinctio doloribus esse sit hic
                    odio recusandae! Inventore nulla a suscipit iure corrupti
                    non accusantium debitis molestias! Nemo id molestias
                    reiciendis corrupti in magni fuga distinctio laboriosam
                    tempore minus odit eligendi, placeat, laborum dicta. Quod
                    nulla optio illum accusantium, quam molestiae. Quae facere
                    incidunt blanditiis pariatur aut, aperiam magni, veniam iste
                    asperiores velit, dolore ad ratione magnam cumque atque
                    eveniet. Nostrum explicabo molestiae mollitia ipsam totam.
                    Libero cum possimus consequatur delectus et tempora itaque
                    iusto, dolores id, dolorum reprehenderit! Cum sapiente
                    consectetur debitis explicabo magni minus repellendus
                    pariatur perspiciatis labore! Consequuntur, laborum sed.
                    Asperiores dolor nobis recusandae, consequatur porro itaque
                    rem soluta adipisci nam accusantium fugiat, est laudantium
                    voluptate ipsa voluptates libero nulla repellendus ea
                    cumque! Deserunt ex dolore iusto commodi rem.
                </p>
            </div>
        </div>
    );
}

export default App;
