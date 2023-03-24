import { useState } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Textarea,
  Unstable_Grid2 as Grid
} from '@mui/material';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailconfig } from 'src/config/email.config';
import { toastifyService } from 'src/services/toastify.service';

export const AccountProfileDetails = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(emailconfig.serviceId, emailconfig.templateId, form.current, emailconfig.publicKey)
      .then((result) => {
          toastifyService.success("Email sent Sucecessfully!!")
          window.location.reload()
      }, (error) => {
          toastifyService.error("EMAIL NOT SEND!!")
      });
  };

  return (
    <form
      ref = {form}
      onSubmit={sendEmail}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="first_name"
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Please specify the last name"
                  label="Last name"
                  name="last_name"
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Please specify the email address"
                  label="Email Address"
                  name="email"
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Please specify the phone number"
                  label="Phone Number"
                  name="phone"
                  type="number"
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <textarea
                  fullWidth
                  helperText="Please type your concern!"
                  label="Write something"
                  name="message"
                  type="text"
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Please specify the country"
                  label="Country"
                  name="country"
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <button className='btn btn-primary'>
            Save details
          </button>
        </CardActions>
      </Card>
    </form>
  );
};
