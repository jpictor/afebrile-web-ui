import React from 'react'
import PropTypes from 'prop-types'
import { createStyleSheet } from 'jss-theme-reactor'
import customPropTypes from 'material-ui/utils/customPropTypes'
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styleSheet = createStyleSheet('SimpleMediaCard', () => ({
  card: {
    height: 500
  },
  image: {
    width: '100%',
    height: '10em'
  },
  cardContent: {
    height: '300px'
  }
}))

const SimpleMediaCard = (props, context) => {
  const classes = context.styleManager.render(styleSheet);
  return (
    <Card className={classes.card}>
      <CardMedia>
        <img className={classes.image} src={props.imageUrl} alt={props.title} />
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography type="headline" component="h2">{props.title}</Typography>
        <Typography component="p">{props.text}</Typography>
      </CardContent>
    </Card>
  )
}

SimpleMediaCard.contextTypes = {
  styleManager: customPropTypes.muiRequired,
}

SimpleMediaCard.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  imageUrl: PropTypes.string
}

export default SimpleMediaCard
