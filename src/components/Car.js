import React from 'react'
import cars from '../cars.json'
import { Card } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/styles'
// import material ui components here //
// Container, Paper, Chip //
import Home from './Home'

const Car = (props) => {
    const id = props.match.params.id
    // const name = props.match.params.Name
    const carChoice = cars[id]
    // I need to get access to the car through the ID. Currently I can access the id with props.match
    //Try mapping over cars not in the return?
    const useStyles = makeStyles(() => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: '30px',
            padding: '30px',
            width: '50%'
        }, sub: {
            padding: '50px'
        }
    }))
    const classes = useStyles()

    console.log(carChoice, "woot")
    return (
        
        <Container className={classes.root}>
            <Paper className={classes.sub} >
            <h2>{carChoice.Name}</h2>
                <Chip label={`id: ${carChoice.id}`} />
                <Chip label={`Name: ${carChoice.Name}`} />
                <Chip label={`Miles_per_Gallon: ${carChoice.Miles_per_Gallon}`} />
                <Chip label={`Cylinders: ${carChoice.Cylinders}`} />
                <Chip label={`Displacement: ${carChoice.Displacement}`} />
                <Chip label={`Horsepower: ${carChoice.Horsepower}`} />
                <Chip label={`Weight_in_lbs: ${carChoice.Weight_in_lbs}`} />
                <Chip label={`Acceleration: ${carChoice.Acceleration}`} />
                <Chip label={`Year: ${carChoice.Year}`} />
                <Chip label={`Origin: ${carChoice.Origin}`} />
                
            </Paper>
        </Container>
        
    )
}

export default Car