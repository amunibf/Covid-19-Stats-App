import React from 'react'
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import /*styles from*/ './Cards.module.css';
import CountUp from 'react-countup'
import Loader from 'react-loader-spinner'

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate }}) => 
    (!confirmed?(<Loader
        type="Puff"
        color="#00BFFF"
        height={200}
        width={200}
        timeout={3000} //3 secs

     />):
    // console.log(confirmed);
    (
        <div className="">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={'card','infected'}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>                  
                    <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={3}
                        separator=','
                    />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Active Cases of COVID-19</Typography>
                    </CardContent> 
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={'card','recovered'}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={recovered.value}
                        duration={3}
                        separator=','
                    />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent> 
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={'card',"deaths"}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={deaths.value}
                        duration={3}
                        separator=','
                    />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths caused by  COVID-19</Typography>
                    </CardContent> 
                </Grid>
            </Grid>
        </div>
    ))

export default Cards
