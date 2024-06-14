import React, { useEffect, useState } from 'react'
import { Grid, FormControlLabel, Switch, TextField } from '@mui/material'
import { data } from '../Json/data'
const Filter = ({ filters, datas, onFilterChange, onSearchChange }) => {
  const handleSwitchChange = (name, value, event) => {
    onFilterChange(name, value, event.target.checked)
  }
  const jsonDta = data.filter((item) => item.mall) || []
  // if(jsonDta){

  // }

  return (
    <Grid container spacing={2} style={{ marginTop: '20px' }}>
      <Grid item xs={12}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          placeholder="Search here..."
          value={filters.search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </Grid>
      {data.filter((item) => item.city).length > 0 ? (
        <Grid item xs={3}>
          <div style={{ borderRight: '4px solid gray', height: '160px' }}>
            <h3>{'City'}</h3>
            <FormControlLabel
              control={
                <Switch
                  name="city"
                  checked={filters.city.includes('dallas')}
                  onChange={(e) =>
                    handleSwitchChange(e.target.name, 'dallas', e)
                  }
                />
              }
              label="Dallas"
            />
            <FormControlLabel
              control={
                <Switch
                  name="city"
                  checked={filters.city.includes('san francisco')}
                  onChange={(e) =>
                    handleSwitchChange(e.target.name, 'san francisco', e)
                  }
                />
              }
              label="San Francisco"
            />
            <FormControlLabel
              control={
                <Switch
                  name="city"
                  checked={filters.city.includes('denver')}
                  onChange={(e) =>
                    handleSwitchChange(e.target.name, 'denver', e)
                  }
                />
              }
              label="Denver"
            />
          </div>
        </Grid>
      ) : (
        <Grid item xs={3}>
          <div style={{ borderRight: '4px solid gray', height: '160px' }}>
            <h3>{'Address'}</h3>
            <FormControlLabel
              control={
                <Switch
                  name="address"
                  checked={filters.address.includes('dallas')}
                  onChange={(e) =>
                    handleSwitchChange(e.target.name, 'dallas', e)
                  }
                />
              }
              label="Dallas"
            />
            <FormControlLabel
              control={
                <Switch
                  name="address"
                  checked={filters.address.includes('san francisco')}
                  onChange={(e) =>
                    handleSwitchChange(e.target.name, 'san francisco', e)
                  }
                />
              }
              label="San Francisco"
            />
            <FormControlLabel
              control={
                <Switch
                  name="address"
                  checked={filters.address.includes('denver')}
                  onChange={(e) =>
                    handleSwitchChange(e.target.name, 'denver', e)
                  }
                />
              }
              label="Denver"
            />
            <FormControlLabel
              control={
                <Switch
                  name="address"
                  checked={filters.address.includes('Surat')}
                  onChange={(e) =>
                    handleSwitchChange(e.target.name, 'Surat', e)
                  }
                />
              }
              label="Surat"
            />
          </div>
        </Grid>
      )}

      <Grid item xs={3}>
        <div style={{ borderRight: '4px solid gray', height: '160px' }}>
          <h3>{'Category'}</h3>
          <FormControlLabel
            control={
              <Switch
                name="category"
                checked={filters.category.includes('one')}
                onChange={(e) => handleSwitchChange(e.target.name, 'one', e)}
              />
            }
            label="Category One"
          />
          <FormControlLabel
            control={
              <Switch
                name="category"
                checked={filters.category.includes('two')}
                onChange={(e) => handleSwitchChange(e.target.name, 'two', e)}
              />
            }
            label="Category Two"
          />
        </div>
      </Grid>
      {data.filter((item) => item.city).length > 0 ? (
        <Grid item xs={3}>
          <div style={{ borderRight: '4px solid gray', height: '160px' }}>
            <h3>Type</h3>

            <FormControlLabel
              control={
                <Switch
                  name="type"
                  checked={filters.type.includes('A')}
                  onChange={(e) => handleSwitchChange(e.target.name, 'A', e)}
                />
              }
              label="Type A"
            />
            <FormControlLabel
              control={
                <Switch
                  name="type"
                  checked={filters.type.includes('B')}
                  onChange={(e) => handleSwitchChange(e.target.name, 'B', e)}
                />
              }
              label="Type B"
            />
            <FormControlLabel
              control={
                <Switch
                  name="type"
                  checked={filters.type.includes('C')}
                  onChange={(e) => handleSwitchChange(e.target.name, 'C', e)}
                />
              }
              label="Type C"
            />
          </div>
        </Grid>
      ) : (
        <Grid item xs={3}>
          <div style={{ borderRight: '4px solid gray', height: '160px' }}>
            <h3>Rating</h3>
            <FormControlLabel
              control={
                <Switch
                  name="rating"
                  checked={filters.rating.includes('A')}
                  onChange={(e) => handleSwitchChange(e.target.name, 'A', e)}
                />
              }
              label="Type A"
            />
            <FormControlLabel
              control={
                <Switch
                  name="rating"
                  checked={filters.rating.includes('B')}
                  onChange={(e) => handleSwitchChange(e.target.name, 'B', e)}
                />
              }
              label="Type B"
            />
            <FormControlLabel
              control={
                <Switch
                  name="rating"
                  checked={filters.rating.includes('C')}
                  onChange={(e) => handleSwitchChange(e.target.name, 'C', e)}
                />
              }
              label="Type C"
            />
          </div>
        </Grid>
      )}
      {
        data.filter((item)=>item.city).length>0 &&
      <Grid item xs={3}>
        <h3>Active</h3>
        <FormControlLabel
          control={
            <Switch
              name="active"
              checked={filters.active.includes('TRUE')}
              onChange={(e) => handleSwitchChange(e.target.name, 'TRUE', e)}
            />
          }
          label="Active"
        />
        <FormControlLabel
          control={
            <Switch
              name="active"
              checked={filters.active.includes('FALSE')}
              onChange={(e) => handleSwitchChange(e.target.name, 'FALSE', e)}
            />
          }
          label="Inactive"
        />
      </Grid>
      }
    </Grid>
  )
}

export default Filter
