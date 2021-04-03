import React from 'react';
import { Chip, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types'

const CustomChip = ({ type }) => {
  const theme = useTheme()

  const chipStyles = (type) => ({
    background: type === 'customer' ? theme.palette.info.light : theme.palette.success.light,
    color: type === 'customer' ? theme.palette.info.main : theme.palette.success.main,
    fontSize: theme.typography.pxToRem('15'),
    fontWeight: 500,
    padding: theme.spacing(0.8),
    margin: theme.spacing(0.4, 0.5),
    borderRadius: '.4rem'
  })
  return (
    <Chip
      style={chipStyles(type)}
      label={type}
      size="small"
    />
  )
}


CustomChip.prototype = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default CustomChip;
